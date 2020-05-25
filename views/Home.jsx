const React = require('react');
const {Component} = React;
const Layout = require('./components/Layout.jsx');

class Home extends Component {
  render() {
    return (
        <Layout title="Home">
            <div className="container">
                <div className="welcome">
                    <h1>Home</h1>
                    <p>Welcome to my first project making my own C.R.U.D. application. The idea behind this application is based on the common phrases "Lost faith in humanity because..." and "... restored my faith in humanity". Using this application you will be able to read posts, however if you would like to create your own posts you will need to sign up. Once you sign up you are free to post anything that may have either made you lose faith in humanity or restored it. If you would like to proceed click "Enter" below.</p>
                    <form action="/posts" method="GET">
                        <input className="entry" type="submit" value="Enter"/>
                    </form>
                    <div className="signature">Created by: Bryce Belock</div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Home;