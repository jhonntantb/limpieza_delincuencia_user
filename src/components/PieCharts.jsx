import { data2, data3, COLORS, COLORS1 } from '../data';
import React from 'react';
import SimplePieCharts from './charts/SimplePieCharts';

const PieCharts = () => {
  return (
    <div>
      <h1 className='text-center'>Grafico de indice indice</h1>
			<div className='flex flex-row justify-evenly'>
        <div className='h-auto flex flex-col'>
          <h2>Grafico de indice Limpieza</h2>
					<SimplePieCharts data={data2} colors={COLORS} />
        </div>
        <div className='h-auto flex flex-col'>
          <h2>Grafico de indice de Delincuencia</h2>
					<SimplePieCharts data={data3} colors={COLORS1} />
        </div>
			</div>
    </div>
  )
}

export default PieCharts