const React = require('react');
const {Component} = React;
const Layout = require('./components/Layout.jsx');

class New extends Component {
    render(){
        return(
            <Layout title="Create Post">
                <form action='/posts' method='POST'>
                    <textarea maxLength="500" placeholder="Enter your text here..." name="post"/>
                    <br/>
                    <input type="radio" id="Lost" name="restoreOrLost" value="Lost faith in humanity"/>
                    <label for="Lost">Lost faith in humanity</label>
                    <br/>
                    <input type="radio" id="Restored" name="restoreOrLost" value="Restored faith in humanity"/>
                    <label for="Restored faith in humanity">Restored faith in humanity</label>
                    <br/>
                    <input type="checkbox" id="anonymous" name="anonymous"/>
                    <label for="anonymous">Anonymous</label>
                    <br/>
                    <input type="submit" value="Create Log"/>
                </form>
            </Layout>
        )
    }
}

module.exports = New;