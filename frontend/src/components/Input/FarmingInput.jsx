import {React} from 'react';
import InputGroup from './InputGroup';
import { validateNumber, validateRange, validateProfessionNumber} from './validation';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import ReactTooltip from 'react-tooltip';


const FarmingInput = ({recalculateData,setValue,values,setProfessionalLevel}) => {
    

    return (
        <div className="input-grid">
            <div className="input-row">
            <InputGroup 
                label="Origin Town"
                input= {
                    <select name="origin" value={values.origin} onChange={e => setValue( e.target.name,e.target.value)}>
                        <option value="grana">Grana</option>
                        <option value="old-wisdom-tree">Old Wisdom Tree</option>
                    </select>
                }
            />
            <InputGroup 
                tooltip={
                    <>
                        <BsFillInfoCircleFill data-tip="Number of crates your worker produces each production cycle (e.g. 4 for triple crate worker)" style={{fontSize:"16px",paddingRight:"5px"}}/> 
                        <ReactTooltip textColor="rgb(0,0,0)" backgroundColor='rgb(256,256,256)'  border borderColor='rgb(0,0,0)' effect="solid"/>
                    </>
                }
                label="Crates Per Task"
                input= {
                    <select name="cratesPerTask" value={values.cratesPerTask} onChange={e => setValue( e.target.name,e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="4" >4</option>
                    </select>
                }
            />
            <InputGroup 
                tooltip={
                    <>
                        <BsFillInfoCircleFill data-tip="Select your trade level and enter the respective value (e.g. Master 25)" style={{fontSize:"16px",paddingRight:"5px"}}/> 
                        <ReactTooltip textColor="rgb(0,0,0)" backgroundColor='rgb(256,256,256)'  border borderColor='rgb(0,0,0)' effect="solid"/>
                    </>
                }
                label="Trade Profession Level"
                input= {
                    <div className="trade-profession">
                        <select name="pSelect" value={values.pSelect} onChange={e => setProfessionalLevel(e.target.value,validateProfessionNumber(values.pLevel,e.target.value))}>
                            <option value="1">Beginner</option>
                            <option value="2">Apprentice</option>
                            <option value="3">Skilled</option>
                            <option value="4">Professional</option>
                            <option value="5">Artisan</option>
                            <option value="6">Master</option>
                            <option value="7">Guru</option>
                        </select>
                        <input
                           
                            name="pLevel"
                            typeof="integer"
                            value={values.pLevel}
                            onBlur={e=> (e.target.value === "0") ? setValue(e.target.name,1) : "" }
                            onChange={e => validateNumber(e.target.value, e.target.getAttribute('typeof')) ? setProfessionalLevel(values.pSelect,validateProfessionNumber(e.target.value,values.pSelect)) :  "" }
                        >
                        </input>
                    </div>
                }
            />
            </div>
            <div className="input-row">
            <InputGroup 
                tooltip={
                    <>
                        <BsFillInfoCircleFill data-tip="Affects tax sale from marketplace. 1000-3999: 0.5%, 4000-6999: 1%, 7000+: 1.5%" style={{fontSize:"16px",paddingRight:"5px"}}/> 
                        <ReactTooltip textColor="rgb(0,0,0)" backgroundColor='rgb(256,256,256)'  border borderColor='rgb(0,0,0)' effect="solid"/>
                    </>
                }
                label="Family Fame"
                input= {
                    <input
                    typeof="integer"
                    name="fame"
                    min={0}
                    max={10000}
                    value={values.fame}
                    onChange={e=> validateNumber(e.target.value, e.target.getAttribute('typeof')) ? setValue(e.target.name,validateRange(e.target.value,e.target.min,e.target.max)) : ""}
                    
                    />
                }
            />
            <InputGroup 
                label="Value Pack"
                input= {
                    <select name="vp" value={values.vp} onChange={e => setValue( e.target.name,e.target.value)}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                }
            />
            <InputGroup 
                label="Merchant Ring"
                input= {
                    <select name="ring" value={values.ring} onChange={e => setValue( e.target.name,e.target.value)}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                }
            />
            </div>
            <div className="input-row">
            <InputGroup 
                label="Hours Online"
                input= {
                    <input
                    typeof="integer"
                    name="hours"
                    min={0}
                    max={24}
                    value={values.hours}
                    onChange={e=> validateNumber(e.target.value, e.target.getAttribute('typeof')) ? setValue(e.target.name,validateRange(e.target.value,e.target.min,e.target.max)) : ""}
                    
                    />
                }
            />
            <InputGroup 
                tooltip={
                    <>
                        <BsFillInfoCircleFill data-tip="Maximum amount of times you can check to replant/harvest your farm per day" style={{fontSize:"16px",paddingRight:"5px"}}/> 
                        <ReactTooltip textColor="rgb(0,0,0)" backgroundColor='rgb(256,256,256)'  border borderColor='rgb(0,0,0)' effect="solid"/>
                    </>
                }
                label="Max Harvest per Day"
                input={
                    <input 
                    typeof="integer"
                    name="cycle"
                    min={0}
                    max={8}
                    value={values.cycle}
                    onChange={e=> validateNumber(e.target.value, e.target.getAttribute('typeof')) ? setValue(e.target.name,validateRange(e.target.value,e.target.min,e.target.max)) : ""}
                   
                    />
                }
            />
            <InputGroup 
                label="Farming Slots"
                input={
                    <input 
                    typeof="integer"
                    name="slots"
                    min={0}
                    max={100}
                    value={values.slots}
                    onChange={e=> validateNumber(e.target.value, e.target.getAttribute('typeof')) ? setValue(e.target.name,validateRange(e.target.value,e.target.min,e.target.max)) : ""}
                   
                    />
                }
            />
            <InputGroup 
                label="Fertilzer Used"
                input= {
                    <select name="fertilizer" value={values.fertilizer} onChange={e=> setValue(e.target.name,e.target.value)}>
                        <option value="yes">Yes</option>
                        <option value="no" >No</option>
                    </select>
                }
            />
            </div>
        </div>
    )
}

export default FarmingInput