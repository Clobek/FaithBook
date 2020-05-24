const React = require('react');
const {Component} = React;

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
        <div>
            {this.props.currentUser ? `Signed in as: ${currentUser.username}` : signUp}
            {this.props.currentUser ? signOut : signIn}
        </div>
    );
  }
}

module.exports = Index;