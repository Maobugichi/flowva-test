import { RewardsCard } from "./rewards/rewardCard"
import { rewards } from "./rewards"

export const UnlockedRewards = () => {
  return (
    <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-6">
      {rewards
        .filter(item => !item.locked)
        .map(item => (
          <RewardsCard
            key={ item.type}
            icon={item.icon}
            type={item.type}
            requirement={item.requirement}
            points={item.points}
          />
        ))}
    </div>
  )
}
