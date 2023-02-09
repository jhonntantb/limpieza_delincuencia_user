import React, { useState } from 'react';
import SimpleBarCharts from '../components/charts/SimpleBarCharts';
import InformationTable from '../components/InformationTable';
import { reportDetailed, reportGeneral, data4, data5 } from '../data';
import { getProvinceStatistics } from '../api';

const Home = () => {
  const [showTable, setShowTable] = useState(false);
  const [year, setYear] = useState(2020);
  const [data, setData] = useState([]);
  const [province, setProvince] = useState('Chachapoyas');

  const handleInformation = (value) => {
    setShowTable(value);
  };

  const handleData = async () => {
    const statistics = await getProvinceStatistics(province, year);
    setData(statistics);
  };

  return (
    <div>
      <div className='flex flex-row p-5 justify-evenly'>
        <h3>Seleccione Departamento</h3>
        <h3>Seleccione Provincia</h3>
        <h3>Seleccione Distrito</h3>
        <button
          className='bg-sky-700 px-5 rounded-lg font-semibold'
          onClick={() => handleData()}
        >
          Buscar
        </button>
      </div>
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
          <SimpleBarCharts
            data={data}
            year={year}
          />
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
