import {useEffect, useRef, useState} from 'react';
import {getProviderBids} from '../api';

export const useFindProviderBids = (page, lat, lng, orderType) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  const getBids = async () => {
    try {
      setLoading(true);
      setData(undefined);
      const providerBids = await getProviderBids({
        page: page,
        lat: lat,
        lng: lng,
        orderType: orderType,
      });

      if (providerBids.data.length > 0) {
        if (page > 1) setData([...data, ...providerBids.data]);
        else {
          setData(providerBids.data);
        }
      }
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
    getBids,
  };
};
