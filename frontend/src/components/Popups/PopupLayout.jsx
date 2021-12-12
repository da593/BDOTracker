import React,{useState,useRef} from 'react';
import {BsFillEnvelopeFill} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BsFillXCircleFill} from "react-icons/bs";

const PopupLayout = ( a = {} ) => {
    const emailRef = useRef(null);
    const textRef = useRef(null);
    const [visible,setVisibility] = useState(false);
    const [copySuccess, setCopySuccess] = useState("");
    
    const copyEmail = (e) => {
        textRef.current.value = "dylanau99@gmail.com";
        textRef.current.select();
        document.execCommand("copy");
        e.target.focus();
        setCopySuccess("Copied!");

    }

    const closePopup = () => {
        setVisibility(false)
        setCopySuccess("")
    }
    return (
        <><li className="navbar-item"><button id="contact-button" onClick={() => setVisibility(true)}>Contact Me</button></li>
        <textarea
            ref={textRef}
            style={{ opacity: 0, position: "absolute", top: "-200px" }}>
        </textarea>
        <div className="popup-container" style={{ display: visible ? 'block' : 'none' }}>
                <div className="popup-content">
                    <div className="top-window">
                        <button className="close-button" onClick={() => closePopup()}><BsFillXCircleFill /></button>
                    </div>
                    <div className="popup-header">
                        <p>Contacts</p>
                        <p className="popup-header-content"> <br />questions? Want to hire me? Let me know!</p>
                    </div>
                    <div className="popup-links">
                        <ul className="popup-list">
                            <li ref={emailRef}><BsFillEnvelopeFill/>
                                <button id="copy-email" className="copy-button" onClick={copyEmail}>&nbsp;dylanau99@gmail.com
                                </button>
                                {copySuccess}
                            </li>
                            <li><BsGithub/><a href="https://github.com/da593" target="_blank" rel="noopener noreferrer">&nbsp;My Github</a></li>
                            <li><BsLinkedin/><a href="https://www.linkedin.com/in/dylan-au/" target="_blank" rel="noopener noreferrer">&nbsp;My LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
        </div></>
    )
}

    


    
export default ContactsButton