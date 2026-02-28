import { useState } from "react";

import {
  LayoutDashboard,
  ClipboardList,
  CalendarDays,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Shell,
  Award,
} from "lucide-react";

// Menu items for the main navigation

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/dashboard",
    active: true,
  },

  {
    icon: ClipboardList,
    label: "Tasks",
    path: "/tasks",
    hasNotification: true,
  },

  { icon: CalendarDays, label: "Calendar", path: "/calendar" },

  { icon: BarChart3, label: "Analytics", path: "/analytics" },

  { icon: Users, label: "Team", path: "/team" },
];

// General section items

const generalItems = [
  { icon: Settings, label: "Settings", path: "/settings" },

  { icon: HelpCircle, label: "Help", path: "/help" },

  { icon: LogOut, label: "Logout", path: "/logout" },
];

interface SideNavProps {
  onClose?: () => void;
}

const SideNav = ({ onClose }: SideNavProps) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="flex flex-col h-full justify-between bg-[#F8F9FA] rounded-xl p-2 xl:p-4">
      {/* Logo */}

      <div>
        <div className="flex items-center gap-2.5 mb-10">
          <div className="w-9 h-9 text-1B4332 rounded-full flex items-center justify-center">
            <Shell size={50} strokeWidth={1.8} />
          </div>

          <h1 className="text-xl font-bold text-[#1B4332] tracking-tight">
            Donezo
          </h1>
        </div>

        {/* MENU section */}

        <div className="mb-8">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-4 px-3">
            Menu
          </p>

          <nav className="space-y-1 relative">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const isActive = activeItem === item.label;

              return (
                <button
                  key={item.label}
                  onClick={() => {
                    setActiveItem(item.label);

                    onClose?.();
                  }}
                  className={`

                 relative w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium  transition-all duration-200 cursor-pointer
                    ${
                      isActive
                        ? "text-black font-bold"
                        : "text-gray-500 hover:bg-gray-50 font-medium"
                    }

                  `}
                >
                  {isActive && (
                    <span
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#1B4332] rounded-r-full"
                      aria-hidden="true"
                    />
                  )}
                  <Icon
                    size={20}
                    className={isActive ? "text-[#1B4332]" : "text-gray-400"}
                    strokeWidth={isActive ? 2.5 : 1.8}
                  />

                  <span>{item.label}</span>

                  {/* Notification dot for Tasks */}

                  {item.hasNotification && (
                    <span className="ml-auto px-1.5 py-0.5 bg-[#1B4332] text-white text-[10px] font-bold rounded-md flex items-center justify-center">
                      12+
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* GENERAL section */}

        <div>
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-4 px-3">
            General
          </p>

          <nav className="space-y-1">
            {generalItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  onClick={() => {
                    setActiveItem(item.label);

                    onClose?.();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                >
                  <Icon size={18} strokeWidth={1.8} />

                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile App download card */}

      <div
        className="p-4 rounded-2xl text-white mt-6 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('/ads.webp')`,
        }}
      >
        <div className="bg-[#F8F9FA] w-8 h-8 rounded-full flex items-center justify-center mb-2 text-[#12372A]">
          <Award size={26} className="opacity-80" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <p className="font-bold text-lg">
            Download our <span className="block font-normal"> Mobile App</span>
          </p>
        </div>
        <p className="text-[11px] text-gray-50 mb-4">Get easy in another way</p>

        <button className="w-full flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#12372A] py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer ">
          Download
        </button>
      </div>
    </div>
  );
};
export default SideNav;
