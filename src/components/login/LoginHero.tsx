import { BadgeCheck } from "lucide-react";

const features = [
  {
    title: "Project Tracking",
    desc: "Keep all your projects on track",
    icon: "✅",
  },
  { title: "Team Collaboration", desc: "Work together seamlessly", icon: "👥" },
  {
    title: "Analytics & Reports",
    desc: "Gain insights into performance",
    icon: "📊",
  },
];

const LoginHero = () => {
  return (
    <div className="flex flex-col justify-between p-12 text-white w-full">
      <div>
        <div className="flex items-center gap-2 mb-12 ">
          <BadgeCheck className="mt-0.5" />
          <h1 className="text-2xl font-bold">Donezo</h1>
        </div>

        <h2 className="text-2xl md:text-4xl xl:text-5xl font-extrabold leading-tight mb-6">
          Plan, prioritize, and accomplish your tasks with ease.
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          Join thousands of teams who use Donezo to streamline their workflow.
        </p>

        {/* ফিচার কার্ডগুলো */}
        <div className="space-y-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <span className="text-2xl">{f.icon}</span>
              <div>
                <h4 className="font-semibold">{f.title}</h4>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-300">© 2024 Donezo Inc.</p>
        <p className="text-sm text-gray-300"> Privacy Terms Help</p>
      </div>
    </div>
  );
};

export default LoginHero;
