import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function HeroAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);

  const orbits = [
    { radius: 120, nodes: 8, color: "violet" },
    { radius: 180, nodes: 12, color: "purple" },
    { radius: 240, nodes: 16, color: "blue" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 36);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-30">
      {/* 中心核心 */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-purple-600"
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            "0 0 20px rgba(139, 92, 246, 0.5)",
            "0 0 60px rgba(139, 92, 246, 0.8)",
            "0 0 20px rgba(139, 92, 246, 0.5)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* 轨道和节点 */}
      {orbits.map((orbit, orbitIndex) => (
        <div key={orbitIndex}>
          {/* 轨道圆环 */}
          <motion.div
            className="absolute rounded-full border border-violet-500/20"
            style={{
              width: orbit.radius * 2,
              height: orbit.radius * 2,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              rotate: orbitIndex % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 20 + orbitIndex * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Array.from({ length: orbit.nodes }).map((_, nodeIndex) => {
              const angle = (360 / orbit.nodes) * nodeIndex;
              const isActive = (activeIndex + orbitIndex * 5) % orbit.nodes === nodeIndex;
              
              return (
                <motion.div
                  key={nodeIndex}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `rotate(${angle}deg) translateY(-${orbit.radius}px) translate(-50%, -50%)`,
                    backgroundColor: isActive ? "#a78bfa" : "#8b5cf6",
                  }}
                  animate={{
                    scale: isActive ? [1, 1.5, 1] : 1,
                    opacity: isActive ? [0.5, 1, 0.5] : 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />
              );
            })}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
