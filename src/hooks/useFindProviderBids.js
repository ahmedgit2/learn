import {useEffect, useMemo, useState} from 'react';
import {getProviderBids} from '../api';

export const useFindProviderBids = (page, lat, lng, orderType) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const getBidsPage = async () => {
    console.log(page);
    try {
      setLoading(true);
      setData(undefined);
      const user = await getProviderBids({page, lat, lng, orderType});
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
    getBidsPage,
  };
};
