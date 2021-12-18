import {React} from 'react';

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