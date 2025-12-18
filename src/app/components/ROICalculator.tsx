import { motion } from "motion/react";
import { TrendingUp, DollarSign, Users, Clock } from "lucide-react";
import { useState } from "react";

export function ROICalculator() {
  const [employees, setEmployees] = useState(100);
  
  // 计算投资回报
  const hoursSavedPerEmployee = 8; // 每月每人节省8小时
  const avgHourlyCost = 200; // 平均时薪200元
  const monthlyROI = employees * hoursSavedPerEmployee * avgHourlyCost;
  const yearlyROI = monthlyROI * 12;
  const estimatedCost = employees * 299; // 假设每用户299元/月

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-violet-500/30 rounded-3xl p-8 md:p-12">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* 左侧：计算器 */}
        <div>
          <h3 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              计算您的投资回报
            </span>
          </h3>
          <p className="text-gray-400 mb-8">
            看看企业大脑能为您节省多少成本
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-3">
                您的团队规模
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-violet-500 [&::-webkit-slider-thumb]:to-purple-500"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>10人</span>
                  <span className="text-violet-400 font-medium text-lg">{employees}人</span>
                  <span>1000人</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <Clock className="w-4 h-4" />
                  <span>月节省时间</span>
                </div>
                <div className="text-2xl font-bold text-violet-400">
                  {(employees * hoursSavedPerEmployee).toLocaleString()}h
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <DollarSign className="w-4 h-4" />
                  <span>月投入成本</span>
                </div>
                <div className="text-2xl font-bold text-gray-400">
                  ¥{estimatedCost.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧：ROI展示 */}
        <div className="flex flex-col justify-center">
          <motion.div
            className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-500/30 rounded-2xl p-8 mb-6"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <TrendingUp className="w-6 h-6" />
              <span className="text-sm uppercase tracking-wider">年度总收益</span>
            </div>
            <div className="text-6xl font-bold text-emerald-400 mb-2">
              ¥{yearlyROI.toLocaleString()}
            </div>
            <div className="text-gray-400">
              每年节省成本 • ROI {Math.round((yearlyROI / (estimatedCost * 12)) * 100)}%
            </div>
          </motion.div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
              <span className="text-gray-400">月度成本节省</span>
              <span className="text-xl font-bold text-white">¥{monthlyROI.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
              <span className="text-gray-400">回本周期</span>
              <span className="text-xl font-bold text-emerald-400">
                {Math.ceil(estimatedCost / monthlyROI * 30)}天
              </span>
            </div>
          </div>

          <motion.div
            className="mt-8 text-center text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            *基于企业平均时薪¥200，每人每月节省8小时计算
          </motion.div>
        </div>
      </div>
    </div>
  );
}
