import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerStyle: {
    marginHorizontal: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardGridStyle: {
    marginHorizontal: 20,
    marginVertical: 10,
  },

  backButtonStyle: {
    position: 'absolute',
    right: 0,
  },
  cardTextContainerStyle: {
    flexGrow: 1,
  },
  bidLocationContainerStyle: {
    flexGrow: 1,
    marginBottom: 15,
    marginRight: 20,
    alignSelf: 'stretch',
    alignItems: 'flex-end',
  },
  bidDateContainerStyle: {
    flexDirection: 'row',
    flexGrow: 1,
    alignSelf: 'flex-start',
    marginTop: 5,
    marginBottom: 10,
  },
  cardContainerStyle: {
    margin: 15,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  clientNameContainerStyle: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
});
