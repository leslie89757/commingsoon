import { motion } from "motion/react";
import { TrendingUp, Clock, Shield, Zap } from "lucide-react";

export function ValueProposition() {
  const values = [
    {
      icon: TrendingUp,
      metric: "300%",
      label: "决策效率提升",
      description: "AI辅助决策，减少人工分析时间",
    },
    {
      icon: Clock,
      metric: "10x",
      label: "知识检索速度",
      description: "秒级响应，智能推荐相关知识",
    },
    {
      icon: Shield,
      metric: "99.9%",
      label: "数据安全保障",
      description: "企业级加密，符合国际标准",
    },
    {
      icon: Zap,
      metric: "80%",
      label: "运营成本降低",
      description: "自动化流程，释放人力资源",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((value, index) => {
        const Icon = value.icon;
        return (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-violet-500/20 rounded-2xl p-6 h-full hover:border-violet-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {value.metric}
                </div>
                
                <div className="text-lg mb-2">{value.label}</div>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
