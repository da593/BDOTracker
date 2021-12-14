import React, { useState } from 'react';

function ClipboardButton(props) {
    const [isCopied,setCopied] = useState("")

    function handleClick() {
      navigator.clipboard.writeText(props.copy);
      setCopied("Copied!")
    }
  
    return <button onClick={handleClick} className="clipboard-button">{props.copy} {isCopied}</button>;
  }
  

  export default ClipboardButton