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
  Smartphone,
  Download,
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
    <div className="flex flex-col h-full justify-between">
      {/* Logo */}

      <div>
        <div className="flex items-center gap-2.5 mb-10">
          <div className="w-9 h-9 bg-[#1B4332] rounded-full flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />

              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
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

          <nav className="space-y-1">
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

                    w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium

                    transition-all duration-200 cursor-pointer

                    ${
                      isActive
                        ? "bg-[#1B4332] text-white shadow-md"
                        : "text-gray-600 hover:bg-gray-100"
                    }

                  `}
                >
                  <Icon size={18} strokeWidth={isActive ? 2.2 : 1.8} />

                  <span>{item.label}</span>

                  {/* Notification dot for Tasks */}

                  {item.hasNotification && (
                    <span className="ml-auto w-5 h-5 bg-[#E8F5E9] text-[#2E7D32] text-[10px] font-bold rounded-full flex items-center justify-center">
                      !
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

      <div className="bg-[#12372A] p-5 rounded-2xl text-white mt-6">
        <div className="flex items-center gap-2 mb-2">
          <Smartphone size={16} className="opacity-80" />

          <p className="text-xs font-semibold opacity-90">Download our</p>
        </div>

        <p className="text-sm font-bold mb-1">Mobile App</p>

        <p className="text-[11px] text-white/60 mb-4">
          Get easy in another way
        </p>

        <button className="w-full flex items-center justify-center gap-2 bg-[#2E7D32] hover:bg-[#3E8E41] py-2.5 rounded-xl text-xs font-semibold transition-colors duration-200">
          <Download size={14} />
          Download
        </button>
      </div>
    </div>
  );
};
export default SideNav;
