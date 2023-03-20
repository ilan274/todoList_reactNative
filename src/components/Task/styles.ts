import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
    backgroundColor: '#262626',
    height: 70,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#FFF',
    fontSize: 18,
    flexWrap: 'wrap',
    width: '65%',
  },
  textLineThrough: {
    color: '#FFF',
    fontSize: 18,
    flexWrap: 'wrap',
    width: '65%',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
  },
  checkButton: {
    marginLeft: 20,
  },
  trash: {
    marginRight: 20,
  },
});
