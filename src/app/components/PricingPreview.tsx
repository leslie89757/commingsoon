import { motion } from "motion/react";
import { Check, Crown, Rocket, Building2, Zap, ArrowRight } from "lucide-react";

export function PricingPreview() {
  const plans = [
    {
      name: "专业版",
      icon: Rocket,
      price: "299",
      unit: "元/用户/月",
      description: "适合中小型团队快速上手",
      badge: null,
      features: [
        "50GB 知识库存储",
        "基础AI模型",
        "5个系统集成",
        "标准API调用",
        "邮件支持",
        "数据加密",
      ],
      cta: "立即试用",
      highlight: false,
    },
    {
      name: "企业版",
      icon: Building2,
      price: "699",
      unit: "元/用户/月",
      description: "大型企业的最佳选择",
      badge: "最受欢迎",
      features: [
        "无限知识库存储",
        "高级AI模型 + 自定义训练",
        "无限系统集成",
        "优先API调用",
        "7×24 专属支持",
        "高级安全合规",
        "私有化部署选项",
        "定制开发服务",
      ],
      cta: "预约演示",
      highlight: true,
    },
    {
      name: "旗舰版",
      icon: Crown,
      price: "定制",
      unit: "按需定价",
      description: "集团级解决方案",
      badge: "尊享服务",
      features: [
        "企业版全部功能",
        "专属AI模型训练",
        "多租户架构",
        "专属客户成功经理",
        "SLA 99.99%保障",
        "本地化部署",
        "源码授权（可选）",
        "战略咨询服务",
      ],
      cta: "联系销售",
      highlight: false,
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {plans.map((plan, index) => {
        const Icon = plan.icon;
        return (
          <motion.div
            key={index}
            className={`relative group ${plan.highlight ? 'lg:-mt-6 lg:mb-0' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* 徽章 */}
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <div className="px-4 py-1.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full text-sm font-medium shadow-lg">
                  {plan.badge}
                </div>
              </div>
            )}

            <div
              className={`h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 transition-all ${
                plan.highlight
                  ? 'border-2 border-violet-500 shadow-2xl shadow-violet-500/20'
                  : 'border border-slate-700 hover:border-violet-500/50'
              }`}
            >
              {/* 背景光效 */}
              {plan.highlight && (
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-2xl" />
              )}

              <div className="relative">
                {/* 图标 */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-violet-500 to-purple-600'
                    : 'bg-slate-800 border border-slate-700'
                }`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* 标题 */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

                {/* 价格 */}
                <div className="mb-8">
                  {plan.price === "定制" ? (
                    <div>
                      <div className="text-4xl font-bold mb-2">{plan.price}</div>
                      <div className="text-gray-500">{plan.unit}</div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-5xl font-bold">¥{plan.price}</span>
                        <span className="text-gray-500 line-through">¥{parseInt(plan.price) * 1.5}</span>
                      </div>
                      <div className="text-gray-500">{plan.unit}</div>
                      <div className="text-emerald-400 text-sm mt-1">限时优惠 • 节省33%</div>
                    </div>
                  )}
                </div>

                {/* 功能列表 */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlight ? 'text-violet-400' : 'text-gray-500'
                      }`} />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:shadow-lg hover:shadow-violet-500/50'
                      : 'bg-slate-800 border border-slate-700 hover:bg-slate-700'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
