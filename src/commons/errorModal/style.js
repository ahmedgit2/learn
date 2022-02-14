import {StyleSheet} from 'react-native';

export const ModalStyle = StyleSheet.create({
  centeredView: {
    height: 250,
    marginHorizontal: 10,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 35,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  button: {
    borderRadius: 2,
    padding: 10,
    elevation: 2,
    width: 150,
    height: 50,
  },

  modalText: {
    flexWrap: 'wrap',
    marginVertical: 20,
    paddingTop: 30,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
