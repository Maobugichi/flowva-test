interface ScoresProps {
    count:number;
    title:string
}

export const Scores = ({ count, title}:ScoresProps) => {
    return(
        <div className="text-center p-2 flex-1">
            <div className="text-[1.5rem] font-semibold text-[#9013FE]">
                {count}
            </div>
            <div className="text-gray-600">
                {title}
            </div>
        </div>
    )
}