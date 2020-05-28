const React = require('react');
const {Component} = React;
const Layout = require('./components/Layout.jsx');

class Show extends Component {
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
    return (
        <Layout title="Show">
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
                        <h1>{this.props.random.username}</h1>
                        <h2>{this.props.random.restoreOrLost === 'Restore' ? '...restored my faith in humanity' : 'Lost all faith in humanity...'}</h2>
                        <p>{this.props.random.post}</p>
                        <div className="row">
                        <form action="/posts/restore/" method="GET">
                        <input className="submit" type="submit" value="Restore Faith"></input>
                        </form>
                        <form action="/posts/lost/" method="GET">
                        <input className="submit" type="submit" value="Lose Faith"></input>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Show;