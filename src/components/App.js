import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../context/theme";
import { UserProvider } from "../context/user";
import Header from "./Header";
import Profile from "./Profile";

function App() {
  
  const { theme } = useContext(ThemeContext);
  console.log(theme)
  return (
    <main className={theme}>
      <UserProvider>
        <ThemeProvider>
            < Header theme={theme} setTheme={setTheme}/>
            <Profile heme={theme}  />
        </ThemeProvider>
      </UserProvider>
    </main>
  
  );
}

export default App;
