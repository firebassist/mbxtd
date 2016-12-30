import { observable, action } from 'mobx'
import { AsyncStorage } from 'react-native'

import ListItem from './ListItem'


class ListStore {
    @observable todos = []

    constructor() {
      this.loadNotes()
      console.log(this.todos)
    }

    async saveNotes (todos) {
    try {
      await AsyncStorage.setItem("@mbxtd:TODOz",
        JSON.stringify(todos));
        console.log(todos)
      } catch (error) {
        console.log("AsyncStorage error: " + error.message)
      }
    }

    async loadNotes () {
      try {
        const jasonX = JSON.parse(await AsyncStorage.getItem("@mbxtd:TODOz"))
        this.todos = jasonX
      } catch (error) {
        console.log("AsyncStorage error: " + error.message);
      }
    }

    addTodo() {
      this.todos.push(new ListItem("TODO ZZZ"))

      this.saveNotes(this.todos)
      console.log("new " + this.todos)
    }

    deleteTodo(todo: ListItem) {
      const index = this.todos.indexOf(todo)
        if(index > -1){
            this.todos.splice(index, 1)
        }

      this.saveNotes(this.todos)
      console.log("DELETED TODO " + this.todos)
    }
}

const listStoreModel = new ListStore()
export default listStoreModel
