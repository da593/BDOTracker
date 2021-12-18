import {React} from 'react';
import {BsFillEnvelopeFill} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import PopupLayout from './PopupLayout';
import ClipboardButton from './ClipboardButton';

/*Implements the content of the popup */

const ContactsPopup = ({copyMsg,setCopiedStatus}) => {
  
    let props = {
        buttonName:"Contacts",
        popupDescription:"questions? Want to hire me? Let me know!",
        popupBottom: 
            <ul className="popup-bottom-list">
                <li><BsFillEnvelopeFill className='BsFillEnvelopeFill'/>
                <ClipboardButton textToBeCopied="dylanau99@gmail.com" copyMsg={copyMsg} setCopiedStatus={setCopiedStatus}/>
                </li>
                <li><BsGithub className="BsGithub"/><a href="https://github.com/da593" target="_blank" rel="noopener noreferrer">&nbsp;My Github</a></li>
                <li><BsLinkedin className="BsLinkedin"/><a href="https://www.linkedin.com/in/dylan-au/" target="_blank" rel="noopener noreferrer">&nbsp;My LinkedIn</a></li>
            </ul>
        
    }

    return (
        <PopupLayout {...props}/>
    )
}


export default ContactsPopup

