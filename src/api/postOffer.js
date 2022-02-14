import {axios} from '../utils';
import {mapAxiosError} from '../utils/mappedError';

export const postOffer = async props => {
  const {orderBidId, transportationPrice, providerVehicle, notes} = props;

  try {
    const vehicles = await axios.post(
      `/order-bids/${orderBidId}/offers`,
      transportationPrice,
      providerVehicle,
      notes,
    );

    return vehicles.data;
  } catch (error) {
    throw mapAxiosError(error);
  }
};
