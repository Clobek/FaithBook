const React = require('react');
const {Component} = React;

class NewUser extends Component {
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form action="/user/" method="POST">
                    username: <input type="text" name="username" />
                    <br />
                    password: <input type="password" name="password" />
                    <br />
                    <input type="submit" value="Create account" />
                </form>
            </div>
        );
    }
}
module.exports = NewUser;