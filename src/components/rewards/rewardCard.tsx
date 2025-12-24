interface RewardsCardProps {
    icon:string
    type:string;
    requirement:string;
    points:string | number
}


export const RewardsCard = ({icon,type, requirement , points}:RewardsCardProps) => {
    return(
        <div className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:-translate-y-1.25 hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
         <div className="w-12 h-12 rounded-xl flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">{icon}</div>
         <h4 className="text-center text-[1.1rem] font-semibold mb-2">{type}</h4>
         <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">{requirement}</p>
         <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">⭐ {points} pts</div>
         <button disabled className="w-full font-semibold p-3 rounded-lg transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white">Locked</button>
        </div>
    )
}