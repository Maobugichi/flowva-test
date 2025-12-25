import { useEffect, useState } from "react";
import { X } from "lucide-react";
import logo from "../../assets/flowva_logo.png";
import { navItems } from "../../constants/navItems";
import { supabase } from "../../lib/supabase";
import { ListItem } from "../listItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useSidebar } from "../../context/sidebarContext";

export const SideNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, closeSidebar } = useSidebar();
  const [email, setEmail] = useState<string | undefined>("");

  const handleNavClick = (path: string) => {
    navigate(path);
    closeSidebar();
  };

  async function getEmail() {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) return;
    setEmail(session.user.email);
  }

  useEffect(() => {
    getEmail();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      />

      <aside
        className={`
          fixed md:static
          top-0 left-0 bottom-0
          w-64 h-screen
          bg-white
          shadow-md
          border-r border-black/10
          z-50
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          md:transform-none
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="md:hidden flex justify-between relative py-3 px-2 items-center">
          <div className="px-7 flex justify-start">
            <img src={logo} alt="Flowva Logo" className="h-15" />
          </div>
          <button
            onClick={closeSidebar}
            className="absolute right-3 top-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="hidden md:flex px-7 my-2 justify-start">
          <img src={logo} alt="Flowva Logo" className="h-15" />
        </div>

        {/* Scrollable Nav */}
        <nav className="flex-1 px-4 overflow-y-auto">
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

        {/* Footer / Email */}
        <div className="mt-auto py-3 relative flex justify-center">
          <div className="absolute top-0 left-4 right-4 border-t border-[#64748B]" />
          <div className="w-full flex items-center justify-between px-4">
            <button className="flex items-center">
              <div className="w-10 h-10 rounded-full mr-3 flex items-center justify-center font-semibold text-[#9013FE] bg-[#E9D4FF]">
                M
              </div>
              <div className="text-start">
                <span className="text-[0.9rem] font-semibold">Mob</span>
                <p className="text-[0.8rem] text-[#718096] truncate max-w-[150px]">
                  {email}
                </p>
              </div>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
