export const getProvincdInformation = async (province, year) => {
  const result = await fetch(`?province=${province}&year=${year}`);
  const res = await result.json();
  return res;
};
