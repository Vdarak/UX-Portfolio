import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { subject: 'Visual Consistency', A: 40, B: 90, fullMark: 100 },
  { subject: 'Accessibilty', A: 30, B: 85, fullMark: 100 },
  { subject: 'Agent Safety', A: 20, B: 95, fullMark: 100 },
  { subject: 'Dev Velocity', A: 50, B: 80, fullMark: 100 },
  { subject: 'Documentation', A: 20, B: 90, fullMark: 100 },
  { subject: 'Observability', A: 10, B: 75, fullMark: 100 },
];

export const MaturityChart: React.FC = () => {
  return (
    <div className="h-[300px] w-full flex flex-col items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#ffffff20" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff80', fontSize: 10, fontFamily: 'monospace' }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Before AX"
            dataKey="A"
            stroke="#ffffff40"
            fill="#ffffff40"
            fillOpacity={0.3}
          />
          <Radar
            name="After AX v1.0"
            dataKey="B"
            stroke="#FF4D00"
            fill="#FF4D00"
            fillOpacity={0.4}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: '1px solid #ffffff20', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', backgroundColor: '#000000', color: '#fff' }}
            itemStyle={{ fontSize: '12px', fontWeight: 600, fontFamily: 'monospace' }}
          />
        </RadarChart>
      </ResponsiveContainer>
      <div className="flex gap-6 mt-4">
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-white/40 rounded-full"></div>
            <span className="text-xs text-white/60 font-mono">Before AX</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <span className="text-xs text-white/60 font-mono">Post Launch</span>
        </div>
      </div>
    </div>
  );
};
