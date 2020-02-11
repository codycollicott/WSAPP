import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Right,
  Tab,
  Tabs
} from 'native-base';
import PropTypes from 'prop-types';
import TabView from '../../Components/TabView';
import {NavigationEvents} from 'react-navigation';
import ListView from '../../Components/TabList';

export default class Home extends Component {
  componentDidMount() {
    this.getTransactions();
  }

  getTransactions() {
    console.log("get trans")
    this.props.getReflections();
  }

  render() {
    const {
      pendingReflections,
      spending,
      positiveReflectionList,
      neutralReflectionList,
      negativeReflectionList
    } = this.props.Reflections;
    return (
      <Container>
        <NavigationEvents onDidFocus={() => this.getTransactions()} />
        <Header />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text> {`${pendingReflections} new transactions`} </Text>
            </CardItem>
            <CardItem bordered>
              <Text onPress={() => this.props.navigation.navigate('Rating')}>Reflect</Text>
              <Right>
                <Text> > </Text>
              </Right>
            </CardItem>
          </Card>
          <Tabs>
            <Tab heading="Last 7 days">
              <TabView tabInfo={spending.week} />
            </Tab>
            <Tab heading="Last 15 days">
              <TabView tabInfo={spending.twoWeeks} />
            </Tab>
            <Tab heading="Last 30 days">
              <TabView tabInfo={spending.month} />
            </Tab>
          </Tabs>
          <Tabs>
            <Tab heading="Positive">
              <ListView list={positiveReflectionList} />
            </Tab>
            <Tab heading="Neutral">
              <ListView list={neutralReflectionList} />
            </Tab>
            <Tab heading="Negative">
              <ListView list={negativeReflectionList} />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired
  }).isRequired,
};
