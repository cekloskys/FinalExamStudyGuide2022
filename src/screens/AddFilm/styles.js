import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: 'black',
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  bottomContainer: {
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 30,
  },
  topContainer: {
    top: 10,
    padding: 15,
    width: '100%',
  },
  title: {
    fontSize: 16,
    marginBottom: 15,
    borderBottomWidth: 1.0,
    color: 'black',
    borderColor: 'lightgrey',
  },
  duration: {
    fontSize: 16,
    marginBottom: 15,
    borderBottomWidth: 1.0,
    color: 'black',
    borderColor: 'lightgrey',
  },
  releasedate: {
    fontSize: 16,
    marginBottom: 15,
    borderBottomWidth: 1.0,
    color: 'black',
    borderColor: 'lightgrey',
  },
  dropdownBtnStyle: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  dropdownBtnTxtStyle: {
    color: '#444', 
    textAlign: 'left',
  },
  dropdownDropdownStyle: {
    backgroundColor: '#EFEFEF',
  },
  dropdownRowStyle: {
    backgroundColor: '#EFEFEF', 
    orderBottomColor: '#C5C5C5',
  },
  dropdownRowTxtStyle: {
    color: '#444', 
    textAlign: 'left',
  },
});

export default styles;
