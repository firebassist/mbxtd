
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { observer } from 'mobx-react/native'

import { SimpleButton, Card, CardSection, Input } from './common';


@observer
class TodosView extends Component {
  renderTodoList = () => {
    return this.props.listStoreModel.todos.map((todo)=> {
      return <TouchableOpacity
        key={todo.id}
        onPress={() => this.props.listStoreModel.deleteTodo(todo)}>
          <View>
            <Text>Todo: {todo.title}</Text>
          </View>
        </TouchableOpacity>
      }
    );
  }
  render () {
    return (
      <Card>

        <CardSection>
          <Input
            label="Title"
            placeholder="EMPTY"
            //value={model.word}
            //onChangeText={() => model.changeWord()}
          />
        </CardSection>

        <CardSection>
          <SimpleButton
            onPress={() => this.props.listStoreModel.addTodo()}>
            ADD TODO
          </SimpleButton>
        </CardSection>

        <CardSection>
          <ScrollView>
            {this.renderTodoList()}
          </ScrollView>
        </CardSection>

      </Card>
    )
  }
}


export default TodosView
