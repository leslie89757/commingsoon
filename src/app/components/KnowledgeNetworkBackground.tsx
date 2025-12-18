import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  cluster: number;
}

interface Connection {
  from: number;
  to: number;
}

export function KnowledgeNetworkBackground() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  // 颜色方案 - 匹配图片中的多彩效果
  const colors = [
    "#f59e0b", // 橙色
    "#eab308", // 黄色
    "#84cc16", // 青绿色
    "#22c55e", // 绿色
    "#10b981", // 翠绿色
    "#14b8a6", // 青色
    "#06b6d4", // 天蓝色
    "#0ea5e9", // 蓝色
    "#3b82f6", // 深蓝色
    "#6366f1", // 靛蓝色
    "#8b5cf6", // 紫色
    "#a855f7", // 深紫色
    "#d946ef", // 品红色
    "#ec4899", // 粉色
    "#f43f5e", // 红色
    "#9ca3af", // 灰色
  ];

  useEffect(() => {
    const nodeCount = 150; // 增加节点数量
    const clusterCount = 5; // 聚类数量
    const newNodes: Node[] = [];

    // 创建聚类中心
    const clusterCenters = Array.from({ length: clusterCount }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));

    // 生成节点
    for (let i = 0; i < nodeCount; i++) {
      const cluster = Math.floor(Math.random() * clusterCount);
      const center = clusterCenters[cluster];
      
      // 在聚类中心周围生成节点，有些节点离中心更近
      const distance = Math.random() * 30 + Math.random() * 20;
      const angle = Math.random() * Math.PI * 2;
      
      newNodes.push({
        id: i,
        x: center.x + Math.cos(angle) * distance,
        y: center.y + Math.sin(angle) * distance,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        size: Math.random() * 4 + 2, // 2-6px
        color: colors[Math.floor(Math.random() * colors.length)],
        cluster,
      });
    }

    setNodes(newNodes);

    // 生成连接 - 优先连接同聚类的节点
    const newConnections: Connection[] = [];
    newNodes.forEach((node, i) => {
      // 找到最近的几个节点
      const distances = newNodes
        .map((otherNode, j) => ({
          index: j,
          distance: Math.hypot(node.x - otherNode.x, node.y - otherNode.y),
          sameCluster: node.cluster === otherNode.cluster,
        }))
        .filter((d) => d.index !== i)
        .sort((a, b) => {
          // 优先连接同聚类的节点
          if (a.sameCluster && !b.sameCluster) return -1;
          if (!a.sameCluster && b.sameCluster) return 1;
          return a.distance - b.distance;
        });

      // 连接到最近的3-6个节点
      const connectCount = Math.floor(Math.random() * 3) + 3;
      distances.slice(0, connectCount).forEach((d) => {
        if (d.distance < 25 || (d.sameCluster && d.distance < 35)) {
          newConnections.push({ from: i, to: d.index });
        }
      });
    });

    setConnections(newConnections);
  }, []);

  // 节点动画
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes((prevNodes) =>
        prevNodes.map((node) => {
          let newX = node.x + node.vx;
          let newY = node.y + node.vy;
          let newVx = node.vx;
          let newVy = node.vy;

          // 边界反弹
          if (newX < 0 || newX > 100) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY < 0 || newY > 100) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(100, newY));
          }

          return {
            ...node,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <svg className="w-full h-full">
        {/* 定义发光效果 */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 绘制连接线 */}
        {connections.map((conn, index) => {
          const fromNode = nodes[conn.from];
          const toNode = nodes[conn.to];
          
          if (!fromNode || !toNode) return null;

          return (
            <motion.line
              key={`conn-${index}`}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke="rgba(139, 92, 246, 0.3)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: index * 0.001 }}
            />
          );
        })}

        {/* 绘制节点 */}
        {nodes.map((node, index) => (
          <motion.g key={`node-${node.id}`}>
            {/* 节点光晕 */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size * 1.5}
              fill={node.color}
              opacity="0.2"
              filter="url(#glow)"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.01,
              }}
            />
            
            {/* 节点本体 */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill={node.color}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.005 }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}