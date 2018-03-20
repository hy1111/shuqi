<template>
	<div>
        <div class="m_header" >
        	<img src="../assets/wd.png" class="m_a1"/>
        	<img src="../assets/fd.png"  class="m_a2"/>
        	<router-link to='/sou'><p>书名/作者/关键字</p></router-link>
        </div>
        <div class="m_tu">
        	<img src="../assets/01.jpg"/>
        	<img src="../assets/02.jpg"/>
        </div>
        <div class="m_center">
        	<p>免费精品</p>
        	<div class="m_one">
        		<div v-for="(x,index) in arr1"><router-link to='/xiang'><img :src="x.cover"/></router-link><p class="m_a3">{{x.title}}</p><p class="m_a4">{{x.author}}</p></div>
        	</div>
        	<span @click="hu">换一批 <img src="../assets/huan.png" /></span>
        	<p>限时免费</p>
        	<div class="m_one">
        		<div v-for="(x,index) in arr2"><router-link to='/xiang'><img :src="x.cover"/></router-link><p class="m_a3">{{x.title}}</p><p class="m_a4">{{x.author}}</p></div>
        	</div>
        	<span @click="hu">换一批 <img src="../assets/huan.png" /></span>
        </div>
		<tabbar>
			<tabbar-item>
				<img slot="icon" src="../assets/sj.png">
				<span slot="label"><router-link to='/'>书架</router-link></span>>
			</tabbar-item>
			<tabbar-item show-dot>
				<img slot="icon" src="../assets/sc.png">
				<span slot="label"><router-link to='/shu'>书城</router-link></span>
			</tabbar-item>
			<tabbar-item selected>
				<img slot="icon" src="../assets/mf.png">
				<span slot="label"><router-link to='/mian'>免费</router-link></span>
			</tabbar-item>
			<tabbar-item badge="2">
				<img slot="icon" src="../assets/cz.png">
				<span slot="label"><router-link to='/yuan'>原创</router-link></span>
			</tabbar-item>
		</tabbar>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vux'
	export default {
		components: {
			Tabbar,
			TabbarItem
		},
		data(){
			return{
				arr1:[],
				arr2:[],
				a:'gaoxiao',
				flag:true
			}
		},
		methods:{
			hu(){
				this.flag=false
				this.a='wu'
				console.log(this.a)
				this.$http.jsonp('http://read.xiaoshuo1-sm.com/novel/i.php?do=is_serchpay&page=1&size=8&q='+this.a+'&filterMigu=1&p=3&shuqi_h5').then((res)=>{
				console.log(res.body.data)
				this.arr1=res.body.data				
			})
			}
		},
		created(){
			if(this.flag){
				this.$http.jsonp('http://read.xiaoshuo1-sm.com/novel/i.php?do=is_serchpay&page=1&size=8&q='+this.a+'&filterMigu=1&p=3&shuqi_h5').then((res)=>{
				console.log(res.body.data)
				this.arr1=res.body.data						
			})
			}else{}
			this.$http.jsonp('http://read.xiaoshuo1-sm.com/novel/i.php?do=is_serchpay&page=1&size=4&q=wudong&filterMigu=1&p=3&shuqi_h5').then((res)=>{
				console.log(res.body.data)
				this.arr2=res.body.data				
			})
//			this.$http.jsonp('http://read.xiaoshuo1-sm.com/novel/i.php?do=is_serchpay&page=1&size=10&q=zuijin&filterMigu=1&p=3&shuqi_h5').then((res)=>{
//				console.log(res.body.data)
//				this.arr3=res.body.data
//				
//			})
			
			
		}
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	html,
	body {
		height: 100%;
		width: 100%;
		overflow-x: hidden;
	}
	.m_header{
		width: 100%;
		height: 40px;
		position: relative;
	}
	.m_a1{
		position: absolute;
		top: 9px;
		left: 30px;
	}
	.m_a2{
		position: absolute;
		top: 10px;
		left: 100px;
		z-index: 100;
	}
	.m_header p{
		width: 75%;
		height: 25px;
		background-color:#BCBEBF ;
		border-radius:10px ;
		border: none;
		z-index: 99;
		
		position: absolute;
		top: 10px;
		left: 60px;
	}
    .m_tu>img{
    	width: 140px;
    	height: 90px;
    	padding: 10px;
    }
    .m_center{
    	width: 100%;
    	/*position: relative;*/
    }
    .m_center>p{
		margin-top: 10px;
		width: 80px;
		height: 24px;
		font-size: 14px;
		line-height: 24px;
		border-left: 4px solid #04be02;
	}
	.m_one {
		width:100%;
		height: 280px;
		margin-top: -0px;
		/*overflow: hidden;*/
		border-bottom: 1px solid #DADDE0;
		display:flex !important;
	    align-content:center !important; 
	    flex-wrap: wrap; 
	}
	.m_one>div{
		margin-top: 0px;
		width: 90px;
		height: 125px;
		padding-left: 3px;	
	}
	.m_one>div img{
		width: 70px;
		height: 85px;
	}
	.m_a3{
		width: 80%;
		overflow: hidden;
		height: 18px;
		font-size: 14px;
		text-align: left;
		margin-left:10px
	}
	.m_a4{
		font-size: 10px;
		color: #bcbebf;
		text-align: left;
		margin-left: 10px
	}
	.m_center>span{
		display: inline-block;
		width: 100%;
		height: 30px;
		line-height: 30px;
		border-bottom: 8px solid #e5e5e5;
		position: relative;
	}
	.m_center>span>img{
		position: absolute;
		top: 3px;
		left: 218px;
	}
</style>