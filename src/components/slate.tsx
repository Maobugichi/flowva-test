interface SlateProps {
  item: string;
  active: boolean;
  checked: boolean;
  hasClaimedToday: boolean;
}

export const Slate = ({ item, active, checked, hasClaimedToday }: SlateProps) => {
 

  if (checked && active) {
    return (
      <div className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-300 text-gray-500 ring-2 ring-[#9013FE] ring-offset-2">
        {item}
      </div>
    );
  }

  if (hasClaimedToday && !checked) {
    return (
      <div className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-200 text-gray-500">
        {item}
      </div>
    );
  }


  if (hasClaimedToday) {
    return (
      <div className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-300 text-gray-500">
        {item}
      </div>
    );
  }




  if (checked && !active) {
    return (
      <div className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-[#70D6FF] border-4 border-cyan-200 text-white">
        {item}
      </div>
    );
  }

 
  if (active && !checked) {
    return (
      <div className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-300 text-gray-500 ring-2 ring-[#9013FE] ring-offset-2">
        {item}
      </div>
    );
  }

 
  return (
    <div className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-300 text-gray-400">
      {item}
    </div>
  );
};