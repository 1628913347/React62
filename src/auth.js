import React from 'react';
import { Route, Redirect } from "react-router-dom";

// 权限验证
function AuthCheck(props) {
    let {path, component:Component} = props; 
    // 判断用户是否登录: true表示登录
    let isLogin = sessionStorage.getItem('mytoken')?true:false; 
    return ( < Route path =  {path}render =  {() =>  {
        // 这个位置权限验证
        let com = isLogin? < Component/> : < Redirect to = '/'/> 
      return com; 
      }}/>  
    ); 
  }

  export default AuthCheck;