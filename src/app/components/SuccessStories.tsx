import { motion } from "motion/react";
import { Quote, TrendingUp, Clock, Users } from "lucide-react";

export function SuccessStories() {
  const stories = [
    {
      company: "某头部金融科技公司",
      industry: "金融科技",
      logo: "FinTech",
      quote: "部署企业大脑后，我们的风控决策效率提升了5倍，误判率下降62%。AI知识图谱帮助我们发现了200+个隐藏的业务关联。",
      name: "张总",
      title: "首席技术官",
      avatar: "👨‍💼",
      metrics: [
        { label: "决策效率", value: "+500%", icon: TrendingUp },
        { label: "误判率", value: "-62%", icon: Clock },
        { label: "成本节省", value: "¥2.3M", icon: Users },
      ],
    },
    {
      company: "某智能制造集团",
      industry: "智能制造",
      logo: "SmartMFG",
      quote: "通过企业大脑的供应链优化和预测性维护，我们实现了年度运营成本降低40%，设备故障率减少78%。",
      name: "李总",
      title: "运营副总裁",
      avatar: "👩‍💼",
      metrics: [
        { label: "成本降低", value: "-40%", icon: TrendingUp },
        { label: "故障率", value: "-78%", icon: Clock },
        { label: "效能提升", value: "+320%", icon: Users },
      ],
    },
    {
      company: "某电商独角兽",
      industry: "电商零售",
      logo: "E-Commerce",
      quote: "AI推荐系统让我们的转化率提升了280%，智能客服处理了85%的咨询，客户满意度从72%提升到94%。",
      name: "王总",
      title: "产品负责人",
      avatar: "🧑‍💼",
      metrics: [
        { label: "转化率", value: "+280%", icon: TrendingUp },
        { label: "自动化", value: "85%", icon: Clock },
        { label: "满意度", value: "94%", icon: Users },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {stories.map((story, index) => (
        <motion.div
          key={index}
          className="group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-violet-500/50 transition-all">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* 左侧：公司信息和引言 */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-xl font-bold mb-1">{story.company}</div>
                    <div className="text-sm text-violet-400">{story.industry}</div>
                  </div>
                  <Quote className="w-10 h-10 text-violet-500/20" />
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  "{story.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-2xl">
                    {story.avatar}
                  </div>
                  <div>
                    <div className="font-medium">{story.name}</div>
                    <div className="text-sm text-gray-500">{story.title}</div>
                  </div>
                </div>
              </div>

              {/* 右侧：关键指标 */}
              <div className="lg:w-80 flex flex-col justify-center">
                <div className="space-y-4">
                  {story.metrics.map((metric, idx) => {
                    const Icon = metric.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-violet-400" />
                          <span className="text-gray-400">{metric.label}</span>
                        </div>
                        <span className="text-2xl font-bold text-emerald-400">
                          {metric.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
