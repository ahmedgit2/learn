import { axios } from '../utils';
import { mapAxiosError } from '../utils/mappedError';

export const postOffer = async props => {
  const { orderBidId, transportationPrice, providerVehicle, notes } = props;

  try {
    axios.post(`/order-bids/${orderBidId}/offers`,
      transportationPrice,
      providerVehicle,
      notes
    );

  } catch (error) {

    throw mapAxiosError(error);
  }
};
