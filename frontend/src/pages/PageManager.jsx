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
import { useCallback } from "react";
import { getFarmingInitialValues, getImperialInitialValues } from "../components/Input/InitialValues";

const PageManager = (props) => {
    //Manage data state and requests
    const [data,setData] = useState([])
    const [loadingData,setLoadingData] = useState(true)
    const [time,setTime] = useState("")
    const [isDisabled,setDisable] = useState(false)
    const imperialInitVal =getImperialInitialValues()
    const farmingInitVal = getFarmingInitialValues()

    //Get react-table headers and accessors
    const columns = useMemo(() => getColumnHeaders(props.endpoint),[props.endpoint]);

    //update data on button click
    const  updateData = useCallback( async () => {
        setLoadingData(true)
        getData(props.endpoint).then(function(response) {
            switch (props.endpoint) {
                case "/pearlmarket":
                    setData(response.data)
                    break;
                case "/cooking":
                    setData(calculateImperialData(props.endpoint,response.data,imperialInitVal))
                    break;
                case "/alchemy":
                    setData(calculateImperialData(props.endpoint,response.data,imperialInitVal))
                    break;
                case "/farming":
                    getData("/fruit").then(function(fruit){
                        setData(calculateFarmingData(response.data,fruit.data,farmingInitVal))
                    })
                    break;
                default:
                    <div>Error</div>
                  
            }
            
            setLoadingData(false)
            formatTime()
            setDisable(true)
            setTimeout(() => setDisable(false), 60000);
       }).catch((error) => {
          console.log(error)
       })
    })

    //get data on render
    useEffect(() =>  {
       updateData()
       return () => {
           setData([])
       }
       },[])



    function formatTime() {
        var moment = require('moment-timezone');
        var timezone = moment.tz.guess()
        setTime(moment.tz(timezone).format('hh:mm:ss A'))
    }

    function recalculateData(mastery,cp){
        switch (props.endpoint) {
            case "/cooking":
                setData(calculateImperialData(props.endpoint,data,mastery,cp))
               
                break;
            case "/alchemy":
                setData(calculateImperialData(props.endpoint,data,mastery,cp))
                break;
            case "/farming":
                console.log(calculateFarmingData(data))
                break;
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