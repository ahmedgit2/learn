import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {AppLoading, ERRORModal} from '../commons';
import {ProviderBidsHeader} from '../components/providerBids/provider-Bids-Main-Header.component';
import {ProviderListBids} from '../components/providerBids/provider-list-Bids.component';
import {useGetProviderBids} from '../hooks';

export const ProviderBidsHOC = () => {
  const {loading, data, error, totalBidsCount, refresh, refreshing, fetchMore} =
    useGetProviderBids();
  const [isModalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const language = useSelector(state => state.authorization.language);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);
  const _onClose = () => {
    setModalVisible(false);
  };

  if (data && !refresh) {
    return (
      <>
        <ProviderBidsHeader count={totalBidsCount} />
        <ProviderListBids
          loading={loading}
          data={data}
          refresh={refresh}
          refreshing={refreshing}
          fetchMore={fetchMore}
        />
        <ERRORModal
          onPress={_onClose}
          Visible={isModalVisible}
          error={errorMessage}
          onClose={_onClose}
        />
      </>
    );
  } else {
    return <AppLoading />;
  }
};
