import {useEffect, useRef, useState} from 'react';
import {getOrderBidDetails} from '../api';

export const useGetBidDetails = id => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getBidDetails();
  }, []);

  const getBidDetails = async () => {
    try {
      const Bid = await getOrderBidDetails(id);

      setData(Bid.data);
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
