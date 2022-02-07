import {useRef, useState} from 'react';
import {useFindProviderBids} from './index';

export const useGetMoreBids = (lat, lng, orderType) => {
  const [page, setPage] = useState(1);
  const getBids = useFindProviderBids(page, lat, lng, orderType);

  if (isLastPage.current == false) {
    setPage(page + 1);
    getBids();
  }
};
