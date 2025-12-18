import { motion } from "motion/react";

export function TrustSignals() {
  // 模拟知名企业logo
  const companies = [
    { name: "华为", logo: "HUAWEI" },
    { name: "阿里巴巴", logo: "Alibaba" },
    { name: "腾讯", logo: "Tencent" },
    { name: "字节跳动", logo: "ByteDance" },
    { name: "京东", logo: "JD.com" },
    { name: "百度", logo: "Baidu" },
    { name: "美团", logo: "Meituan" },
    { name: "小米", logo: "Xiaomi" },
  ];

  return (
    <div className="relative overflow-hidden py-8">
      {/* 渐变遮罩 */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
      
      {/* 滚动容器 */}
      <motion.div
        className="flex gap-12"
        animate={{
          x: [0, -1200],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* 重复两次以实现无缝循环 */}
        {[...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center w-40 h-20 bg-slate-900/30 border border-slate-700 rounded-xl"
          >
            <span className="text-xl font-semibold text-gray-400 opacity-50 hover:opacity-100 transition-opacity">
              {company.logo}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
