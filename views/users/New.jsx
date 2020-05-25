const React = require('react');
const {Component} = React;
const Layout = require('../components/Layout.jsx');

class NewUser extends Component {
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
            <Layout title="Sign up">
            <div className="container">
                <div className="bar">
                    <a href="/posts"><div className="logo"></div></a>
                    <div className="userOptions">
                        {this.props.currentUser ? <a className="userOptionOne" href={`/user/${this.props.currentUser._id}`}>{this.props.currentUser.username}</a> : signUp}
                        {this.props.currentUser ? signOut : signIn}
                    </div>
                </div>
                <div className="content">
                    <div className="sign">
                        <h1>Sign Up</h1>
                        <form action="/user/" method="POST">
                        Username: <input type="text" name="username" />
                        <br />
                        Password: <input type="password" name="password" />
                        <br />
                        <input className="submit" type="submit" value="Create account" />
                        </form>
                        <a className="signHere" href="/sessions/new/">Already have an account? Sign in here</a>
                    </div> 
                </div>
            </div>
            </Layout>
        );
    }
}
module.exports = NewUser;