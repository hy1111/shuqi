<template>
	<div>
		<div class="sou_nav">
			<img src="../assets/sou01.png" />
			<p><input type="text" placeholder="搜索书架或书城" v-model="txt" @keydown="hu" /></p>
			<span>搜索</span>
		</div>
		<div class="sou_li" :style="{display:aa}">
			<p>大家都在搜</p>
			<span>错爱成婚</span><span>武帝通神</span><span>未婚妈咪@总裁</span><span>鬼探实录</span><span>杀到镇魔</span><span>闪婚成爱</span><span>都市只龙王传说</span><span>妖界执法人</span><span>地府共享群</span>
		</div>
		<div class="souls">
			<p :style="{display:bb}">搜索历史</p>
			<li v-for="(x,index) in arr1" @click="hy(x)">{{x}}</li>
		</div>
	</div>
</template>

<script>
	export default {
		//		components: {
		//			Tabbar,s
		//		},
		data() {
			return {
				arr1: [],
				aa:'block',
				bb:'block',
				txt:'',
				xx:''

			}
		},
		methods: {

			hu(event) {
				if(event.keyCode == 13) {
					this.$http.jsonp('http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sugs&q=' + this.txt).then((res) => {
				console.log(res.body.data)
				if(res.body.data.length>1) {
					this.bb='none'
                     this.aa='none'
                     console.log(this.aa)
				}
				this.arr1 = res.body.data
			})
			    }
			},
			hy(a){
				this.txt=a
			}
		},
		updated(){
			console.log(this.txt)
			

		}
	}
</script>

<style>
	.sou_nav {
		width: 100%;
		height: 40px;
		position: relative;
	}
	
	.sou_nav>img {
		position: absolute;
		top: 7px;
		left: 13px;
	}
	
	.sou_nav>p {
		position: absolute;
		background: #e5e5e5;
		top: 8px;
		left: 50px;
		width: 70%;
		height: 25px;
		border-radius: 12px 12px 12px 12px;
	}
	li{
		list-style-image:url(../assets/fd.png) ;
		text-align:left ;
		margin-left: 50px;
		margin-top: 10px;
		
	}
	.sou_nav>p>input {
		border: none;
		background: #e5e5e5;
		outline: none;
		margin-top: 5px;
	}
	
	.sou_nav>span {
		position: absolute;
		top: 8px;
		right: 20px;
		color: black;
	}
	
	.sou_li {
		margin-top: 10px;
		width: 100%;
		height: 160px;
		border-bottom: 8px solid #e5e5e5;
	}
	
	.sou_li>p {
		width: 100%;
		text-align: left;
		margin-top: 10px;
		opacity: 0.8;
	}
	
	.sou_li>span {
		display: inline-block;
		border: 1px solid transparent;
		border-radius: 10px;
		height: 20px;
		font-size: 14px;
		margin: 10px;
	}
	
	.sou_li span:nth-of-type(1) {
		color: #ec4343;
		background: #f5e0e0;
		width: 75px;
	}
	
	.sou_li span:nth-of-type(2) {
		color: #ec3643;
		width: 75px;
		background: #f8f0e0;
	}
	
	.sou_li span:nth-of-type(3) {
		color: #ec4343;
		width: 110px;
		background: #f5ffe0;
	}
	
	.sou_li span:nth-of-type(4) {
		color: #ec4f53;
		width: 75px;
		background: #e9b4f3;
	}
	
	.sou_li span:nth-of-type(5) {
		color: #ec4343;
		width: 75px;
		background: #f7acdc;
	}
	
	.sou_li span:nth-of-type(6) {
		color: #ec4343;
		width: 75px;
		background: #f7d1a2;
	}
	
	.sou_li span:nth-of-type(7) {
		color: #ec4343;
		width: 110px;
		background: #a2f7d8;
	}
	
	.sou_li span:nth-of-type(8) {
		color: #ec4343;
		width: 85px;
		background: #f7e8a2;
	}
	
	.sou_li span:nth-of-type(9) {
		color: #6b8a44;
		width: 85px;
		background: #d8f9ad;
	}
	
	.souls {
		width: 90%;
		margin: 10px auto;
	}
	
	.souls>p {
		opacity: 0.60;
	}
</style>