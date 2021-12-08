import React, {useState} from 'react';
import Toggle from 'react-toggle';
import { useMediaQuery } from "react-responsive";
import "react-toggle/style.css"
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

const ToggleDarkMode = () => {
    const [isDark,setIsDark] = useState(true);

    const systemPrefersDark = useMediaQuery(
        {
          query: "(prefers-color-scheme: dark)"
        },
        undefined,
        prefersDark => {
          setIsDark(prefersDark);
        }
      );
    return (
      <div className="toggle-light-mode">
        <div>
          <BsSun className="icon"/>
        </div>
        <Toggle
            className="dark-toggle"
            checked={isDark}
            onChange={event  => setIsDark(event.target.checked)}
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