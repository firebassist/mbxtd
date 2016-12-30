import { observable, action } from 'mobx'
import { AsyncStorage } from 'react-native';

class Counter {
    @observable word = "SAMPLE WRD"

    constructor() {
        this.loadNotes()
    }

    async saveNotes (word) {
    try {
      await AsyncStorage.setItem("@mbxtd:word",
        JSON.stringify(word));
        console.log(word)
      } catch (error) {
        console.log("AsyncStorage error: " + error.message)
      }
    }

    async loadNotes () {
      try {
        const jasonX = JSON.parse(await AsyncStorage.getItem("@mbxtd:word"))
        this.word = jasonX
      } catch (error) {
        console.log("AsyncStorage error: " + error.message);
      }
    }

    increase() {
      this.word = "BUY MILK"

      this.saveNotes(this.word)
      console.log("new " + this.word)
    }

    changeWord() {
      this.word = "PLANT TREE"

      this.saveNotes(this.word)
      console.log("new " + this.word)
    }
}

const model = new Counter()
export default model
