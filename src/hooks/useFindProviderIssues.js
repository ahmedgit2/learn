import {useEffect, useState} from 'react';
import {getProviderIssue} from '../api';

export const useFindProviderIssues = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    login();
  }, []);
  const login = async () => {
    try {
      setLoading(true);
      setData(undefined);
      const user = await getProviderIssue();
      if (user.data.length) {
        setData(user.data);
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  return {
    loading,
    data,
    error,
    login,
  };
};
