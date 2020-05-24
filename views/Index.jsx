const React = require('react');
const {Component} = React;
const Layout = require('./components/Layout.jsx');

class Index extends Component {
  render() {
    const signOut = (<form action="/sessions/?_method=delete" method="POST">
        <input type="submit" value="Sign out"></input>
    </form>)
    const signIn = (<form action="/sessions/new/" method="GET">
        <input type="submit" value="Sign in"></input>
    </form>)
    const signUp = (<form action="/user/new/" method="GET">
        <input type="submit" value="Sign up"></input>
    </form>)
    return (
        <Layout title="Posts">
            {this.props.currentUser ? <a href={`/user/${this.props.currentUser._id}`}>{this.props.currentUser.username}</a> : signUp}
            {this.props.currentUser ? signOut : signIn}
        </Layout>
    );
  }
}

module.exports = Index;