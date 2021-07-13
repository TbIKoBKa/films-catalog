import React, { useState } from 'react';
import './App.css';
import App from './App'
import Themes from './Themes'
import ThemeContext from './ThemeContext'

function AppContext() {
  let [ theme, setTheme ] = useState('dark');

  return (
	<ThemeContext.Provider value={theme === 'dark' ? Themes.dark : Themes.light}>
		<App theme={theme} setTheme={setTheme}/>
	</ThemeContext.Provider>
  );
}

export default AppContext;
