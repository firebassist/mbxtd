
import React, { Component } from 'react';

import model from './store/Store'
import WordView from './components/WordView'

import listStoreModel from './store/ListStore'
import TodosView from './components/TodosView'

class mbxtd extends Component {
  render () {
    return (
      //<WordView model={model} />
      <TodosView listStoreModel={listStoreModel} />
    )
  }
}


export default mbxtd
