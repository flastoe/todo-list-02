import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: 'darkblue',
    width: '100%',
    height: '100%',
  },
  title: {
    color: 'rgb(255, 255, 255)',
    fontSize: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'white',
    padding: 4,
    color: 'white',
  },
  colorButton: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 50,
  },
  colorContainer: {
    height: 60,
    flexDirection: 'row',
  } 
});
 