import React from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css"
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { ColorSchemeState } from './ColorSchemeState';

/*Custom Toggle button to toggle light/dark mode 
Built by zsajjad: https://blog.logrocket.com/dark-mode-in-react-an-in-depth-guide/
*/
const ToggleDarkMode = () => {
    const { isDark, setIsDark } = ColorSchemeState();
  

    return (
      <div className="toggle-light-mode">
        <div>
          <BsSun className="icon"/>
        </div>
        <Toggle
            className="dark-toggle"
            checked={isDark}
            onChange={(event) => setIsDark(event.target.checked)}
            icons={false}
            aria-label="Dark mode"
        />
        <div>
          <BsMoon className="icon"/>
        </div>
      </div>
       
    )

}

export default ToggleDarkMode