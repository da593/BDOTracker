import React, {useState,useEffect,useMemo} from 'react';
import Toggle from 'react-toggle';
import { useMediaQuery } from "react-responsive";
import "react-toggle/style.css"
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";


/*Custom Toggle button to toggle light/dark mode 
Built by zsajjad: https://blog.logrocket.com/dark-mode-in-react-an-in-depth-guide/
*/
const ToggleDarkMode = () => {
    const [isDark,setIsDark] = useState(true);
  

    const systemPrefersDark = useMediaQuery(
      {
        query: '(prefers-color-scheme: dark)',
      },
      undefined,
      (isSystemDark) => setIsDark(isSystemDark)
    );
    
    const value = useMemo(() => isDark === undefined ? !!systemPrefersDark : isDark,[isDark, systemPrefersDark])
    useEffect(() => {
      if (value) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }, [value]);

    return (
      <div className="toggle-light-mode">
        <div>
          <BsSun className="icon"/>
        </div>
        <Toggle
            className="dark-toggle"
            checked={isDark}
            onChange={({target}) => setIsDark(target.checked)}
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