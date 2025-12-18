import { motion } from "motion/react";
import { Brain, Database, Network, Sparkles, Zap, Globe } from "lucide-react";
import { useState, useEffect } from "react";

interface GraphNode {
  id: string;
  x: number;
  y: number;
  label: string;
  icon: typeof Brain;
  category: string;
  color: string;
}

export function AdvancedKnowledgeGraph() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [pulseNodes, setPulseNodes] = useState<string[]>([]);

  const nodes: GraphNode[] = [
    { id: "1", x: 280, y: 100, label: "企业大脑", icon: Brain, category: "核心", color: "violet" },
    { id: "2", x: 150, y: 60, label: "知识库", icon: Database, category: "数据", color: "blue" },
    { id: "3", x: 150, y: 140, label: "AI引擎", icon: Zap, category: "AI", color: "yellow" },
    { id: "4", x: 410, y: 60, label: "神经网络", icon: Network, category: "AI", color: "pink" },
    { id: "5", x: 410, y: 140, label: "全局互联", icon: Globe, category: "系统", color: "green" },
    { id: "6", x: 280, y: 30, label: "智能决策", icon: Sparkles, category: "应用", color: "purple" },
  ];

  const connections = [
    { from: "1", to: "2" },
    { from: "1", to: "3" },
    { from: "1", to: "4" },
    { from: "1", to: "5" },
    { from: "1", to: "6" },
    { from: "2", to: "3" },
    { from: "4", to: "5" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNodes = nodes
        .map((n) => n.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);
      setPulseNodes(randomNodes);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getNodeColor = (color: string, alpha: number = 1) => {
    const colors: Record<string, string> = {
      violet: `rgba(139, 92, 246, ${alpha})`,
      blue: `rgba(59, 130, 246, ${alpha})`,
      yellow: `rgba(234, 179, 8, ${alpha})`,
      pink: `rgba(236, 72, 153, ${alpha})`,
      green: `rgba(34, 197, 94, ${alpha})`,
      purple: `rgba(168, 85, 247, ${alpha})`,
    };
    return colors[color] || colors.violet;
  };

  return (
    <div className="relative w-full h-[180px]">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.6)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
          </linearGradient>
        </defs>

        {connections.map((conn, index) => {
          const fromNode = nodes.find((n) => n.id === conn.from)!;
          const toNode = nodes.find((n) => n.id === conn.to)!;
          const isHighlighted = hoveredNode === conn.from || hoveredNode === conn.to;

          return (
            <g key={`${conn.from}-${conn.to}`}>
              <motion.line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={isHighlighted ? "url(#lineGradient)" : "rgba(139, 92, 246, 0.2)"}
                strokeWidth={isHighlighted ? "3" : "2"}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
              
              {/* 数据流动效果 */}
              <motion.circle
                r="3"
                fill="rgba(168, 85, 247, 0.8)"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  offsetDistance: ["0%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "linear",
                }}
              >
                <animateMotion dur="2s" repeatCount="indefinite">
                  <mpath href={`#path-${index}`} />
                </animateMotion>
              </motion.circle>
              
              <path
                id={`path-${index}`}
                d={`M ${fromNode.x} ${fromNode.y} L ${toNode.x} ${toNode.y}`}
                fill="none"
              />
            </g>
          );
        })}
      </svg>

      {nodes.map((node, index) => {
        const Icon = node.icon;
        const isPulsing = pulseNodes.includes(node.id);
        const isHovered = hoveredNode === node.id;

        return (
          <motion.div
            key={node.id}
            className="absolute cursor-pointer"
            style={{
              left: `${node.x}px`,
              top: `${node.y}px`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <motion.div
              className="relative"
              animate={{
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* 脉冲效果 */}
              {isPulsing && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: getNodeColor(node.color, 0.5) }}
                  animate={{
                    scale: [1, 2, 2],
                    opacity: [0.8, 0, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              )}
              
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur border-2 relative z-10"
                style={{
                  backgroundColor: getNodeColor(node.color, 0.2),
                  borderColor: getNodeColor(node.color, 0.8),
                  boxShadow: `0 0 20px ${getNodeColor(node.color, 0.3)}`,
                }}
              >
                <Icon className="w-6 h-6" style={{ color: getNodeColor(node.color) }} />
              </div>
            </motion.div>
            
            <div className="absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-xs text-gray-400">{node.label}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
