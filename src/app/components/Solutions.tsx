import { motion } from "motion/react";
import { Building2, Factory, ShoppingCart, Briefcase } from "lucide-react";

export function Solutions() {
  const solutions = [
    {
      icon: Building2,
      title: "金融服务",
      description: "风险评估、智能投顾、合规监控",
      features: ["实时风控", "智能投研", "反欺诈检测"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Factory,
      title: "制造业",
      description: "供应链优化、质量管理、预测性维护",
      features: ["智能调度", "质检AI", "设备预警"],
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: ShoppingCart,
      title: "零售电商",
      description: "用户画像、需求预测、智能推荐",
      features: ["精准营销", "库存优化", "个性推荐"],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Briefcase,
      title: "企业服务",
      description: "知识管理、流程自动化、智能客服",
      features: ["知识库AI", "RPA自动化", "智能问答"],
      color: "from-emerald-500 to-green-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {solutions.map((solution, index) => {
        const Icon = solution.icon;
        return (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-2xl p-8 h-full hover:border-violet-500/50 transition-all overflow-hidden">
              {/* 背景光效 */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity`} />
              
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl mb-3">{solution.title}</h3>
                <p className="text-gray-400 mb-6">{solution.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
