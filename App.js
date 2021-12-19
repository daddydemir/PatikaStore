//This is an example of online Emulator by https://aboutreact.com
import React from 'react';
import { Text, View, StyleSheet , FlatList , TextInput} from 'react-native';
import Card from './components/Card';
import content_data from './data_d.json'
const App = () => {
  const renderData = ({item}) => <Card obj={item}/>;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <TextInput placeholder={'Ara . . .'} style={styles.input} />
     <FlatList
     numColumns={2}
     data={content_data}
     renderItem={renderData}
     />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: 'white',
  },
  header:{
    paddingTop:8,
    color: '#800080',
    fontSize: 35,
    fontWeight: 'bold',
  },
  input:{
    backgroundColor:'#eceff1',
    borderRadius: 10,
    borderWidth: 1,
    padding:10,
    borderColor: '#eceff1',
    marginBottom:5,
    placeholderTextColor: 'BBBBBB',
  }
});
