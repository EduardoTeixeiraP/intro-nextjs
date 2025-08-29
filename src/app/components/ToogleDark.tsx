import { MoonIcon, SunMedium } from "lucide-react"

type props = {
    isDark: boolean
    OnToggle: () => void
}

export default function ToggleDark({ isDark, OnToggle }: props) {
    return(
        <>
        <button
            className={`p-2 rounded ${isDark ? 'bg-neutral-300 text-neutral-800' : ''}`}
            onClick={OnToggle}
        >
            {isDark ? <MoonIcon /> : <SunMedium />}
        </button>
        </>
    )
}