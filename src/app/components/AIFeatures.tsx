import { motion } from "motion/react";
import { Brain, Sparkles, Rocket, Shield, Zap, Globe } from "lucide-react";

export function AIFeatures() {
  const features = [
    {
      icon: Brain,
      title: "深度学习引擎",
      description: "基于Transformer架构的企业级AI模型",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Sparkles,
      title: "智能知识图谱",
      description: "自动构建企业知识网络与关系推理",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Rocket,
      title: "实时数据处理",
      description: "毫秒级响应，支持百万级并发请求",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Shield,
      title: "企业级安全",
      description: "零信任架构，端到端加密保护",
      gradient: "from-emerald-500 to-green-500",
    },
    {
      icon: Zap,
      title: "智能决策支持",
      description: "AI驱动的预测分析与决策优化",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "全域数据互联",
      description: "打通企业全业务系统数据孤岛",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-full bg-slate-900/50 backdrop-blur border border-violet-500/20 rounded-xl p-6 overflow-hidden hover:border-violet-500/50 transition-all">
              {/* 渐变背景 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              {/* 图标 */}
              <motion.div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-2.5 mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Icon className="w-full h-full text-white" />
              </motion.div>
              
              {/* 内容 */}
              <h3 className="text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
              
              {/* 装饰线 */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.gradient}`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
