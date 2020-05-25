const React = require('react');
const {Component} = React;
const Layout = require('./components/Layout.jsx');

class Index extends Component {
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
        <Layout title="Posts">
            <div className="container">
                <div className="bar">
                    <a href="/posts"><div className="logo"></div></a>
                    
                    <div className="createPost">
                        {this.props.currentUser ? createPost : '' }
                    </div>
                    <div className="userOptions">
                        {this.props.currentUser ? <a className="userOptionOne" href={`/user/${this.props.currentUser._id}`}>{this.props.currentUser.username}</a> : signUp}
                        {this.props.currentUser ? signOut : signIn}
                    </div>
                </div>
                <div className="content">
                    <div className="show">
                        <h1>Name or Anonymous</h1>
                        <h2>Restored or Lost faith in humanity...</h2>
                        <p>Example text to show you what a post will look like once you click one of the two buttons below. Example text to show you what a post will look like once you click one of the two buttons below. Example text to show you what a post will look like once you click one of the two buttons below. Example text to show you what a post will look like once you click one of the two buttons below. Example text to show you what a post will look like once you click one of the two buttons below. Example text to show you what a post will look like once you click one of the two buttons below. Example text to show you what a post will look like once you click one of the two buttons below. Example text to show you what a post will look like once you click one of the two buttons below. Example text to show you what a post will look like once you click one of the two buttons below. Example text to show you what a post will look like once you click one of the two buttons below.</p>
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

module.exports = Index;