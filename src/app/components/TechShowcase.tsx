import { motion } from "motion/react";
import { Brain, Network, Database, Cpu, Layers, Workflow } from "lucide-react";
import { useState } from "react";

export function TechShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const techs = [
    {
      id: 0,
      title: "知识图谱引擎",
      icon: Network,
      description: "构建企业知识网络，自动发现实体关系，支持多跳推理查询",
      specs: [
        "支持千万级实体规模",
        "实时图谱更新",
        "智能关系推理",
        "可视化探索",
      ],
    },
    {
      id: 1,
      title: "深度学习平台",
      icon: Brain,
      description: "基于Transformer架构，提供预训练模型和自定义训练能力",
      specs: [
        "多模态数据处理",
        "迁移学习支持",
        "模型自动优化",
        "分布式训练",
      ],
    },
    {
      id: 2,
      title: "本体论映射",
      icon: Layers,
      description: "统一企业概念模型，实现跨系统语义互通和数据融合",
      specs: [
        "自动概念对齐",
        "多层级映射",
        "冲突消解",
        "语义验证",
      ],
    },
    {
      id: 3,
      title: "数据中台",
      icon: Database,
      description: "整合全域数据，提供统一数据服务和质量治理",
      specs: [
        "实时数据同步",
        "数据质量监控",
        "血缘关系追踪",
        "API服务化",
      ],
    },
    {
      id: 4,
      title: "智能决策引擎",
      icon: Cpu,
      description: "AI驱动的决策支持系统，提供预测分析和优化建议",
      specs: [
        "预测性分析",
        "多目标优化",
        "场景模拟",
        "决策可解释",
      ],
    },
    {
      id: 5,
      title: "流程编排",
      icon: Workflow,
      description: "可视化业务流程设计，支持复杂逻辑和外部系统集成",
      specs: [
        "拖拽式编排",
        "条件分支",
        "异步处理",
        "监控告警",
      ],
    },
  ];

  const activeTech = techs[activeTab];
  const Icon = activeTech.icon;

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* 左侧：技术列表 */}
      <div className="space-y-3">
        {techs.map((tech, index) => {
          const TechIcon = tech.icon;
          const isActive = activeTab === index;
          
          return (
            <motion.button
              key={index}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                isActive
                  ? "bg-violet-500/10 border-violet-500"
                  : "bg-slate-900/30 border-slate-700 hover:border-slate-600"
              }`}
              onClick={() => setActiveTab(index)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isActive
                      ? "bg-gradient-to-br from-violet-500 to-purple-600"
                      : "bg-slate-800"
                  }`}
                >
                  <TechIcon className="w-5 h-5 text-white" />
                </div>
                <span className={isActive ? "text-violet-300" : "text-gray-300"}>
                  {tech.title}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* 右侧：技术详情 */}
      <motion.div
        key={activeTab}
        className="bg-gradient-to-br from-slate-900 to-slate-800 border border-violet-500/30 rounded-2xl p-8"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-3xl mb-4">{activeTech.title}</h3>
        <p className="text-gray-400 text-lg mb-8">{activeTech.description}</p>

        <div className="space-y-3">
          <div className="text-sm text-gray-500 uppercase tracking-wider mb-3">核心能力</div>
          {activeTech.specs.map((spec, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              <span className="text-gray-300">{spec}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
