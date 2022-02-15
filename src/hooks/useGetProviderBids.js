import {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {getProviderBids} from '../api';

export const useGetProviderBids = (lat, lng, orderType) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [totalBidsCount, setTotalBidsCount] = useState(false);
  const [pageCount, setPageCount] = useState();
  const [error, setError] = useState('');

  const language = useSelector(state => state.authorization.language);

  useEffect(() => {
    if (page == 1) {
      getBids();
    } else if (page > 1 && pageCount >= page) {
      getBids();
    }
  }, [page, language]);

  const refreshing = () => {
    setError('');
    setPage(1);
    setRefresh(true);
    getBids();
  };

  const fetchMore = () => {
    setError('');
    setPage(page + 1);
    setLoading(true);
  };

  const getBids = async () => {
    try {
      // set loading coming from calling func
      //cal func to get api
      const providerBids = await getProviderBids({
        page: page,
        lat: lat,
        lng: lng,
        orderType: 'GENERAL',
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
        setTotalBidsCount(providerBids.totalCount);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setRefresh(false);
    }
  };

  return {
    loading,
    data,
    error,
    refresh,
    totalBidsCount,
    refreshing,
    fetchMore,
  };
};
