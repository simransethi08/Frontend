import React from "react"
import { connect } from "react-redux"
import Footer from "./Footer";
import Header from "./Header";

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

//1 decorators are great way to wrap a component
// smart components use connect and pass everything down to dumb components using props
// dumb components have no idea about redux
// connect is going to wrap a layout which renders layout component and inject
// props to layout component
@connect((store) => {
  return {
    // //1
     user: store.user.user, // userreducer.user property
    //2
    userFetched: store.user.fetched, // userreducer.fetched property
    tweets: store.tweets.tweets, // tweetsreducer.tweets property
  };
})
export default class Layout extends React.Component {
  //3
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  //4
  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  //1
  render() {

    // // //1 and 2
    // console.log(this.props);
    // return null;

    // //3 
    //  console.log(this.props.user.name);
    //  return <h1> <strong>Name:-</strong> {this.props.user.name}  <strong>Age:-</strong> {this.props.user.age} </h1>

    //4
    const { user, tweets } = this.props;

    if (!tweets.length) {
      return <div><br/><br/><button onClick={this.fetchTweets.bind(this)}>
                Load tweets
              </button></div>
    }
    const mappedTweets = tweets.map((tweet,index) => 
            // <li key={index}>{tweet.text}</li>) // for tweets
            <li key={index}>{tweet.name}</li>) // for comments

    return (
      <div>
           <Header title={"Welcome to Redux Application!"} />
            <div> 
              <h1> <strong>Name:-</strong> {this.props.user.name}  <strong>Age:-</strong> {this.props.user.age} </h1>
              <ol>{mappedTweets}</ol>
            </div>
            <Footer/>
      </div>
       )
  }
}

// Along with Header and Footer components
/*@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  render() {
    const { user, tweets } = this.props;

    if (!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    }

   const mappedTweets = tweets.map((tweet,index) => 
            <li key={index}>{tweet.text}</li>)

    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <div>
          <h1> <strong>Name:-</strong> {this.props.user.name}  <strong>Age:-</strong> {this.props.user.age} </h1>
          <ul>{mappedTweets}</ul>
        </div>
        <Footer />
      </div>
    );
  }
}*/
