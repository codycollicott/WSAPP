import React from "react";
import { Text, Grid, Col } from "native-base";

export default ({ tabInfo }) => {
  return (
    <Grid>
      <Col>
        <Text> {tabInfo.transactions} </Text>
        <Text> Transactions </Text>
      </Col>
      <Col>
        <Text> {tabInfo.total} </Text>
        <Text> Amount </Text>
      </Col>
    </Grid>
  )
}