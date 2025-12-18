import { motion } from "motion/react";
import { TrendingUp, Zap, Target, Cpu } from "lucide-react";

export function DataStream() {
  const dataPoints = [
    { label: "实时处理", value: "99.9%", trend: "+12%", icon: Zap, color: "text-emerald-400" },
    { label: "AI准确率", value: "98.5%", trend: "+8%", icon: Target, color: "text-blue-400" },
    { label: "算力效率", value: "95.2%", trend: "+15%", icon: Cpu, color: "text-purple-400" },
    { label: "增长率", value: "156%", trend: "+23%", icon: TrendingUp, color: "text-pink-400" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {dataPoints.map((point, index) => {
        const Icon = point.icon;
        return (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="bg-slate-800/50 backdrop-blur border border-violet-500/20 rounded-xl p-4 hover:border-violet-500/50 transition-all">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/5 to-violet-500/0 rounded-xl"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
              
              <div className="relative">
                <Icon className={`w-6 h-6 ${point.color} mb-2`} />
                <div className="text-2xl mb-1">{point.value}</div>
                <div className="text-xs text-gray-400">{point.label}</div>
                <div className="text-xs text-emerald-400 mt-1">{point.trend}</div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
