import Head from 'next/head'
import Link from 'next/link'
import { Input } from 'antd'
import { inject, observer } from 'mobx-react'


@inject('commonStore')
@observer
class index extends React.Component {
  state = {
    inputValue: ''
  }
  render() {
    return (
      <>
        <Head>
          <title>Home</title>
        </Head>
        <div>
          <h1>Home</h1>
          <input onChange={(e) => this.setState({ inputValue: e.target.value })} placeholder='Input' />
          <button onClick={() => this.props.commonStore.pushValue(this.state.inputValue)}>addList</button>
          {this.props.commonStore.list.map((data, index) => <p key={index}>{data}</p>)}
          <Link href='/test'><p>Go to Test page</p></Link>
        </div>
      </>
    );
  }
}

export default index;

export async function getStaticProps(context) {
  return {
    props: { test: 'test' }
  }
}