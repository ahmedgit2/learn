import {View, Text, FlatList} from 'react-native';
import React, {useMemo} from 'react';
import {AppText} from '../../commons';
import {styles as style} from './style';
import {useSelector} from 'react-redux';

export const ProviderBidsHeader = props => {
  const {count} = props;

  const language = useSelector(state => state.auth.language);
  const styles = useMemo(() => style(language), [language]);
  bidsCountText = language === 'ar' ? `( ${count} ) طلب` : `( ${count} ) Bids `;
  headText = language === 'en' ? 'Last Bids' : 'أحدث الطلبات';
  return (
    <View style={styles.headerStyle}>
      <AppText text={bidsCountText} textSize={15} fontWeight={'bold'} />
      <AppText text={headText} textSize={30} fontWeight={'bold'} />
    </View>
  );
};
