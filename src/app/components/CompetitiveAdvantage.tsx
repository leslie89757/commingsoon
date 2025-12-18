import { motion } from "motion/react";
import { Check, X } from "lucide-react";

export function CompetitiveAdvantage() {
  const features = [
    {
      name: "知识图谱 + AI融合",
      us: true,
      competitor1: false,
      competitor2: true,
    },
    {
      name: "本体论自动映射",
      us: true,
      competitor1: false,
      competitor2: false,
    },
    {
      name: "多模态数据处理",
      us: true,
      competitor1: true,
      competitor2: false,
    },
    {
      name: "实时决策支持",
      us: true,
      competitor1: true,
      competitor2: true,
    },
    {
      name: "私有化部署",
      us: true,
      competitor1: false,
      competitor2: true,
    },
    {
      name: "自定义AI模型训练",
      us: true,
      competitor1: false,
      competitor2: false,
    },
    {
      name: "企业级SLA保障",
      us: true,
      competitor1: true,
      competitor2: false,
    },
    {
      name: "无限系统集成",
      us: true,
      competitor1: false,
      competitor2: false,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="text-left py-6 px-6 text-gray-400 font-medium">功能对比</th>
            <th className="py-6 px-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center mb-2">
                  <span className="text-2xl">🧠</span>
                </div>
                <div className="font-bold text-lg">企业大脑</div>
                <div className="text-xs text-violet-400 mt-1">AI Native</div>
              </div>
            </th>
            <th className="py-6 px-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-2">
                  <span className="text-2xl">A</span>
                </div>
                <div className="text-gray-400">竞品 A</div>
              </div>
            </th>
            <th className="py-6 px-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-2">
                  <span className="text-2xl">B</span>
                </div>
                <div className="text-gray-400">竞品 B</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <motion.tr
              key={index}
              className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <td className="py-4 px-6 text-gray-300">{feature.name}</td>
              <td className="py-4 px-6 text-center">
                {feature.us ? (
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-violet-500/20">
                    <Check className="w-5 h-5 text-violet-400" />
                  </div>
                ) : (
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-800">
                    <X className="w-5 h-5 text-gray-600" />
                  </div>
                )}
              </td>
              <td className="py-4 px-6 text-center">
                {feature.competitor1 ? (
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-700">
                    <Check className="w-5 h-5 text-gray-400" />
                  </div>
                ) : (
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-800">
                    <X className="w-5 h-5 text-gray-600" />
                  </div>
                )}
              </td>
              <td className="py-4 px-6 text-center">
                {feature.competitor2 ? (
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-700">
                    <Check className="w-5 h-5 text-gray-400" />
                  </div>
                ) : (
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-800">
                    <X className="w-5 h-5 text-gray-600" />
                  </div>
                )}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
