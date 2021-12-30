import {React} from 'react';

//Structure for the home page update list
const UpdateDescription = (props) => {
    return (
        <>
        <p className="update-version">{props.date} - version: {props.version}</p>
        <ul className="update-list">{props.updateItem}</ul>
        </>
    )
}

export default UpdateDescription