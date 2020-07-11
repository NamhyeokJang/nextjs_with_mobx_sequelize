import CommonStore, { initialCommon } from "./commonStore";
import { useStaticRendering } from "mobx-react";

const isServer = typeof window === "undefined";
useStaticRendering(isServer);

let store = null;

const initialRoot = {
    commonStore: initialCommon,
};

export class RootStore {
    commonStore;

    constructor(initialData) {
        this.commonStore = new CommonStore(initialData.commonStore);
    }
}

export default function initializeStore(initialData = initialRoot) {
    if (isServer) {
        return new RootStore(initialData);
    }
    if (store === null) {
        store = new RootStore(initialData);
    }
    return store;
}