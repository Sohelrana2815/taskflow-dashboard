import type { Product } from "../../types/dashboard";

interface ProjectListProps {
  products: Product[];
}

const ProjectList = ({ products }: ProjectListProps) => {
  // Helper function to get product icon
  const getProductIcon = (index: number) => {
    const colors = [
      "bg-blue-500",
      "bg-teal-500",
      "bg-yellow-500",
      "bg-orange-500",
      "bg-purple-600",
    ];
    const icons = [
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        key={0}
      />,
      <circle cx="12" cy="12" r="10" key={1} />,
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" key={2} />,
      <polygon points="12 2 22 22 2 22" key={3} />,
      <g key={4}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="5" fill="black" />
      </g>,
    ];

    return {
      color: colors[index % colors.length],
      iconGraphic: icons[index % icons.length],
    };
  };

  return (
    <div className="xl:col-span-3 xl:row-span-2 bg-white rounded-3xl sm:rounded-4xl border border-gray-200 p-5 sm:p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base md:text-lg xl:text-xl font-semibold text-gray-800">
          Project
        </h3>
        <button className="text-xs lg:text-sm font-bold text-[#1B4332] border border-[#1B4332] px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-full hover:bg-gray-50 transition-colors cursor-pointer ">
          + New
        </button>
      </div>

      {/* Project list */}
      <div className="space-y-5 flex-1 mt-2">
        {products.slice(0, 5).map((product, i) => {
          const uiLayer = getProductIcon(i);
          return (
            <div key={product.id} className="flex items-start gap-3">
              <div
                className={`w-8 h-8 ${uiLayer.color} rounded-full flex items-center justify-center mt-0.5 shrink-0`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="white"
                  strokeWidth="0"
                >
                  {uiLayer.iconGraphic}
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {product.name}
                </p>
                <div className="flex gap-2 text-[11px] text-gray-400">
                  <span>${product.price}</span>
                  <span>•</span>
                  <span className="capitalize">{product.category}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
