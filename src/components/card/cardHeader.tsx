import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface CardHeaderProps {
  title: string;
  icon: IconDefinition;
  bgColor?: string; // optional, default provided
  textColor?: string; // optional, default provided
  fontColor?:string
}

export const CardHeader = ({
  title,
  icon,
  bgColor = "#EEF2FF",
  textColor = "text-gray-700",
  fontColor = 'text-[#70D6FF]'
}: CardHeaderProps) => {
  return (
    <div
      className={`p-4 bg-[${bgColor }] relative border border-b-[#F3F4F6] border-t-0 border-r-0 border-l-0`}
      
    >
      <h3 className={`text-lg font-semibold flex items-center gap-2 ${textColor}`}>
        <FontAwesomeIcon icon={icon} className={`${fontColor} mr-2`} />
        {title}
      </h3>
    </div>
  );
};
