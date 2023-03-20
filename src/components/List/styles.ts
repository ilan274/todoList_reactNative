import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: { flex: 5, backgroundColor: '#191919', padding: 28 },
  inputContainer: {
    flexDirection: 'row',
    top: -60,
  },
  input: {
    backgroundColor: '#262626',
    padding: 16,
    borderRadius: 10,
    flex: 3,
    color: 'white',
  },
  button: {
    backgroundColor: '#1E6F9F',
    flex: 1,
    marginLeft: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  taskCountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskCount: {
    color: '#4EA8DE',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  emptyListText: { color: 'white', marginTop: 10 },
});
