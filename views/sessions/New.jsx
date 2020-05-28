const React = require('react');
const {Component} = React;
const Layout = require('../components/Layout.jsx');

class LoginUser extends Component {
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
        return (
            <Layout title="Sign in">
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
                    <div className="sign">
                        <h1>Sign In</h1>
                        <form action="/sessions/" method="POST">
                        Username: <input type="text" name="username" />
                        <br />
                        Password: <input type="password" name="password" />
                        <br />
                        <input className="submit" type="submit" value="Sign in" />
                        </form>
                        <a className="signHere" href="/user/new/">Don't have an account? Sign up here</a>
                    </div>
                </div>
            </div>
            </Layout>
        );
    }
}

module.exports = LoginUser;