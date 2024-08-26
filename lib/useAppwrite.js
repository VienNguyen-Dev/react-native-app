import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useAppwrite = (fn) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([])
  const fetchPostData = async () => {
    try {
      setIsLoading(true);
      const response = await fn();
      if (response) setData(response)
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchPostData();
  }, [])

  const refresh = () => fetchPostData();
  return { refresh, data };
}

export default useAppwrite