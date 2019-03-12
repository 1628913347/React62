// 整体布局
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Route, Link, Switch } from "react-router-dom";
import './main.css';

// 自定义链接样式
function Menu(props) {
    let {to, mname} = props;
    return (
        <Route path={to} children={({match})=>{
            // 匹配路径后,math是对象, 否则为null
            let iconClass = 'iconfont icon-happy2';
            iconClass = match? iconClass + ' active': iconClass;
            return (
                <Link to= {to}>
                    <div className="placeholder">
                        <i className={iconClass}></i>
                        <div className={match?'active':''}>{mname}</div>
                    </div>
                </Link>
            )
        }}/>
    );
}

class Main extends React.Component {
    render () {
        return (
            <div className='home-container'>  
                <div className='home-content'>
                    <Switch>
                        <Route path='/home/main' render={()=><div>home</div>}/>
                        <Route path='/home/info' render={()=><div>info</div>}/>
                        <Route path='/home/chat' render={()=><div>chat</div>}/>
                        <Route path='/home/my' render={()=><div>my</div>}/>
                    </Switch>
                </div>
                <div className='home-menu'> 
                   <Grid columns={4} divided>
                        <Grid.Row> 
                            <Grid.Column>
                                <Menu to='/home/main' mname='主页'/>
                            </Grid.Column>
                            <Grid.Column>
                                <Menu to='/home/info' mname='咨讯'/>
                            </Grid.Column>
                            <Grid.Column>
                                <Menu to='/home/chat' mname='微聊'/>
                            </Grid.Column>
                            <Grid.Column>
                                <Menu to='/home/my' mname='我的'/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        );
    }
}
export default Main;