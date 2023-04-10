import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area
} from 'recharts';

const Rechart = () => {
  const data = [
    { name: "assignment-1", mark: 60, pv: 50 },
    { name: "assignment-2", mark: 45 },
    { name: "assignment-3", mark: 80 },
    { name: "assignment-4", mark: 55 },
    { name: "assignment-5", mark: 70 },
    { name: "assignment-6", mark: 90 },
    { name: "assignment-7", mark: 65 },
    { name: "assignment-8", mark: 50 },
  ];

  return (
   <div className='container mx-auto'>
     <ResponsiveContainer width="100%" height={500}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
   </div>
  );
};

export default Rechart;
