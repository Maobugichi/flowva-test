import type React from "react"

export const CardContainer = ({children}:{children:React.ReactNode}) => {
    return(
        <div className="shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all rounded-2xl hover:translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#F3F4F6] overflow-hidden duration-200">
            {children}
        </div>
    )
}