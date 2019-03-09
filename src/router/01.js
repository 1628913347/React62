// 路由基本配置
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"
import App from '../App';

function Home () {
    return <div>Home</div>
}
function Tech () {
    return <div>Tech</div>
}
function News () {
    return <div>News</div>
}

class BaseRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div>基本路由</div>
                    <ul>
                        <li>
                            <Link to='/home'>主页</Link>
                        </li>
                        <li>
                            <Link to='/tech'>科技</Link>
                        </li>
                        <li>
                            <Link to='/news'>新闻</Link>
                        </li>
                    </ul>
                    <Route path='/home' Component={Home}/>
                    <Route path='/tech' Component={Tech}/>
                    <Route path='/news' Component={News}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;