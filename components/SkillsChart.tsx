import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { SKILLS } from '../constants';
import PixelCard from './PixelCard';

const SkillsChart: React.FC = () => {
  const data = SKILLS.map(s => ({
    name: s.name,
    level: s.level,
    fill: s.category === 'Frontend' ? '#e62525' : s.category === 'Backend' ? '#00aa00' : '#5c94fc'
  }));

  return (
    <div className="w-full max-w-4xl mx-auto p-4 mb-20">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl text-white pixel-text-shadow mb-2">POWER LEVELS</h2>
        <div className="inline-block bg-black/50 p-2 rounded text-white text-xs">
          <span className="text-[#e62525]">■</span> Frontend
          <span className="ml-2 text-[#00aa00]">■</span> Backend
          <span className="ml-2 text-[#5c94fc]">■</span> Lang
        </div>
      </div>

      <PixelCard className="h-[400px] w-full bg-[#f8f8f8]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
          >
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis 
              dataKey="name" 
              type="category" 
              width={100} 
              tick={{fontFamily: "'Press Start 2P'", fontSize: 10}}
            />
            <Tooltip 
              cursor={{fill: 'transparent'}}
              contentStyle={{
                backgroundColor: '#fff',
                border: '4px solid #000',
                fontFamily: "'Press Start 2P'",
                fontSize: '10px'
              }}
            />
            <Bar dataKey="level" barSize={20}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} stroke="#000" strokeWidth={2} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </PixelCard>
    </div>
  );
};

export default SkillsChart;