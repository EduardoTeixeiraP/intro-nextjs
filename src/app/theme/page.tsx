'use client'

import { useState } from "react"
import ToggleDark from "../components/ToogleDark"

export default function Theme() {

    const [isDark, setDark] = useState(false)

    const handleThemeToggle = () => {
        setDark(isDark => !isDark)
    }
    
    return(
        <div className={`flex justify-center items-center min-h-screen
         ${isDark ? 'bg-neutral-200 text-neutral-800' : 'bg-neutral-900 text-neutral-200'}`}>
            <h1>Theme swap</h1>

             <ToggleDark isDark OnToggle={handleThemeToggle}/>
        </div>
    )
}
