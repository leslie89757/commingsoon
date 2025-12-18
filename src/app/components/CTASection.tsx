import { motion } from "motion/react";
import { ArrowRight, Calendar, Mail, Phone } from "lucide-react";
import { useState } from "react";

export function CTASection() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
  });

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-violet-900/20 via-purple-900/20 to-pink-900/20 border border-violet-500/30 rounded-3xl p-12">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative grid lg:grid-cols-2 gap-12 items-center">
        {/* 左侧：文案 */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                开启AI时代
                <br />
                企业智能化之旅
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              加入1000+领先企业的内测计划，抢先体验下一代企业智能操作系统
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                </div>
                <div>
                  <div className="font-medium mb-1">专属技术顾问</div>
                  <div className="text-sm text-gray-400">1对1需求分析，定制化解决方案</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                </div>
                <div>
                  <div className="font-medium mb-1">3个月免费试用</div>
                  <div className="text-sm text-gray-400">全功能使用，无限量API调用</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                </div>
                <div>
                  <div className="font-medium mb-1">优先上线资格</div>
                  <div className="text-sm text-gray-400">第一批体验最新功能和特性</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 右侧：表单 */}
        <motion.div
          className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-2xl p-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">企业名称 *</label>
              <input
                type="text"
                placeholder="您的企业全称"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">联系人 *</label>
              <input
                type="text"
                placeholder="您的姓名"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">企业邮箱 *</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">联系电话</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="tel"
                  placeholder="138****8888"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
            </div>

            <motion.button
              className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-violet-500/50 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-5 h-5" />
              预约专属演示
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <p className="text-xs text-gray-500 text-center">
              提交即表示同意我们的服务条款和隐私政策
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
