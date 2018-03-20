<template>
	<div style="height: 100%;">
		<view-box>
			<XHeader class="aa" :left-options="{showBack: false}">
				<a slot='left'>
					<router-link to='/wo'><img src="../assets/wd.png" /></router-link>
				</a>
				<tab>
					<tab-item>推荐</tab-item>
					<tab-item>创作</tab-item>
				</tab>
				<a slot='right'>
					<router-link to='/sou'><img src="../assets/fd.png" /></router-link>
				</a>
			</XHeader>
			<swiper loop auto :list="list" :index="index" @on-index-change="demo07_onIndexChange"></swiper>
			<div class="y_center">
				<p>原创推荐</p>
				<div class="y_one">
					<div class="y_one1">
					 <div v-for="(x,index) in arr1"><router-link to='/xiang'><img :src="x.cover"/></router-link><p class="a1">{{x.title}}</p><p class="a2">{{x.author}}</p></div>
					</div>
				</div>
				<p>原创争锋榜</p>
				<div class="y_two">
					<div class="y_two1">
					 <div v-for="(x,index) in arr2"><router-link to='/xiang'><img :src="x.cover"/></router-link><p class="a1">{{x.title}}</p><p class="a2">{{x.author}}</p></div>
					</div>
				</div>
				<p>最新发布</p>
				<div class="y_three">
					
					 <div v-for="(x,index) in arr3"><router-link to='/xiang'><img :src="x.cover"/></router-link>
					 	<p class="a3">{{x.title}}</p>
					 	<p class="a4">{{x.author}}</p>
					 	<span class="a5">连载</span>
					 	<span class="a6">{{x.category}}</span>
					 </div>
				
				</div>
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
		</view-box>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem, ViewBox, XHeader, Swiper, Tab, TabItem, } from 'vux'
	export default {
		components: {
			ViewBox,
			XHeader,
			Swiper,
			Tabbar,
			TabbarItem,
			Tab,
			TabItem,
		},
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
				arr1:[],
				arr2:[],
				arr3:[]
			}
		},
		methods: {
			demo07_onIndexChange(index) {
				this.demo07_index = index
			}
		},
	    created(){
			this.$http.jsonp('http://read.xiaoshuo1-sm.com/novel/i.php?do=is_serchpay&page=1&size=8&q=yuanchuang&filterMigu=1&p=3&shuqi_h5').then((res)=>{
				console.log(res.body.data)
				this.arr1=res.body.data
				
			}),
			this.$http.jsonp('http://read.xiaoshuo1-sm.com/novel/i.php?do=is_serchpay&page=1&size=8&q=zichuang&filterMigu=1&p=3&shuqi_h5').then((res)=>{
				console.log(res.body.data)
				this.arr2=res.body.data
				
			}),
			this.$http.jsonp('http://read.xiaoshuo1-sm.com/novel/i.php?do=is_serchpay&page=1&size=10&q=zuijin&filterMigu=1&p=3&shuqi_h5').then((res)=>{
				console.log(res.body.data)
				this.arr3=res.body.data
				
			})
			
			
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
	
	.vux-header {
		background-color: white !important;
	}
	
	.vux-swiper {
		height: 140px !important;
	}
	.y_center{
		width: 100%;
		height: 500px;
		
	}
	.y_one{
		width:100%;
		height: 150px;
		margin-top: 10px;
		overflow: hidden;
		border-bottom: 8px solid #e5e5e5;
	}
	.y_one1{
		width:200%;
		height: 150px;
		display:flex !important;
	    align-content:center !important; 
	    flex-wrap: wrap;  
	    overflow: auto;  
	}
	.y_one1>div{
		width: 90px;
		height: 100%;
		padding-left: 3px;
		
	}
	.y_one1>div img{
		width: 80px;
		height: 100px;
	}
	.a1{
		width: 80%;
		overflow: hidden;
		height: 18px;
		font-size: 14px;
		text-align: left;
		margin-left:5px
	}
	.a2{
		font-size: 10px;
		color: #bcbebf;
		text-align: left;
		margin-left: 5px
	}
	.y_center>p{
		margin-top: 10px;
		width: 80px;
		height: 24px;
		font-size: 14px;
		line-height: 24px;
		border-left: 4px solid #04be02;
	}
	.y_two {
		width:100%;
		height: 150px;
		margin-top: 10px;
		overflow: hidden;
		border-bottom: 8px solid #e5e5e5;
	}
	.y_two1{
		width:400%;
		height: 150px;
		display:flex !important;
	    align-content:center !important; 
	    flex-wrap: wrap;  
	    overflow: auto;  
	}
	.y_two1>div{
		width: 90px;
		height: 100%;
		padding-left: 3px;
		
	}
	.y_two1>div img{
		width: 80px;
		height: 100px;
	}
	.y_three{
		width: 100%;
		margin-top: 10px;
	    
	}
	.y_three>div{
		width: 90%;
		height: 120px;
		position: relative;
	}
	.a5{
		height: 16px;
		font-size: 12px;
		color: #5b77e2;
		border: 1px solid #DADDE0;
		border-radius: 2px;
		position: absolute;
		top: 80px;
		left: 110px;
	}
	.a6{
		height: 16px;
		font-size: 12px;
		color: #5b77e2;
		border: 1px solid #DADDE0;
		border-radius: 2px;
		position: absolute;
		top: 80px;
		left: 140px;
	}
	.y_three>div img{
		width: 80px;
		height: 100px;
		float: left;
		margin-left: 20px;
	}
	.a3{
		
		font-size: 16px;
		font-weight: 300;
		text-align: left;
		position: absolute;
		top: 2px;
		left: 110px;
	}
	.a4{
		
		font-size: 14px;
		text-align: left;
		color: #bcbebf;
		position: absolute;
		top: 40px;
		left: 110px;
	}
</style>