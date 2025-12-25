import { PageHeader } from "../layout/pageHeader"
import { RewardsTabs } from "./rewardstab"


export const RewardsHub = () => {
    return(
        <div className="relative bg-gray-50">
           
            <PageHeader/>
            <div>
               
                <p className="text-gray-600 text-[16px] font-family-roboto">
                    Earn points, unlock rewards, and celebrate your progress!
                </p>
                <div className="lg:h-[calc(100vh-110px)] [scrollbar-width:none] [-ms-overflow-style:none] overflow-x-hidden">
                    
                    <RewardsTabs/>
                </div>
            </div>
        </div>
    )
}