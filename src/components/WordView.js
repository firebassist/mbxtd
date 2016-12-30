
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { observer } from 'mobx-react/native'


@observer
class WordView extends Component {
  render () {
    return (
      <View style={styles.container}>

        <Text>Word: {this.props.model.word}</Text>

        <TextInput
          //value={model.word}
          //onChangeText={() => model.changeWord()}
        />
        <TouchableOpacity
          onPress={() => this.props.model.increase()}>
          <View>
            <Text>
              +
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.model.changeWord()}>
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

export default WordView
