<template>
	<div style="height: 100%;">
		<view-box slot="header">
			<XHeader class="aa" :left-options="{showBack: false}" >
			    <a slot='left'><router-link to='/wo'><img src="../assets/wd2.png" /></router-link></a>
			   <router-link to='/qian'><img src="../assets/qd.png"  alt="1"/></router-link>
				<a slot='right'><router-link to='/sou'><img src="../assets/fd2.png" /></router-link></a>
			</XHeader>
			<swiper loop auto :list="list" :index="index" @on-index-change="demo07_onIndexChange"></swiper>
			<tabbar>
				<tabbar-item>
					<img slot="icon" src="../assets/sj.png">
					<span slot="label"><router-link to='/'>书架</router-link></span>>
				</tabbar-item>
				<tabbar-item show-dot>
					<img slot="icon" src="../assets/sc.png">
					<span slot="label"><router-link to='/shu'>书城</router-link></span>
				</tabbar-item>
				<tabbar-item selected >
					<img slot="icon" src="../assets/mf.png">
					<span slot="label"><router-link to='/mian'>免费</router-link></span>
				</tabbar-item>
				<tabbar-item badge="2">
					<img slot="icon" src="../assets/cz.png">
					<span slot="label"><router-link to='/yuan'>原创</router-link></span>
				</tabbar-item>
			</tabbar>
			<div class="qian">
			 <router-link to='/qian'><img src="../assets/qd2.png"/></router-link>
			  <span>今天签到可收获4书豆免费阅读哦</span>
			  <div><router-link to='/qian'>签到</router-link></div>
			</div>
			<div class="center">
		     <div class="one">
		       <div v-for="(x,index) in arr"><router-link to='/xiang'><img :src="x.cover"/></router-link>{{x.title}} </div>
		      
		     </div>
		     
		</div>
		</view-box>
		
	</div>
</template>

<script>
	import { ViewBox, XHeader, Swiper, Tabbar, TabbarItem } from 'vux'
	export default {
		name: 'HelloWorld',
		data() {
			return {
				list: [{
					url: 'javascript:',
					img: 'https://static.vux.li/demo/1.jpg',
					title: '送你一朵fua'
				}, {
					url: 'javascript:',
					img: 'https://static.vux.li/demo/2.jpg',
					title: '送你一辆车'
				}, {
					url: 'javascript:',
					img: 'https://static.vux.li/demo/3.jpg',
					title: '送你一次旅行',
					fallbackImg: 'https://static.vux.li/demo/3.jpg'
				}],
				index: 0,
				arr:[],
				arr1:[]
			}
		},
		components: {
			ViewBox,
			XHeader,
			Swiper,
			Tabbar,
			TabbarItem
		},
		methods: {
			demo07_onIndexChange(index) {
				this.demo07_index = index
//			},
//			dian(){
//				this.$http.jsonp('http://read.xiaoshuo1-sm.com/novel/i.php?do=sp_get&authorId=3743765&bookId=7038964&fetch=merge&sqUid=8000000&source=store&size=3&page=1&shuqi_h5').then((res)=>{
//				console.log(res.data)
//				this.arr1=res.body.data
//				
//			})
			}
		},
		created(){
			this.$http.jsonp('http://read.xiaoshuo1-sm.com/novel/i.php?do=is_serchpay&page=1&size=10&q=%E4%BA%94&filterMigu=1&p=3&shuqi_h5').then((res)=>{
				console.log(res.body.data)
				this.arr=res.body.data
				
			})
			
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@import '~vux/src/styles/reset.less';
	html,
	body {
		height: 100%;
		width: 100%;
		overflow-x: hidden;
	}
	.qian{
	  width: 280px;
	  height: 30px;
	  background-color: #dadde0;
	  margin: 5px auto;
	  border-radius:15px  ;
	}
	.qian>span{
	   margin-left: -20px;
	   font-size: 12px;
	}
	.qian>div{
	  display: inline-block;
	  width: 40px;
	  height: 20px;
	   font-size: 12px;
	   line-height: 20px;
	   color: white;
	   border-radius: 10px;
	  background-color: #0eb70c;
	  
	}
	.qian img{
	  float: left;
	  margin-top: 5px;
	  margin-left: 15px;
	}
	img[alt='1']{
	 margin-top: 10px;
	 margin-left: 175px;
	}
	/*.vux-header {
        position: absolute  !important;
        top: 0;
        width: 100%;
     }*/
	.aa {
		/*opacity: 0.1 !important;*/
		background-color:#0b427b !important;
		z-index: 99;
	}
	.center{
	  width: 340px;
	  height: 600px;
	  /*border: 1px solid darkgray;*/ 
	  margin: 20px auto;
	  
	}
	.one{
	 width: 100%;
	 height: 100%;
	 display:flex !important;
	 align-content:center !important; 
	 flex-wrap: wrap;
	 /*flex-direction: row;*/
	}
	.one>div{ 
	
	   /*justify-content: space-between;*/
	   width: 80px;
	   height: 130px;
	   /*border: 1px solid darkgray;*/ 
	   padding: 16px;
	 }
	 .one>div img{ 
	   width: 80px;
	   height: 100px;
	   
	 }
	 
	 /*.two{
	 width: 100%;
	 height: 150px;
	 display:flex;
	 flex-direction: row;
	}
	.two>div{ 
	
	   justify-content: space-between;
	    width: 80px;
	    height: 130px;
	   border: 1px solid darkgray; 
	   padding: 20px;
	 }*/
</style>