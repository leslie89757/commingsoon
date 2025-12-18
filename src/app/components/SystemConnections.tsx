import { motion } from "motion/react";
import { Database, Cloud, Server, Layers, Brain } from "lucide-react";

export function SystemConnections() {
  const systems = [
    { name: "ERP系统", icon: Database, color: "bg-blue-500" },
    { name: "CRM系统", icon: Cloud, color: "bg-green-500" },
    { name: "OA系统", icon: Server, color: "bg-yellow-500" },
    { name: "BI系统", icon: Layers, color: "bg-purple-500" },
  ];

  return (
    <div className="relative flex items-center justify-center">
      {/* 中心企业大脑 */}
      <motion.div
        className="absolute z-10 w-24 h-24 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <Brain className="w-12 h-12 text-white" />
      </motion.div>

      {/* 周围的系统 */}
      {systems.map((system, index) => {
        const angle = (index * 360) / systems.length;
        const radius = 120;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        const Icon = system.icon;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {/* 连接线 */}
            <svg
              className="absolute pointer-events-none"
              style={{
                left: "50%",
                top: "50%",
                width: Math.abs(x) * 2,
                height: Math.abs(y) * 2,
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.line
                x1={x > 0 ? 0 : Math.abs(x) * 2}
                y1={y > 0 ? 0 : Math.abs(y) * 2}
                x2={x > 0 ? Math.abs(x) * 2 : 0}
                y2={y > 0 ? Math.abs(y) * 2 : 0}
                stroke="rgba(139, 92, 246, 0.2)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
              />
            </svg>

            <div className="flex flex-col items-center gap-2">
              <div
                className={`w-16 h-16 rounded-lg ${system.color} bg-opacity-20 border-2 border-current flex items-center justify-center`}
                style={{ borderColor: system.color.replace("bg-", "") }}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap">
                {system.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
