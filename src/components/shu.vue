<template>
	<div style="height: 100%;">
		<view-box slot='header'>
			<div class="s_nav">
				<tab>
					<tab-item>精选</tab-item>
					<tab-item>女生</tab-item>
					<tab-item>男生</tab-item>
					<tab-item>二次元</tab-item>
				</tab>
				<router-link to='/sou'><img src="../assets/fd2.png" class="img" /></router-link>
			</div>
			<swiper loop auto :list="list" :index="index" @on-index-change="demo07_onIndexChange"></swiper>
			<div class="aaa">
				<li><i class="iconfont icon-fenlei1"></i>
					<p>分类</p>
				</li>
				<li><i class="iconfont icon-nenghaopaiming"></i>
					<p>榜单</p>
				</li>
				<li><i class="iconfont icon-huiyuan"></i>
					<p>会员</p>
				</li>
				<li><i class="iconfont icon-wanjietuijian"></i>
					<p>完结</p>
				</li>
			</div>
			<div class="s_center">
				<p>最好看的书</p>
				<div class="s_h"><span @click="hh">换一批</span><img src="../assets/shu04.png" /></div>
				<div class="s_one">
					<div v-for="(x,index) in arr1">
						<router-link to='/xiang'><img :src="x.cover" /></router-link>
						<p class="m_a3">{{x.title}}</p>
						<p class="m_a4">{{x.author}}</p>
					</div>
				</div>
				<p>最好看的书</p>
				<div class="s_h"><span>换一批</span><img src="../assets/shu04.png" /></div>
				<div class="s_two s_one">
					<div v-for="(x,index) in arr2">
						<router-link to='/xiang'><img :src="x.cover" /></router-link>
						<p class="m_a3">{{x.title}}</p>
						<p class="m_a4">{{x.author}}</p>
					</div>
				</div>
				<div class="s_three">
					<div v-for="(x,index) in arr3">
						<router-link to='/xiang'><img :src="x.cover" /></router-link>
						<p class="s_a3">{{x.title}}</p>
						<p class="s_a4">{{x.author}}</p>
					</div>
				</div>
				<p>影视热门出版</p>
				<div class="s_four">
					<div v-for="(x,index) in arr4">
						<router-link to='/xiang'><img :src="x.cover" /></router-link>
						<p class="a3">{{x.title}}</p>
						<p class="s_a5 a4">{{x.desc}}</p>
						<span class="a5">连载</span>
						<span class="a6">{{x.category}}</span>
					</div>

				</div>
			</div>
			<tabbar class='bbb'>
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
	import { ViewBox, Tab, TabItem, Tabbar, Swiper, TabbarItem } from 'vux'
	export default {
		components: {
			ViewBox,
			TabItem,
			Tab,
			Swiper,
			Tabbar,
			TabbarItem
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
				arr1: [],
				arr2: [],
				arr3: [],
				arr4: [],
				a:'xiandai'
			}
		},
		methods: {
			onItemClick() {

			},
			demo07_onIndexChange(index) {
				this.demo07_index = index
			},
			hh(){
				this.a='dushi'
			}
		},
		created() {

			this.$http.jsonp('http://read.xiaoshuo1-sm.com/novel/i.php?do=is_serchpay&page=1&size=8&q='+this.a+'&filterMigu=1&p=3&shuqi_h5').then((res) => {
				console.log(res.body.data)
				this.arr1 = res.body.data
			})
			this.$http.jsonp('http://read.xiaoshuo1-sm.com/novel/i.php?do=is_serchpay&page=1&size=4&q=wudong&filterMigu=1&p=3&shuqi_h5').then((res) => {
				console.log(res.body.data)
				this.arr2 = res.body.data
			})
			this.$http.jsonp('http://read.xiaoshuo1-sm.com/novel/i.php?do=is_serchpay&page=1&size=4&q=mo&filterMigu=1&p=3&shuqi_h5').then((res) => {
				console.log(res.body.data)
				this.arr3 = res.body.data
			})
			this.$http.jsonp('http://read.xiaoshuo1-sm.com/novel/i.php?do=is_serchpay&page=1&size=10&q=修真&filterMigu=1&p=3&shuqi_h5').then((res) => {
				console.log(res.body.data)
				this.arr4 = res.body.data
			})
		}
	}
</script>

<style lang="less" scoped>
	@import '~vux/src/styles/reset.less';
	html,
	body {
		height: 100%;
		width: 100%;
		overflow-x: hidden;
	}
	
	.vux-tab {
		width: 60%;
		margin: 0 auto;
		background: transparent !important;
	}
	
	.vux-tab .vux-tab-item {
		color: white;
		background: no-repeat !important;
		/*border: none;*/
	}
	
	.img {
		position: absolute;
		top: 12px;
		left: 330px;
	}
	
	.s_center {
		width: 100%;
		position: relative;
	}
	
	.s_center>p {
		margin-top: 10px;
		width: 90px;
		height: 24px;
		font-size: 14px;
		line-height: 24px;
		border-left: 4px solid #04be02;
	}
	
	.s_nav {
		width: 100%;
		position: absolute;
		z-index: 100;
		top: 0;
		left: 0;
		background: transparent;
	}
	
	.aaa {
		display: -webkit-box !important;
		display: -ms-flexbox !important;
		display: flex;
		/*position: absolute !important;
    z-index: 500;
    top: 180px !important;*/
		flex-direction: row;
		justify-content: space-around;
		s width: 100%;
		height: 60px !important;
		background-color: #F7F7FA;
	}
	.s_a5{
	   width: 210px;
	   height: 45px;
	   top: 25px !important;
	   overflow: hidden;
	}
	li {
		list-style: none;
		width: 25%;
		height: 100%;
	}
	
	.icon-fenlei1,
	.icon-huiyuan,
	.icon-nenghaopaiming,
	.icon-wanjietuijian {
		color: orange;
		font-size: 27px;
	}
	
	.aaa p {
		margin-top: -5px;
		font-size: 14px;
	}
	
	.s_one {
		width: 100%;
		height: 280px;
		margin-top: -0px;
		border-bottom: 8px solid #DADDE0;
		display: flex !important;
		align-content: center !important;
		flex-wrap: wrap;
	}
	
	.s_two {
		border-bottom: none !important;
		height: 140px !important;
	}
	
	.s_one>div {
		margin-top: 0px;
		width: 90px;
		height: 125px;
		padding-left: 3px;
	}
	
	.s_one>div img {
		width: 70px;
		height: 85px;
	}
	
	.s_three {
		width: 100%;
		height: 180px;
		margin-top: -0px;
		border-bottom: 8px solid #DADDE0;
		display: flex !important;
		align-content: center !important;
		flex-wrap: wrap;
	}
	
	.s_three>div {
		margin-top: 0px;
		width: 160px;
		height: 85px;
		padding-left: 3px;
		margin-left: 20px;
		position: relative;
	}
	
	.s_three>div img {
		width: 55px;
		height: 80px;
		float: left;
		margin-left: 5px;
	}
	
	.s_a3 {
		font-size: 14px;
		font-weight: 300;
		text-align: left;
		position: absolute;
		top: 2px;
		left: 80px;
		height: 25px;
		overflow: hidden;
	}
	
	.s_a4 {
		font-size: 12px;
		text-align: left;
		color: #bcbebf;
		position: absolute;
		top: 40px;
		left: 80px;
	}
	
	.s_four {
		width: 100%;
		margin-top: 10px;
	}
	
	.s_four>div {
		width: 90%;
		height: 120px;
		position: relative;
	}
	/*.a5{
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
	}*/
	
	.s_four>div img {
		width: 80px;
		height: 100px;
		float: left;
		margin-left: 20px;
	}
	
	.s_h {
		width: 100px;
		height: 30px;
		position: absolute;
		top: 0px;
		right: 20px;
	}
	
	.s_h>span {
		font-size: 14px;
	}
	
	.s_h>img {
		position: absolute;
		top: 5px;
		left: 80px;
	}
</style>