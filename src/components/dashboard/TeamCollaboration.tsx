import type { User } from "../../types/dashboard";

interface TeamCollaborationProps {
  users: User[];
}

const TeamCollaboration = ({ users }: TeamCollaborationProps) => {
  const getStatusColor = (status: string) => {
    return status === "active"
      ? "bg-green-100 text-[#1B4332]"
      : "bg-red-50 text-red-500";
  };

  const getAvatarFallback = (name: string) => {
    const parts = name.split(" ");
    return parts.length > 1
      ? `${parts[0][0]}${parts[1][0]}`
      : name.slice(0, 2).toUpperCase();
  };

  return (
    <div className="xl:col-span-5 xl:row-span-2 bg-white rounded-3xl sm:rounded-4xl border border-gray-200 p-5 sm:p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base md:text-lg xl:text-xl font-semibold text-gray-800">
          Team Collaboration
        </h3>
        <button className="text-xs lg:text-sm  text-[#1B4332] border border-[#1B4332] px-2 py-1 lg:px-3 xl:py-2 font-bold rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
          + Add Member
        </button>
      </div>

      <div className="space-y-5">
        {users.slice(0, 4).map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-700 shrink-0 overflow-hidden`}
              >
                {/* Providing a semi-random reliable external avatar service like dicebear, or default to initials if failed. Assuming Pravatar is okay. */}
                <img
                  src={`https://i.pravatar.cc/150?u=${user.id}`}
                  alt={user.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.innerText =
                      getAvatarFallback(user.name);
                  }}
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-800">
                  {user.name}
                </p>
                <p className="text-[11px] text-gray-400 truncate">
                  Contact:{" "}
                  <span className="font-semibold text-gray-700">
                    {user.email}
                  </span>
                </p>
              </div>
            </div>
            <span
              className={`text-[10px] font-semibold px-2.5 py-1 rounded-md whitespace-nowrap capitalize ${getStatusColor(user.status)}`}
            >
              {user.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCollaboration;
