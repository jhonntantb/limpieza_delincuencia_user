import React from 'react';
const InformationTable = ({ reportType, data }) => {
  return (
    <div className='flex flex-col justify-center p-10 shadow-2xl mt-6'>
      <div className='flex flex-row justify-evenly'>
        <h2 className='border-2 border-teal-800 px-5 rounded-md hover:text-white hover:bg-teal-800'>
          Reporte General
        </h2>
        <h2 className='border-2 border-teal-800 px-5 rounded-md hover:text-white hover:bg-teal-800'>
          Reporte Detallado
        </h2>
      </div>
      <div className='flex flex-row p-5 justify-evenly'>
        <h3>Seleccione Departamento</h3>
        <h3>Seleccione Provincia</h3>
        <h3>Seleccione Distrito</h3>
      </div>
      <table className='border-separate border border-slate-500'>
        <thead>
          <tr>
            {reportType.map((el, index) => (
              <th
                className='border border-slate-600'
                key={index}
              >
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => {
            return (
              <tr key={index}>
                <td className='border border-slate-700'>{index + 1}</td>
                {Object.values(el).map((atr) => (
                  <td
                    className='border border-slate-700'
                    key={`${Math.random() * 100}-${atr}`}
                  >
                    {atr}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InformationTable;
