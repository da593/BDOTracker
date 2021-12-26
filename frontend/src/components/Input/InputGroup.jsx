

const InputGroup = (props) => {

    
    return (
    <div className="input-group">
        <div>
            {props.tooltip}
            <label>
                {props.label}
            </label>
        </div>
        <div className="input-container">
            {props.input}
        </div>
    </div>
    )
}

export default InputGroup