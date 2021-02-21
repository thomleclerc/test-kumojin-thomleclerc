import { useEffect, useState } from "react";

const useFetch = (httpRequest, url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await httpRequest(url);
        setResponse(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [httpRequest, url]);

  return [response, error, isLoading];
};

export default useFetch;
