import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const SimpleBarCharts = ({ data, year }) => {
  return (
    <div className='shadow-2xl p-10 mt-5'>
      <h1 className='text-center text-xl leading-9 font-bold'>
        Grafico de barras entre Limpieza y Delincuencia del {year}
      </h1>
      <ResponsiveContainer
        width='100%'
        aspect={2}
      >
        <BarChart
          data={data}
          width={400}
          height={200}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='4 1 2' />
          <XAxis dataKey='province' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey='averageCleaning'
            fill='#6b48ff'
            name='Limpieza'
          />
          <Bar
            dataKey='rateCrime'
            fill='#1ee3cf'
            name='Delincuencia'
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarCharts;
