import { type ReactNode } from "react";

interface ListItemProps {
  text: string;
  icon: ReactNode; 
  isActive:boolean,
  onClick:() => void
}

export const ListItem = ({ text, icon , isActive , onClick }: ListItemProps) => {
  return (
    <li 
    onClick={onClick}
    className={` flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer duration-200 transition-all hover:bg-[rgba(144,19,254,0.1)] hover:text-[#9013FE]
       ${isActive 
            ? 'bg-[#9013FE33] text-[#9013FE] ' 
            : 'text-gray-700 hover:bg-gray-100'
        }
    `}>
      {icon}
      <span className="tracking-wide truncate">{text}</span>
    </li>
  );
};
