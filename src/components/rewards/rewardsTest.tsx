import { RewardsTabs } from "./rewardstab"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";


export const RewardsHub = () => {
    return(
        <div className="relative bg-gray-50">
            <div className="sticky top-0 z-10 bg-gray-50 pb-2 flex py-2 pt-3 lg:pt-0 lg:py-0 justify-between">
                <div className="flex items-center gap-3">
                    <button className="lg:hidden">
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" width="28"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>
                    </button>
                    <h1 className="font-family-roboto text-xl md:text-[1.5rem] font-medium">Rewards Hub</h1>
                </div>
                <div className="mt-2">
                    <div className="relative rounded-full bg-[#E2E8F0] block">
                        <button className="relative border-none cursor-pointer p-5 rounded-1/2 h-6.25 w-6.25 transition-all duration-300 flex justify-center items-center">
                            <FontAwesomeIcon
                                    icon={faBell}
                                    className="text-[#2D3748] group-hover:text-[#9013fe]"
                                />
                            <span className="absolute -top-px right-1 rounded-full w-3.75 h-3.75 flex items-center justify-center text-[9px] bg-[#ef4444]"></span>
                        </button>
                    </div>
                </div>
            </div>
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