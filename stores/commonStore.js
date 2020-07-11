import { observable, action } from "mobx";
export const initialCommon = {
    id: "",
    password: "",
    list: []
};
class CommonStore {
    @observable id = "";
    @observable password = "";
    constructor(initialData = initialCommon) {
        this.id = initialData.id;
        this.password = initialData.password;
        this.list = initialData.list;
    }
    @action
    setValue = (key, value) => {
        this[key] = value;
    };

    @action
    initializeValue = () => {
        this.id = "";
        this.password = "";
    };

    @action
    pushValue = (value) => {
        this.list.push(value)
    }

}
export default CommonStore;