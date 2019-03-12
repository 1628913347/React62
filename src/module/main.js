// 整体布局
import React from 'react';
import { Grid } from 'semantic-ui-react';
import './main.css';

class Main extends React.Component {
    render () {
        return (
            <div className='home-container'> 
                <div className='home-content'>
                
                </div>
                <div className='home-menu'> 
                   <Grid columns={4} divided>
                        <Grid.Row>
                            <Grid.Column>
                                <div className="placeholder">
                                    <i className='iconfont icon-happy2'></i>
                                    <div>菜单</div>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="placeholder">
                                    <i className='iconfont icon-wink2'></i>
                                    <div>菜单</div>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="placeholder">
                                    <i className='iconfont icon-grin'></i>
                                    <div>菜单</div>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="placeholder">
                                    <i className='iconfont icon-angry2'></i>
                                    <div>菜单</div>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        );
    }
}
export default Main;