import { observable } from 'mobx'

class ListItem {
    id = Math.random();
    @observable title;

    constructor(title) {
        this.title = title;
    }
}

export default ListItem
