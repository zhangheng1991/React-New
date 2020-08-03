import styles from './index.css';
import Link from 'umi/link';
import React from 'react';
import { connect } from "dva";
import { Button,Table } from "antd";

const data = [
  {
    title: "1212123",
    key: "1212124h",

  },
  {
    title: "1212123",
    key: "121212f",
  },
  {
    title: "121212",
    key: "121212g",

  },
]
@connect( ({ Index }) => ({Index }))
class Index extends React.Component {

  componentWillMount() {
    console.log(this.props)
    const {dispatch}=this.props;
    dispatch({
      type:"Index/homepage",payload:{aa:"111"}
    })
    console.log(sessionStorage.getItem("userInfo"))
  }

  render() {
    // const {id} =this.props;
    console.log(this.props)
    return (
      <div className={styles.normal}>
        <h1>小丑欢迎您！！！！！</h1>
        <div className={styles.welcome} />
        {
          data.map((item, index) => {
            return (
              <div key={item.key}>{item.title}</div>
            )
          })
        }
        {/* <Button >ssss</Button>
        <ul className={styles.list}>
          <div>
            <Link to="/user/login">login</Link>
            <Link to="/Echarts/Echarts">echarts</Link>
          </div>
          <div>
            <Link to="/Test">测试</Link>
          </div>
          <div>
            <Link to="/Tests">新的</Link>
          </div>

          {/* <Link to="/user">user</Link> */}


          {/* <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
          <li>
            <a href="https://umijs.org/guide/getting-started.html">
              Getting Started
            </a>
          </li>
        </ul> */}
      
      </div>
    );
  }
}

// export default Index;
export default Index;
