import { useEffect, useState } from "react";
import { X } from "lucide-react";
import logo from "../../assets/flowva_logo.png"
import { navItems } from "../../constants/navItems";
import { supabase } from "../../lib/supabase";
import { ListItem } from "../listItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useSidebar } from "../../context/sidebarContext";


export const SideNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isOpen, closeSidebar } = useSidebar();
    const [email, setEmail] = useState<string | undefined>('')
    
    const handleNavClick = (path: string) => {
        navigate(path);
        closeSidebar(); 
    };

    async function getEmail() {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) return 
        setEmail(session?.user.email)
    }

    useEffect(() => {
        getEmail()
    }, [])

   
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <div className="flex flex-col md:flex-row min-h-dvh lg:screen lg:md:overflow-hidden w-full">
           
            <div 
                className={`fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={closeSidebar}
            />

          
            <aside className={`
                fixed 
                top-0 left-0 bottom-0
                w-64 
                h-full
                shadow-md 
                border-r border-black/10 
                text-black 
                font-sans
                bg-white
                z-50
                transform transition-transform duration-300 ease-in-out
                md:transform-none
                flex flex-col
                ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                <div className="flex flex-col space-y-6 md:space-y-0 h-full">
                   
                    <div className="md:hidden  flex justify-between relative py-3  px-2 items-center">
                        <div className="my-0 p-0 md:p-2 px-7   flex justify-start">
                            <img src={logo} loading="eager" alt="Flowva Logo" className="h-15" />  
                        </div>
                        <button 
                            onClick={closeSidebar}
                            className=" hover:bg-gray-100 absolute right-3 top-3 rounded-full transition-colors"
                        >
                            <X className="h-6 w-6 text-gray-600" />
                        </button>
                         
                    </div>
                    <div className="p-2 px-7 hidden  my-2 md:flex justify-start">
                        <img src={logo} loading="eager" alt="Flowva Logo" className="h-15" />  
                    </div>
                   
                    
                    <nav className="grow px-4 overflow-y-auto">
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
                    
                    <div className="py-3  relative  flex justify-center">
                        <div className="absolute top-0 left-4 right-4 border-t border-[#64748B]"></div>
                        <div className="w-full flex items-center justify-between  px-4">
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
        </div>
    );
};