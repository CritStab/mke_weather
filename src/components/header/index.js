import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Degrees</Text>
      </View>
    );
  }
};
