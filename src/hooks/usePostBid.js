import {useEffect, useRef, useState} from 'react';
import {postOffer} from '../api';

export const usePostOffer = ({
  orderBidId,
  transportationPrice,
  providerVehicle,
  notes,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const post = async () => {
    try {
      setLoading(true);
      const res = await postOffer({
        orderBidId,
        transportationPrice,
        providerVehicle,
        notes,
      });
      console.log('resssssss=====>', res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    post,
    loading,
    error,
  };
};
