import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{
            marginLeft: "1rem",
            fontSize: `var(--font-sm)`,
            fontWeight: '700',
            cursor: "pointer"
            
        }} onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </div>
    );
};

export default ThemeToggle;
