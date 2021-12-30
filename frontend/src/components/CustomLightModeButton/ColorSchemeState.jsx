import { useEffect, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import createPersistedState from 'use-persisted-state';

const useColorSchemeState = createPersistedState('colorScheme');

//Utilize function to change css theme via media query. Everytime the button state changes, force a re-render which renders the corresponding theme
export function ColorSchemeState() {

    const systemPrefersDark = useMediaQuery(
        {
          query: '(prefers-color-scheme: dark)',
        },
        undefined,
       
      );
      const [isDark,setIsDark] = useColorSchemeState();

      const value = useMemo(() => isDark === undefined ? !!systemPrefersDark : isDark,[isDark, systemPrefersDark])

      useEffect(() => {
        if (value) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [value]);

      return {
        isDark,
        setIsDark,
      };
    
}