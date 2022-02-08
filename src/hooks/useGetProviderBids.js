import {useEffect, useRef, useState} from 'react';
import {getProviderBids} from '../api';

export const useGetProviderBids = (lat, lng, orderType) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [fetchMoreLoading, setFetchMoreLoading] = useState(false);
  const [pageCount, setPageCount] = useState();
  const [error, setError] = useState('');
  const getBids = async setLOADING => {
    try {
      // set loading coming from calling func
      setLOADING(true);
      //cal func to get api
      const providerBids = await getProviderBids({
        page: page,
        lat: lat,
        lng: lng,
        orderType: orderType,
      });
      // check data
      if (providerBids.data.length) {
        setPageCount(providerBids.pageCount);
        if (page == 1) {
          setData(providerBids.data);
        }
        if (page > 1) {
          setData([...data, ...providerBids.data]);
        }
      }
    } catch (error) {
      setError(error);
    } finally {
      setLOADING(false);
    }
  };
  useEffect(() => {
    if (page == 1) {
      getBids(setLoading);
    } else if (page > 1 && pageCount >= page) {
      getBids(setFetchMoreLoading);
    }
  }, [page]);
  const fetchMore = () => {
    setPage(page + 1);
  };
  return {
    loading,
    data,
    error,
    fetchMoreLoading,
    fetchMore,
  };
};
