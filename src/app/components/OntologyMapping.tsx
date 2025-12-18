import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface MappingPair {
  source: string;
  target: string;
  delay: number;
}

export function OntologyMapping() {
  const mappings: MappingPair[] = [
    { source: "客户实体", target: "用户概念", delay: 0 },
    { source: "订单关系", target: "交易行为", delay: 0.2 },
    { source: "产品属性", target: "商品特征", delay: 0.4 },
    { source: "库存数据", target: "资源状态", delay: 0.6 },
  ];

  return (
    <div className="space-y-3">
      {mappings.map((mapping, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: mapping.delay, duration: 0.5 }}
        >
          <div className="flex-1 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2">
            <span className="text-blue-300">{mapping.source}</span>
          </div>
          
          <motion.div
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: mapping.delay,
            }}
          >
            <ArrowRight className="w-5 h-5 text-violet-400" />
          </motion.div>
          
          <div className="flex-1 bg-violet-500/10 border border-violet-500/30 rounded-lg px-4 py-2">
            <span className="text-violet-300">{mapping.target}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
