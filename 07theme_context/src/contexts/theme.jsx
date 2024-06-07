import  { createContext, useContext } from 'react'

//theme context
export const ThemeContext = createContext({
    themeMode :"light",
    darkTheme: () => {},
    lightTheme: () => {},
})

//context provider

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return (
        useContext(ThemeContext)
    )
}