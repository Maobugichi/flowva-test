import { useState } from "react";
import { Share2, Star, Users } from "lucide-react";
import { GridCards } from "../gridCards";
import { Header } from "../common/header";
import { EarnContainer } from "../earnContainer";
import { EarnHeader } from "../earnHeader";
import { Scores } from "../scores";
import { SocialButton } from "../common/socialButtons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { CopyButton } from "../common/copyBtn";
import { ShareStackModal } from "../common/modal";

export const EarnPoints = () => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    
    const socialIcons = [
        {
            background:'rgb(24,119,242)',
            icon:faFacebookF
        },
        {
            background:'black',
            icon:faXTwitter
        },
        {
            background:'rgb(0,119,181)',
            icon:faLinkedinIn
        },
        {
            background:'rgb(37,211,102)',
            icon:faWhatsapp
        }
    ];

    const handleShareClick = () => {
        setIsShareModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsShareModalOpen(false);
    };

    return(
        <div>
            <Header text="Your Rewards Journey"/>
            <GridCards/>
            <div className="space-y-6">
                <Header text="Earn More Points"/>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <EarnContainer>
                        <EarnHeader>
                            <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 bg-[rgba(228,144,230,0.1)] text-[#9013FE]">
                                <Star className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold">
                                    Refer and win 10,000 points!
                                </h3>
                            </div>
                        </EarnHeader>
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-sm">
                                        Invite 3 friends by Nov 20 and earn a chance to be one of 5 winners of {" "}
                                        <span className="text-[#9013FE]">10,000 points</span>
                                        . Friends must complete onboarding to qualify
                                    </p>
                                </div>
                            </div>
                        </div>
                    </EarnContainer>
                    <EarnContainer>
                        <EarnHeader>
                            <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 bg-[rgba(144,19,254,0.1)] text-[#9013FE]">
                                <Share2  />
                            </div>
                            <div>
                                <h3 className="font-semibold">
                                    Share Your Stack
                                </h3>
                                <p className="text-xs text-gray-500">Earn +25</p>
                            </div>
                        </EarnHeader>
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Share your tool stack</p>
                                </div>
                                <button 
                                    onClick={handleShareClick}
                                    className="bg-[#EEF2FF] hover:text-white hover:bg-[#9013FE] text-[#9013FE] py-2 px-4 rounded-full font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2 border-0"
                                >
                                    <Share2/>
                                    Share
                                </button>
                            </div>  
                        </div>
                    </EarnContainer>
                </div>
            </div>
            <div className="space-y-6">
                <Header text="Refer & Earn"/>
                <div className="shadow-[0_5px_15px_rgba(0,0,0,0.05)] rounded-2xl hover:-translate-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#f3f4f6] overflow-hidden transition-shadow duration-200">
                    <div className="p-4 relative border border-b-[#F3F4F6] bg-[#EEF2FF] border-t-0 border-l-0 border-r-0">
                        <div className="flex items-center gap-3">
                            <Users className="h-6 w-6 text-[#9013FE]"/>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700">
                                    Share Your Link
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    Invite friends and earn 25 points when they join!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="space-y-6">
                            <div className="flex justify-between mb-4">
                                <Scores count={0} title="Referrals"/>
                                <Scores count={0} title="Points Earned"/>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <p className="text-sm mb-2 text-gray-700">Your personal referral link</p>
                                <div className="relative">
                                    <input type="text" readOnly className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:border-transparent w-full pr-10" value="https://app.flowvahub.com/signup/?ref=mob3824" />
                                    <CopyButton text="https://app.flowvahub.com/signup/?ref=mob3824" />
                                </div>
                            </div>
                            <div className="flex justify-center gap-4 mt-4">
                                {socialIcons.map((item, index) => (
                                    <SocialButton key={index} background={item.background} icon={item.icon}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

         
            <ShareStackModal 
                isOpen={isShareModalOpen} 
                onClose={handleCloseModal}
            />
        </div>
    );
};