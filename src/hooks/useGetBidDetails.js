import {useEffect, useRef, useState} from 'react';
import {getOrderBidDetails} from '../api';

export const useGetBidDetails = id => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    getBidDetails(id);
  }, []);

  const getBidDetails = async id => {
    try {
      const Bid = await getOrderBidDetails(id);
      setData(Bid);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    data,
    error,
  };
};
