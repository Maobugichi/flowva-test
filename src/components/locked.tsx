import { RewardsCard } from "./rewards/rewardCard"
import { rewards } from "./rewards"

export const LockedRewards = () => {
    return(
        <div className="grid  gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-6">
            {
                rewards.filter(item => item.locked).map(item => {
                    return <RewardsCard key={item.type} icon={item.icon} type={item.type} requirement={item.requirement} points={item.points}/>
                })
            }
        </div>
    )
}