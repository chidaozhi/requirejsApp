<template>
	<div class="content">
	    <p class="fhbtn"><a href="javascript:;" onclick="window.history.go(-1)"></a></p>
	    <h1></h1>
	    <div class="login-box">
	    	<p class="lsolid"></p>
	        <div class="login">
	        	<router-link to="/user-login">登录</router-link>
	        	<span></span>
	        	<router-link to="/user-reg">注册</router-link>
	        </div>
	        <p class="rsolid"></p>
	    </div>
	    <ul>
	        <li class="lifirst">
	        	<input type="text" value=""/>
	            <span>帐号</span>
	        </li>
	        <li>
	        	<input type="text" value=""/>
	            <span>密码</span>
	        </li>
	    </ul>
	    <div class="footbox">
	        <input type="button" value="注 册" class="login-btn"/>
	        <a href="javascript:;" class="tishi">忘记密码？</a>
	    </div>
	</div>
</template>
