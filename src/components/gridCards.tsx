import { CardContainer } from "./card/cardContainer"
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { CardHeader } from "./card/cardHeader";
import { faCalendar } from "@fortawesome/free-regular-svg-icons/faCalendar";
import reclaim from "../assets/reclaim-flowva.png"
import { Calendar } from "lucide-react";
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { DailyCheckIn } from "./dailyCheckIn";
import { PointsProgress } from "./pointsProgress";


export const GridCards = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CardContainer>
                <CardHeader title="Points Balance" icon={faAward} fontColor="text-purple-600"/>
                <PointsProgress/>
            </CardContainer>
            <CardContainer>
                <CardHeader title="Daily Streak" icon={faCalendar}/>
                <DailyCheckIn/>
            </CardContainer>
            <div className="hover:-translate-y-0.75 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] bg-white rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.05)]  overflow-hidden border border-[#F3F4F6] transition-all duration-300 ease-in-out">
                <div className="p-4  bg-[linear-gradient(135deg,#9013FE_0%,#70D6FF_100%)] text-white relative overflow-hidden">
                    <span className="tabsolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                    <div className="flex items-center justify-between">
                        <h3 className="text-[1.25rem] font-bold relative z-2">
                            Top Tool Spotlight
                        </h3>
                        <div className="overflow-hidden relative rounded-full size-10 md:size-16">
                           <img
                            src={reclaim}
                            alt="Reclaim icon"
                            />

                        </div>
                        
                    </div>
                    <p className="text-lg">
                        <strong>Reclaim</strong>
                    </p>
                </div>
                <div className="p-4">
                  <div className="flex justify-start mb-4">
                     <div className="w-6 h-6 animate-pulse bg-[#EEF2FF] rounded-md flex items-center justify-center mr-4 shrink-0 text-[#9013FE]">
                        <Calendar className="h-5 w-5" />
                     </div>
                     <div className="flex-1">
                        <h4 className="mb-1 font-semibold">Automate and Optimize Your Schedule</h4>
                        <p className="text-[0.875rem] text-gray-600">
                            Reclaim.ai is an AI-POWERED calender assistant that automatically schedules your tasks , meetings , and breaks to boost productivity. Free to try - earn Flowva Points when you sign up!
                        </p>
                     </div>
                  </div>
                </div>
                <div className="px-4 py-1.25 flex justify-between items-center border border-t-[#F3F4F6] border-b-0 border-r-0 border-l-0">
                    <button className="bg-[#9013FE] hover:bg-[#8628DA] text-white py-2 px-4 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 border-0">
                        <FontAwesomeIcon icon={faUserPlus} className="text-white h-5 w-5" />
                        Sign up
                    </button>
                    <button className="bg-[linear-gradient(45deg,#9013FE,#FF8687)] text-white py-2 px-4 rounded-full font-semibold text-sm ">
                        <FontAwesomeIcon icon={faGift} className="text-white h-5 w-5" /> Claim 50 pts
                    </button>
                </div>
            </div>
        </div>
    )
}