import {useEffect, useRef, useState} from 'react';
import {postOffer} from '../api';

export const usePostOffer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const post = async ({
    orderBidId,
    transportationPrice,
    providerVehicle,
    notes,
  }) => {
    try {
      await postOffer({
        orderBidId,
        transportationPrice,
        providerVehicle,
        notes,
      });
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
