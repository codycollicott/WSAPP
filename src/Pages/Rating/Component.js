import React, {Component} from 'react';
import {Container, Header, Content, Text, Grid, Col, Button} from 'native-base';
import Reflection from '../../Components/Card';
import SwipeCards from 'react-native-swipe-cards';
import EmptyCards from '../../Components/EmptyCards';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      merchantId: null
    };
    this.handleReflection = this.handleReflection.bind(this);
    this.cardRemoved = this.cardRemoved.bind(this);
    this.updateMerchantId = this.updateMerchantId.bind(this);
  }

  componentDidMount() {
    this.props.getReflections().then(() => {
      const {pendingReflectionList} = this.props;
      const firstMerchantId = pendingReflectionList[0].id;
      this.setState({merchantId: firstMerchantId});
    });
  }

  handleReflection(transaction, intent) {
    this.props.updateReflection(transaction.id, {
      reflected_as: intent
    });
    if (transaction) this.updateMerchantId(transaction.id);
  }

  updateMerchantId(merchantId) {
    const {pendingReflectionList} = this.props;
    const currentMerchantFromIndex = pendingReflectionList.findIndex(
      merchant => merchant.id === merchantId
    );
    const nextMerchant = pendingReflectionList[currentMerchantFromIndex + 1];
    this.setState({
      merchantId: nextMerchant.id || null
    });
  }

  cardRemoved(ref) {
    const {pendingReflectionList} = this.props;
    const merchantFromIndex = pendingReflectionList[ref];
    this.updateMerchantId(merchantFromIndex.id);
  }

  render() {
    const {pendingReflectionList} = this.props;
    return (
      <Container>
        <Header />
        <Content padder>
          <SwipeCards
            cards={pendingReflectionList}
            renderCard={transaction => <Reflection transaction={transaction} />}
            renderNoMoreCards={() => <EmptyCards />}
            handleYup={ref => this.handleReflection(ref, 'POSITIVE')}
            handleNope={ref => this.handleReflection(ref, 'NEGATIVE')}
            cardRemoved={this.cardRemoved}
          />
          <Grid>
            <Col>
              <Button onPress={() => this.handleReflection({id: this.state.merchantId}, "POSITIVE")}>
                <Text> Approve </Text>
              </Button>
            </Col>
            <Col>
              <Button onPress={() => this.handleReflection({id: this.state.merchantId}, "NEUTRAL")}>
                <Text> Neutral </Text>
              </Button>
            </Col>
            <Col>
              <Button onPress={() => this.handleReflection({id: this.state.merchantId}, "NEGATIVE")}>
                <Text> Negative </Text>
              </Button>
            </Col>
          </Grid>
        </Content>
      </Container>
    )
  }
}
