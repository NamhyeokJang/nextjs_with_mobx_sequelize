import Head from 'next/head'
import { inject, observer } from 'mobx-react'


@inject('commonStore')
@observer
class test extends React.Component {

    render() {
        return (
            <>
                <Head>
                    <title>TEST</title>
                </Head>
                <div>
                    <h1>Test</h1>
                    {this.props.commonStore.list.map((data, index) => <p key={index}>{data}</p>)}
                </div>
            </>
        );
    }
}

export default test;