import { motion } from "motion/react";
import { KnowledgeNetworkBackground } from "./components/KnowledgeNetworkBackground";
import { StarField } from "./components/StarField";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* 星空背景 */}
      <StarField />
      
      {/* 知识网络背景 */}
      <KnowledgeNetworkBackground />
      
      {/* 主内容 */}
      <div className="relative z-10 text-center px-6">
        {/* 主标题 */}
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-16 leading-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
            AI时代的
          </span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            企业操作系统
          </span>
        </motion.h1>

        {/* Coming Soon - 超级酷炫 */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* 发光背景 */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
          
          <div className="relative inline-block">
            {/* 外框装饰 */}
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-2xl opacity-20 blur-xl" />
            
            {/* 主容器 */}
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border-2 border-violet-500/50 rounded-2xl px-12 py-8 overflow-hidden">
              {/* 扫光效果 */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              
              {/* 文字 */}
              <div className="relative">
                <motion.div
                  className="text-6xl md:text-7xl lg:text-8xl font-black tracking-wider mb-2"
                  style={{
                    background: "linear-gradient(to right, #a78bfa, #c084fc, #e879f9, #f0abfc)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 80px rgba(168, 85, 247, 0.5)",
                  }}
                  animate={{
                    textShadow: [
                      "0 0 80px rgba(168, 85, 247, 0.5)",
                      "0 0 100px rgba(168, 85, 247, 0.8)",
                      "0 0 80px rgba(168, 85, 247, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  OG TECH
                </motion.div>
                
                <motion.div
                  className="text-2xl md:text-3xl font-light tracking-widest text-gray-300"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  COMING SOON
                </motion.div>
              </div>

              {/* 装饰点 */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-violet-400 rounded-full" />
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full" />
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-violet-400 rounded-full" />
              
              {/* 边角装饰线 */}
              <div className="absolute top-0 left-0 w-16 h-0.5 bg-gradient-to-r from-violet-400 to-transparent" />
              <div className="absolute top-0 left-0 w-0.5 h-16 bg-gradient-to-b from-violet-400 to-transparent" />
              <div className="absolute top-0 right-0 w-16 h-0.5 bg-gradient-to-l from-purple-400 to-transparent" />
              <div className="absolute top-0 right-0 w-0.5 h-16 bg-gradient-to-b from-purple-400 to-transparent" />
              <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-pink-400 to-transparent" />
              <div className="absolute bottom-0 left-0 w-0.5 h-16 bg-gradient-to-t from-pink-400 to-transparent" />
              <div className="absolute bottom-0 right-0 w-16 h-0.5 bg-gradient-to-l from-violet-400 to-transparent" />
              <div className="absolute bottom-0 right-0 w-0.5 h-16 bg-gradient-to-t from-violet-400 to-transparent" />
            </div>

            {/* 外部光环 */}
            <motion.div
              className="absolute -inset-1 border-2 border-violet-500/30 rounded-2xl"
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
