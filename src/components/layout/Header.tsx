import { Search, Mail, Bell, Menu } from "lucide-react";

interface HeaderProps {
  onMenuToggle: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="flex items-center justify-between w-full h-20 px-2 bg-[#F8F9FA] rounded-xl">
      {/* Left section: Hamburger (Mobile) + Search */}
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Menu size={24} />
        </button>

        <div className="relative w-full max-w-md hidden sm:block">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-12 py-3 border-none rounded-full bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B4332] sm:text-sm font-medium shadow-sm"
            placeholder="Search task"
          />
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <div className="flex items-center justify-center bg-gray-100 rounded-md px-2 py-1 text-xs font-semibold text-gray-500">
              ⌘F
            </div>
          </div>
        </div>
      </div>

      {/* Right section: Actions + Profile */}
      <div className="flex items-center gap-3 sm:gap-5 justify-end">
        {/* Mobile Search Icon (only shows when input is hidden) */}
        <button className="sm:hidden w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors bg-white">
          <Search size={18} />
        </button>

        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors bg-white">
          <Mail size={18} />
        </button>

        <button className="relative w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors bg-white">
          <Bell size={18} />
          {/* Notification dot */}
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
        </button>

        <div className="h-8 w-[1px] bg-gray-200 mx-1 hidden sm:block"></div>

        <div className="flex items-center gap-3 cursor-pointer group">
          <img
            src="https://i.pravatar.cc/150?u=a042581f4e29026704z"
            alt="Totok Michael"
            className="w-10 h-10 rounded-full object-cover border border-gray-200 group-hover:border-gray-300 transition-colors"
          />
          <div className="hidden md:block text-right">
            <p className="text-sm font-semibold text-gray-800 leading-tight">
              Totok Michael
            </p>
            <p className="text-xs text-gray-400 font-medium">
              tmichael20@mail.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
