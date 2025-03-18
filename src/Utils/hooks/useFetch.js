import { useEffect, useState } from "react";
function useFetechData(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  async function fetchData(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(url);
      // console.log(data);
      setData(data);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  return { data, setData, error };
}

export default useFetechData;
