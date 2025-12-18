import { motion } from "motion/react";
import { Brain, Database, Workflow, Network } from "lucide-react";
import { useEffect, useState } from "react";

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  icon: typeof Brain;
}

export function KnowledgeGraph() {
  const [connections, setConnections] = useState<Array<[number, number]>>([]);

  const nodes: Node[] = [
    { id: "1", x: 50, y: 50, label: "企业知识", icon: Brain },
    { id: "2", x: 200, y: 30, label: "数据源", icon: Database },
    { id: "3", x: 180, y: 120, label: "业务流程", icon: Workflow },
    { id: "4", x: 320, y: 80, label: "网络连接", icon: Network },
    { id: "5", x: 120, y: 140, label: "智能分析", icon: Brain },
  ];

  const allConnections: Array<[number, number]> = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 4],
    [1, 2],
  ];

  useEffect(() => {
    // 逐步显示连接线
    allConnections.forEach((conn, index) => {
      setTimeout(() => {
        setConnections((prev) => [...prev, conn]);
      }, index * 300);
    });
  }, []);

  return (
    <div className="relative w-full h-[200px] overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn, index) => {
          const [start, end] = conn;
          return (
            <motion.line
              key={`${start}-${end}`}
              x1={nodes[start].x}
              y1={nodes[start].y}
              x2={nodes[end].x}
              y2={nodes[end].y}
              stroke="rgba(139, 92, 246, 0.3)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          );
        })}
      </svg>

      {nodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.id}
            className="absolute"
            style={{
              left: `${node.x}px`,
              top: `${node.y}px`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="flex flex-col items-center gap-1">
              <motion.div
                className="w-12 h-12 rounded-full bg-violet-500/20 border-2 border-violet-500 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(139, 92, 246, 0)",
                    "0 0 0 10px rgba(139, 92, 246, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                <Icon className="w-6 h-6 text-violet-400" />
              </motion.div>
              <span className="text-xs text-gray-400 whitespace-nowrap">
                {node.label}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
