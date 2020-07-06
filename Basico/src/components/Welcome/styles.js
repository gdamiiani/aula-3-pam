import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },

  header: {
    paddingTop: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 21,
    color: '#f8f8f2',
    fontWeight: 'bold',
  },

  body: {
    flex: 1,
    justifyContent: 'center',
  },

  button: {
    padding: 20,
    backgroundColor: '#bd93f9',
    borderRadius: 15,
  },
  buttonText: {
    color: '#f8f8f2',
    fontSize: 15,
    textAlign: 'center',
  },

  cleanButton: {
    padding: 20,
    backgroundColor: '#f8f8f2',
    borderRadius: 15,
  },
  cleanButtonText: {
    color: '#282a36',
    fontSize: 15,
    textAlign: 'center',
  },

  input: {
    padding: 10,
    color: '#282a36',
  },
  inputGroup: {
    backgroundColor: '#f8f8f2',
    padding: 10,
    borderRadius: 15,
  },

  buttonGroup: {
    padding: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});

export default styles;