const React = require('react');
const {Component} = React;
const Layout = require('./components/Layout.jsx');

class Edit extends Component {
    render(){
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
        return(
            <Layout title="Create Post">
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
                            <div className="sign">
                            <form action={`/posts/edit/${this.props.post._id}?_method=put`} method='POST'>
                                <textarea maxLength="1000" value={this.props.post.post} name="post" required/>
                                <br/>
                                <div className="row">
                                    <div className="column">
                                    <input type="radio" id="Lost" name="restoreOrLost" value="Lost faith in humanity" required/>
                                    <label for="Lost">Lost faith in humanity</label>
                                    </div>
                                    <div className="column">
                                    <input type="radio" id="Restored" name="restoreOrLost" value="Restored faith in humanity" required/>
                                    <label for="Restored faith in humanity">Restored faith in humanity</label>
                                    </div>
                                </div>
                                <div className="rowTwo">
                                <div className="columnTwo">
                                <input type="checkbox" id="anonymous" name="anonymous"/>
                                <label for="anonymous">Anonymous</label>
                                </div>
                                </div>
                                <input className="submitPost" type="submit" value="Post"/>
                            </form>
                            </div>
                        </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Edit;