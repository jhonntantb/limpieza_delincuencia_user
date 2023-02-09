const url = 'http://localhost:8080/api';

export const getProvinceStatistics = async (province, year) => {
  const result = await fetch(
    `${url}/statistics?province=${province}&year=${year}`
  );
  const res = await result.json();
  return res;
};
export const getReportGeneral = async (province, year) => {
  const result = await fetch(
    `${url}/statistics/general?province=${province}&year=${year}`
  );
  const res = await result.json();
  return res;
};

export const getReportDetailed = async (district, year) => {
  const result = await fetch(
    `${url}/statistics/detail?district=${district}&year=${year}`
  );
  const res = await result.json();
  return res;
};
