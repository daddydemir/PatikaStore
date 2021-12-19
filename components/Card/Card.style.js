import {StyleSheet , Dimensions} from 'react-native';

export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#eceff1',
    borderRadius: 10,
    margin: 10,
  },
  image_container:{
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  image:{
    height: Dimensions.get('window').height /4,
    //width: Dimensions.get('window').width /4,
    //width: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  header:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  price:{
    color: '#9c9797',
    padding: 5,
    fontSize: 16,
  },
  stock:{
    color:'red',
    fontWeight: 'bold',
    fontSize: 17,
  }
});