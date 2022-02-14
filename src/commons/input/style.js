import {StyleSheet} from 'react-native';

export const InputTextStyle = StyleSheet.create({
  inputtext: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#bbb',
  },
  container: {
    marginTop: 10,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  errorMessage: {
    flex: 1,
    paddingHorizontal: 10,
    marginLeft: 10,
    fontSize: 14,
    color: 'red',
    textAlign: 'left',
    paddingTop: 1,
    paddingBottom: 7,
  },
});
