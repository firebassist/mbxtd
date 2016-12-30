
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { observer } from 'mobx-react/native'

import model from './store/Store'


@observer
class mbxtd extends Component {
  render () {
    return (
      <View style={styles.container}>

        <Text>Word: {model.word}</Text>

        <TextInput
          //value={model.word}
          //onChangeText={() => model.changeWord()}
        />
        <TouchableOpacity
          onPress={() => model.increase()}>
          <View>
            <Text>
              +
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => model.changeWord()}>
          <View>
            <Text>
              PRESS TO CHANGE WORD
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default mbxtd
