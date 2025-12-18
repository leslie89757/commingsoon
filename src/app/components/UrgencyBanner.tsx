import { motion } from "motion/react";
import { Clock, Flame, Users } from "lucide-react";
import { useEffect, useState } from "react";

export function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 13,
    hours: 7,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-r from-orange-900/30 via-red-900/30 to-orange-900/30 border-2 border-orange-500/50 rounded-2xl p-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* 动画背景 */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
        {/* 左侧：紧迫信息 */}
        <div className="flex items-center gap-4">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Flame className="w-8 h-8 text-orange-400" />
          </motion.div>
          
          <div>
            <div className="text-lg font-bold text-orange-300 mb-1">
              🔥 限时早鸟优惠 - 仅剩 127 个名额
            </div>
            <div className="text-sm text-gray-400">
              首批1000名用户享永久33%折扣 + 3个月免费试用
            </div>
          </div>
        </div>

        {/* 右侧：倒计时 */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-400" />
            <span className="text-sm text-gray-400">优惠截止：</span>
          </div>
          
          <div className="flex gap-2">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="w-14 h-14 bg-slate-900 border border-orange-500/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-400">
                    {String(value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs text-gray-500 mt-1">
                  {unit === "days" ? "天" : unit === "hours" ? "时" : unit === "minutes" ? "分" : "秒"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 进度条 */}
      <div className="mt-4 relative">
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-orange-500 to-red-500"
            initial={{ width: "0%" }}
            animate={{ width: "87.3%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
        <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
          <span>已预约：873人</span>
          <span>剩余：127个名额</span>
        </div>
      </div>
    </motion.div>
  );
}
