import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsAPI(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  // fix lỗi trống dependencies
  const handleFetchData = useRef({});
  const [url, setUrl] = useState(initialUrl);
  // fix lỗi unmounted component
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      // fix lỗi unmounted
      if (isMounted.current) {
        setData(response.data || []);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error is ${error}`);
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return {
    setUrl,
    loading,
    errorMessage,
    data,
  };
}
