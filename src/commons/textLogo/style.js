import {StyleSheet} from 'react-native';

import {store} from '../../store/store';

const lang = store.getState().authorization.language;

export const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: lang === 'ar' ? 'row' : 'row-reverse',
    marginHorizontal: 10,

    margin: 5,
  },
  textStyle: {
    marginHorizontal: 10,
  },
});
