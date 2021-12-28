import React,{useState,useEffect,useMemo} from "react";
import HeaderWrapper from '../components/wrappers/HeaderWrapper';
import ContentWrapper from '../components/wrappers/ContentWrapper';
import PopupContainer from '../components/Popups/PopupContainer';
import {BsFillCircleFill} from 'react-icons/bs'
import {BsArrowClockwise} from 'react-icons/bs'
import {getData} from '../api/apiClient';
import Table from "../components/Tables/Table";
import { getColumnHeaders } from "../components/Tables/getColumnHeaders";
import InputFactory from "../components/Input/InputFactory";
import {calculateImperialData} from '../calculations/imperialCalcs'
import {calculateFarmingData} from '../calculations/farmingCalcs'
import { getFarmingInitialValues, getImperialInitialValues } from "../components/Input/InitialValues";


const PageManager = (props) => {
    //Manage data state and requests
    //Array object reference remains the same with hooks. Must change array by using spread operator to create new array with data to trigger re-render
    const [data,setData] = useState([])
    const [fruitData,setFruitData] = useState([])
    const [loadingData,setLoadingData] = useState(true)
    const [time,setTime] = useState("")
    const [isDisabled,setDisable] = useState(false)
    const imperialInitVal =getImperialInitialValues()
    const farmingInitVal = getFarmingInitialValues()

    //Get react-table headers and accessors
    const columns = useMemo(() => getColumnHeaders(props.endpoint),[props.endpoint]);
 
    //update data on button click
    const  updateData =  async () => {
        setLoadingData(true)
        
        getData(props.endpoint).then(function(response) {
            switch (props.endpoint) {
                case "/pearlmarket":
                    return setData([...response.data])
                
                case "/cooking":
                    return setData([...calculateImperialData(props.endpoint,response.data,imperialInitVal)])
                    
                case "/alchemy":
                    return setData([...calculateImperialData(props.endpoint,response.data,imperialInitVal)])
                    
                    
                case "/farming":
                    return getData("/fruit").then(function(fruitResponse){
                        setFruitData(fruitResponse.data)
                        return fruitResponse
                    }).then((function(fruitResponse) {
                        return setData([...calculateFarmingData(response.data,fruitResponse.data,farmingInitVal)])
                    }))
                    
                default:
                    <div>Error</div>
                  
            }
      
       }).then(function(){
        setLoadingData(false)
        formatTime()
        setDisable(true)
        setTimeout(() => setDisable(false), 60000);
       }).catch((error) => {
          console.log(error)
       })
    }

    //get data on load
    useEffect(() =>  {
       updateData()
       return () => {
           setData([])
           setFruitData([])
       }
    },[])

      
    
    function formatTime() {
        var moment = require('moment-timezone');
        var timezone = moment.tz.guess()
        setTime(moment.tz(timezone).format('hh:mm:ss A'))
    }

    //Recalculate data with new input vales when input changes
    function recalculateData(values){
        switch (props.endpoint) {
            case "/cooking":
                return setData([...calculateImperialData(props.endpoint,data,values)])
            case "/alchemy":
                return setData([...calculateImperialData(props.endpoint,data,values)])
            case "/farming":
                return setData([...calculateFarmingData(data,fruitData,values)])
            default:
                return <div>Error</div>
            }
        }

    return (
        <>
        <HeaderWrapper/>
        <ContentWrapper>
            <>
            <div className='title-container'>
                <p className="title">
                    {props.title}
                </p>
                <p className="description">
                    {props.description}
                </p>
            </div>
            
            <InputFactory type={props.endpoint} recalculateData={recalculateData}/>
            
            <div className="table-update-container">
                <BsFillCircleFill style={{color: loadingData ? "yellow" : "green",padding:"0px 15px"}}/>
                <span>
                    {loadingData ? "LOADING DATA..." : "UPDATED AT " + time}
                </span>
              
                <button className="update-button" onClick={updateData} disabled={isDisabled} style={{color: isDisabled ? "red"  : "" }}>
                    <BsArrowClockwise/>
                </button>
             </div>
            <div className="table-container">
                <Table
                columns={columns} 
                data={data}
                getHeaderGroupProps= {headerGroup => ({
                
                    className: "table-group-header" 
                })}
                getHeaderProps={column => ({
                    className:"table-header",
                })}
                getRowProps={row => ({
                    className:"row",
                })}
                getCellProps={cellInfo => ({
                style: {
                    padding:"15px 15px",
                },
                })}
                />
            </div>
            </>
        </ContentWrapper>
        <PopupContainer/>
        </>
    )  
}

export default PageManager