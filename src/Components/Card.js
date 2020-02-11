import React, {Component} from 'react';
import {Card, CardItem, Text} from 'native-base';
import {StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    marginBottom: 50
  },
  noMoreCardsText: {
    fontSize: 22,
  }
})

export default class Reflection extends Component {
  render() {
    const {transaction} = this.props;
    return (
      <Card style={styles.card}>
        <CardItem header bordered>
          <Text> {transaction.merchant_name} </Text>
        </CardItem>
        <CardItem>
          <Image
            style={{width: 270, height: 150}}
            source={{uri: 'https://themadrex.com/wp-content/uploads/2017/12/home-new01-1080x597.jpg'}}
          />
        </CardItem>
        <CardItem bordered>
          <Text> {`Total $${transaction.amount}`} </Text>
        </CardItem>
      </Card>
    )
  }
}
