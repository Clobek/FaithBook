const React = require('react');
const {Component} = React;

class LoginUser extends Component {
    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <form action="/sessions/" method="POST">
                    username: <input type="text" name="username" />
                    <br />
                    password: <input type="password" name="password" />
                    <br />
                    <input type="submit" value="Sign in" />
                </form>
                <a href="/user/new/">Don't have an account? Sign up here.</a>
            </div>
        );
    }
}

module.exports = LoginUser;