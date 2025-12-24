import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

interface SocialButtonProps {
    background:string;
    icon:any
}

export const SocialButton = ({background,icon}:SocialButtonProps) => {
    return(
        <button className="w-7.5 h-7.5 rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:-translate-y-0.75" style={{background:`${background}`}}>
            <FontAwesomeIcon
            icon={icon}
            className="h-5 w-5"
            />
        </button>
    )
}