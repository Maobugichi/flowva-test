import { useEffect, useState } from "react";
import logo from "../../assets/flowva_logo.png"
import { navItems } from "../../constants/navItems";
import { supabase } from "../../lib/supabase";
import { ListItem } from "../listItem";
import { useLocation, useNavigate } from "react-router-dom";

export const SideNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email , setEmail ] = useState<string | undefined>('')
    
    const handleNavClick = (path: string) => {
        navigate(path);
    };

    async function getEmail() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return 
    setEmail(session?.user.email)
    }

  useEffect(() => {
    getEmail()
   },[])
    



    
    return(
        <aside className="hidden w-72 overflow-x-hidden md:flex md:flex-col h-screen shadow-md border-r border-black/10 text-black font-sans">
            <div className="flex flex-col h-full">
                <div className="p-2 px-7 my-2 flex justify-start">
                    <img src={logo} loading="eager" alt="Flowva Logo" className="h-15" />  
                </div>
                <nav className="grow px-4">
                    <ul>
                        {navItems.map((item) => (
                            <ListItem 
                                key={item.id} 
                                text={item.text} 
                                icon={item.icon}
                                isActive={location.pathname === item.path}
                                onClick={() => handleNavClick(item.path)}
                            />
                        ))}
                    </ul>
                </nav>
                <div className="mt-auto py-3 relative flex justify-center">
                    <div className="absolute top-0 left-4 right-4 border-t border-[#64748B]"></div>
                    <div className="w-full flex items-center justify-between px-4">
                        <button className="flex items-center border-none">
                            <div className="w-10 h-10 relative overflow-hidden rounded-full font-semibold mr-3 flex items-center justify-center text-[#9013FE] bg-[#E9D4FF]">
                                <p className="font-semibold">M</p>
                            </div>
                            <div className="text-start">
                                <span className="text-[0.9rem] font-semibold">Mob</span>
                                <p className="text-[0.8rem] text-[#718096] truncate overflow-x-hidden max-w-38.5">
                                    {email}
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};