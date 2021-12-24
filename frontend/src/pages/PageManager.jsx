import React,{useState,useEffect,useMemo} from "react";
import HeaderWrapper from '../components/wrappers/HeaderWrapper';
import ContentWrapper from '../components/wrappers/ContentWrapper';
import PopupContainer from '../components/Popups/PopupContainer';
import {BsFillCircleFill} from 'react-icons/bs'
import {BsArrowClockwise} from 'react-icons/bs'
import {getData} from '../api/apiClient';
import Table from "../components/Tables/Table";
import { getColumnHeaders } from "../components/Tables/getColumnHeaders";

const PageManager = (props) => {

   
    //Manage data state and requests
    const [data,setData] = useState([])
    const [loadingData,setLoadingData] = useState(true)
    const [time,setTime] = useState("")
    const [isDisabled,setDisable] = useState(false)

    //Get react-table headers and accessors
    const columns = useMemo(() => getColumnHeaders(props.endpoint),[props.endpoint]);
    //get data on render
    useEffect(() =>  {
       getData(props.endpoint).then(function(response) {
           setData(response.data)
           setLoadingData(false)
           formatTime()
          
       }).catch((error) => {
          console.log(error)
       })
 
       },[props.endpoint])

    //update data on button click
    function updateData() {
        setLoadingData(true)
        getData(props.endpoint).then(function(response) {
            setData(response.data)
            setLoadingData(false)
            formatTime()
            setDisable(true)
            setTimeout(() => setDisable(false), 60000);
       }).catch((error) => {
          console.log(error)
       })
    }

    function formatTime() {
        var moment = require('moment-timezone');
        var timezone = moment.tz.guess()
        setTime(moment.tz(timezone).format('hh:mm:ss A'))
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
            <div className="input-grid">
                {props.input}
            </div>
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