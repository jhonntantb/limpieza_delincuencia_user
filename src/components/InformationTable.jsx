import React, { useEffect, useState } from 'react';
import { reportDetailed, reportGeneral } from '../data';
import { getReportDetailed, getReportGeneral } from '../api';
const InformationTable = () => {
  const [reportType, setReportType] = useState(reportGeneral);
  const [data, setData] = useState([]);

  const handleReport = async (e) => {
    e.preventDefault();
    if (e.target.id == 'reportGeneral') {
      setReportType(reportGeneral);
      const info = await getReportGeneral('Chachapoyas', 2020);
      console.log(info);
      setData(info);
    } else if (e.target.id == 'reportDetailed') {
      setReportType(reportDetailed);
      const info = await getReportDetailed('Chachapoyas', 2020);
      setData(info);
    }
  };

  useEffect(() => {
    setData(getReportGeneral('Chachapoyas', 2020));
  }, []);

  return (
    <div className='flex flex-col justify-center p-5 shadow-2xl'>
      <div className='flex flex-row justify-evenly p-5'>
        <h2
          id='reportGeneral'
          className='border-2 border-teal-800 px-5 rounded-md hover:text-white hover:bg-teal-800'
          onClick={(e) => handleReport(e)}
        >
          Reporte General
        </h2>
        <h2
          id='reportDetailed'
          className='border-2 border-teal-800 px-5 rounded-md hover:text-white hover:bg-teal-800'
          onClick={(e) => handleReport(e)}
        >
          Reporte Detallado
        </h2>
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
          {data.length > 0 &&
            data.map((el, index) => {
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
