import type React from "react"

export const EarnContainer = ({children}:{children:React.ReactNode}) => {
    return(
        <div className="transition-all hover:border-[#9013FE] hover:-translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] ease-linear duration-200 border border-[#E5E7EB] rounded-xl overflow-hidden">
            {children}
        </div>
    )
}