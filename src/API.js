export const fetchData = async () => {
  let { URL } = process.env;
  let data = [];

  // Fetch data from external API
  const res = await fetch("../data/data.json");
  data = await res.json();
  return data;
};
