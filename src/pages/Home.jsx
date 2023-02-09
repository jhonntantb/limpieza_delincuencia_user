import React, { useState } from 'react';
import SimpleBarCharts from '../components/charts/SimpleBarCharts';
import PieCharts from '../components/PieCharts';
import InformationTable from '../components/InformationTable';
import { data, reportDetailed, reportGeneral, data4, data5 } from '../data';

const Home = () => {
  const [showTable, setShowTable] = useState(false);
  const year = '2022';
  const handleInformation = (value) => {
    console.log('hola perras');
    setShowTable(value);
  };
  return (
    <div>
      <div className='w-full flex flex-row justify-evenly text-2xl'>
        <h2
          className='border-2 border-cyan-600 mt-5 px-10 cursor-pointer hover:bg-violet-300 active:bg-violet-300'
          onClick={() => handleInformation(false)}
        >
          Grafico de barras
        </h2>
        <h2
          className='border-2 border-cyan-600 mt-5 px-10 cursor-pointer hover:bg-violet-300 active:bg-violet-300'
          onClick={(e) => handleInformation(true)}
        >
          Tabla informativa
        </h2>
      </div>
      {!showTable ? (
        <div>
          <SimpleBarCharts data={data} />
        </div>
      ) : (
        <div>
          <InformationTable
            reportType={reportDetailed}
            data={data5}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
