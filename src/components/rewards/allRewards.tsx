import { RewardsCard } from "./rewardCard"
import { rewards } from "../rewards"

export const AllRewards = () => {
    
    return(
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-6">
            {
                rewards.map(item => {
                    return <RewardsCard icon={item.icon} type={item.type} requirement={item.requirement} points={item.points}/>
                })
            }
        </div>
    )
}