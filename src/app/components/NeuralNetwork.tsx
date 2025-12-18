import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function NeuralNetwork() {
  const [activeConnections, setActiveConnections] = useState<number[]>([]);

  // 定义神经网络层
  const layers = [
    { nodes: 4, x: 50 },
    { nodes: 6, x: 200 },
    { nodes: 6, x: 350 },
    { nodes: 3, x: 500 },
  ];

  useEffect(() => {
    // 随机激活连接线
    const interval = setInterval(() => {
      const randomConnections = Array.from(
        { length: 5 },
        () => Math.floor(Math.random() * 50)
      );
      setActiveConnections(randomConnections);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // 生成节点位置
  const getNodePositions = () => {
    const positions: Array<{ x: number; y: number; layer: number; index: number }> = [];
    layers.forEach((layer, layerIndex) => {
      const spacing = 180 / (layer.nodes + 1);
      for (let i = 0; i < layer.nodes; i++) {
        positions.push({
          x: layer.x,
          y: spacing * (i + 1),
          layer: layerIndex,
          index: i,
        });
      }
    });
    return positions;
  };

  const nodes = getNodePositions();

  // 生成连接线
  const generateConnections = () => {
    const connections: Array<{ from: number; to: number; id: number }> = [];
    let id = 0;
    
    layers.forEach((layer, layerIndex) => {
      if (layerIndex < layers.length - 1) {
        const currentLayerNodes = nodes.filter((n) => n.layer === layerIndex);
        const nextLayerNodes = nodes.filter((n) => n.layer === layerIndex + 1);
        
        currentLayerNodes.forEach((from, fromIdx) => {
          nextLayerNodes.forEach((to, toIdx) => {
            connections.push({
              from: nodes.indexOf(from),
              to: nodes.indexOf(to),
              id: id++,
            });
          });
        });
      }
    });
    
    return connections;
  };

  const connections = generateConnections();

  return (
    <div className="relative w-full h-[200px] overflow-visible">
      <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
        {connections.map((conn) => {
          const isActive = activeConnections.includes(conn.id);
          return (
            <motion.line
              key={conn.id}
              x1={nodes[conn.from].x}
              y1={nodes[conn.from].y}
              x2={nodes[conn.to].x}
              y2={nodes[conn.to].y}
              stroke={isActive ? "rgba(168, 85, 247, 0.6)" : "rgba(139, 92, 246, 0.15)"}
              strokeWidth={isActive ? "2" : "1"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${node.x}px`,
            top: `${node.y}px`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.02, duration: 0.4 }}
        >
          <motion.div
            className="w-3 h-3 rounded-full bg-violet-400 border border-violet-300"
            animate={{
              scale: activeConnections.some((id) => 
                connections[id]?.from === index || connections[id]?.to === index
              ) ? [1, 1.5, 1] : 1,
              boxShadow: activeConnections.some((id) => 
                connections[id]?.from === index || connections[id]?.to === index
              ) ? [
                "0 0 0 0 rgba(168, 85, 247, 0.7)",
                "0 0 0 8px rgba(168, 85, 247, 0)",
                "0 0 0 0 rgba(168, 85, 247, 0)",
              ] : "0 0 0 0 rgba(168, 85, 247, 0)",
            }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      ))}

      {/* 层标签 */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around text-xs text-gray-500">
        <span>输入层</span>
        <span>隐藏层</span>
        <span>隐藏层</span>
        <span>输出层</span>
      </div>
    </div>
  );
}
