"use client";
import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export function Spendingdonut() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const data = [
    { name: 'Subscriptions', value: 150, color: '#6366f1' },
    { name: 'Utilities', value: 250, color: '#8b5cf6' },
    { name: 'Bills', value: 300, color: '#06b6d4' },
    { name: 'Shopping', value: 1299, color: '#10b981' },
    { name: 'Food', value: 8.50, color: '#f59e0b' },
  ];
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg p-3 shadow-xl">
          <p className="text-white font-medium">{data.name}</p>
          <p className="text-cyan-400 font-bold">₹{data.value.toLocaleString()}</p>
          <p className="text-gray-400 text-sm">
            {((data.value / total) * 100).toFixed(1)}% of total
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative h-80 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <Tooltip content={<CustomTooltip />} />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
            animationBegin={0}
            animationDuration={1000}
            onMouseEnter={(_, index) => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke={hoveredIndex === index ? '#ffffff' : 'transparent'}
                strokeWidth={hoveredIndex === index ? 2 : 0}
                className="transition-all duration-300 cursor-pointer"
                style={{
                  filter: hoveredIndex === index 
                    ? `drop-shadow(0 0 12px ${entry.color}80) brightness(1.2)` 
                    : `drop-shadow(0 0 6px ${entry.color}40)`,
                }}
              />
            ))}
          </Pie>
          <Pie
            data={[{ value: 1 }]}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={65}
            fill="rgba(107, 114, 128, 0.2)"
            dataKey="value"
            startAngle={0}
            endAngle={360}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">
            ₹{total.toLocaleString()}
          </div>
          <div className="text-xs text-gray-400">Total</div>
        </div>
      </div>
    </div>
  );
}