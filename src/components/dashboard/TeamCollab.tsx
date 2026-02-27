const TeamCollab = ({ className }: { className?: string }) => {
  const members = [
    { name: "Alexandra Deff", task: "Github Repo", status: "Completed", color: "bg-green-100 text-green-700", av: "AD", avBg: "bg-pink-200" },
    { name: "Edwin Adenike", task: "Auth System", status: "In Progress", color: "bg-yellow-100 text-yellow-700", av: "EA", avBg: "bg-orange-200" },
    { name: "Isaac Olu", task: "Search Filter", status: "Pending", color: "bg-red-100 text-red-700", av: "IO", avBg: "bg-purple-200" },
    { name: "David Oshodi", task: "Responsive UI", status: "In Progress", color: "bg-yellow-100 text-yellow-700", av: "DO", avBg: "bg-blue-200" },
  ];

  return (
    <div className={`bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-5 sm:p-6 ${className}`}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-gray-800">Team Collaboration</h3>
        <button className="text-xs font-medium text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
          + Add Member
        </button>
      </div>
      <div className="space-y-4">
        {members.map((m, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className={`w-9 h-9 ${m.avBg} rounded-full flex items-center justify-center text-xs font-bold shrink-0`}>
                {m.av}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-800">{m.name}</p>
                <p className="text-[11px] text-gray-400 truncate">Working on <span className="font-semibold text-gray-600">{m.task}</span></p>
              </div>
            </div>
            <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${m.color}`}>{m.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCollab;