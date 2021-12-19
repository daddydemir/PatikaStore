import React from 'react';
import {View , Image , Text } from 'react-native';
import styles from './Card.style';

const Card = ({obj}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={{uri: obj.imgURL}} />
      </View>
      <Text style={styles.header}> {obj.title} </Text>
      <Text style={styles.price}> {obj.price} </Text>
      <Text style={styles.stock}> {obj.inStock === true ? '' : 'Stokta Yok'} </Text>
    </View>
  );
};

export default Card;