import {React} from 'react';

function ClipboardButton({textToBeCopied}) {
 
    function handleClick() {
      navigator.clipboard.writeText(textToBeCopied);

    }

    return (
      <button onClick={handleClick} className="clipboard-button">{textToBeCopied}</button>
    )
 
  }
  

  export default ClipboardButton