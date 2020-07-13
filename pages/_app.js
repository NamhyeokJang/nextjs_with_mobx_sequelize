import React from "react";
import App from "next/app";
import { Provider } from "mobx-react";
import initializeStore from '@store'

import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'

class CustomApp extends App {
    mobxStore;
    static async getInitialProps(appContext) {
        const mobxStore = initializeStore();
        appContext.ctx.mobxStore = mobxStore;
        const appProps = await App.getInitialProps(appContext);
        return {
            ...appProps,
            initialMobxState: mobxStore,
        };
    }
    constructor(props) {
        super(props);
        const isServer = typeof window === "undefined";
        this.mobxStore = isServer
            ? props.initialMobxState
            : initializeStore(props.initialMobxState);
    }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider {...this.mobxStore}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}
export default CustomApp;