import { useEffect, useState } from "react";
function useFetechData(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchData(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(true);
      // console.log(url);
      // console.log(data);
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  return { data, loading, setData, error };
}

export default useFetechData;
