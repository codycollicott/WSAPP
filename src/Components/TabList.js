import React from 'react';
import { View } from 'react-native';
import { ListItem, Text, Left, Body, Right } from "native-base";

export default function ListView({list}) {
  console.log(list);
  return (
    <View>
      {list.map(reflection => (
        <ListItem icon>
          <Left>
            <Text>{reflection.merchant_name}</Text>
          </Left>
          <Body />
          <Right>
            <Text> ${reflection.amount} </Text>
          </Right>
        </ListItem>
      ))}
    </View>
  );
}
