const React = require('react');
const {Component} = React;
const Layout = require('./components/Layout.jsx');

class Counter extends Component {
  render() {
    const signOut = (<form action="/sessions/?_method=delete" method="POST">
    <input className="userOptionTwo" type="submit" value="Sign out"></input>
    </form>)
    const signIn = (<form action="/sessions/new/" method="GET">
    <input className="userOptionTwo" type="submit" value="Sign in"></input>
    </form>)
    const signUp = (<form action="/user/new/" method="GET">
    <input className="userOptionOne" type="submit" value="Sign up"></input>
    </form>)
    const createPost = (<form action="/posts/new/" method="GET">
    <input className="userOptionOne" type="submit" value="Create Post"></input>
    </form>)
    let current;
    if(this.props.lost > this.props.restore){
        current = 'Looks like we could use some more positivity around here!'
    } else if(this.props.restore > this.props.lost){
        current = 'It\'s a little too cheery around here...'
    } else {
        current = 'Balanced, as all things should be.'
    }
    return (
        <Layout title="Counter">
            <div className="container">
                <div className="bar">
                    <a href="/posts"><div className="logo"></div></a>
                    <div className="createPost barRow">
                        <form action="/posts/counter/" method="GET">
                        <input className="userOptionOne" type="submit" value="Counter"></input>
                        </form>
                        {this.props.currentUser ? createPost : '' }
                    </div>
                    <div className="userOptions">
                        {this.props.currentUser ? <a className="userOptionOne" href={`/user/${this.props.currentUser._id}`}>{this.props.currentUser.username}</a> : signUp}
                        {this.props.currentUser ? signOut : signIn}
                    </div>
                </div>
                <div className="content">
                    <div className="show">
                        <div className="counter column">
                            <h1>Post Counter:</h1>
                            <h2>{`Total posts: ${this.props.total}`}</h2>
                            <h3>{`Restore: ${this.props.restore}`}</h3>
                            <h3>{`Lost: ${this.props.lost}`}</h3>
                            <h4>
                            {current}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Counter;