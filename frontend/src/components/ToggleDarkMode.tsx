import React, {useState} from 'react';
import Toggle from 'react-toggle';
import { useMediaQuery } from "react-responsive";
import "react-toggle/style.css"

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
        <Toggle
            className="dark-toggle"
            checked={isDark}
            onChange={event  => setIsDark(event.target.checked)}
            icons={{ checked:"🌙", unchecked: "🔆"}}
            aria-label="Dark mode"
        />
    )

}

export default ToggleDarkMode