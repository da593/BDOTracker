import {React} from 'react';

/*Copies given props text and alerts user it has been copied on click */
function ClipboardButton({textToBeCopied,copyMsg,setCopiedStatus}) {
  
    function handleClick() {
      navigator.clipboard.writeText(textToBeCopied);
      setCopiedStatus("Copied!")
    }

    return (
      <button onClick={handleClick} className="clipboard-button">{textToBeCopied} {copyMsg}</button>
    )
 
  }
  

  export default ClipboardButton