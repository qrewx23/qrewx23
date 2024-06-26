<template>
	<view class="page">
		<view class="list-item" v-for="(item,index) in users" :key="index" @click="connect(item)">
			<view class="avatar">
				<text class="round" v-if="item.read"></text>
				<image :src="item.avatar" mode="widthFix"></image>
			</view>
			<view class="content">
				<view class="title">
					<text class="name">{{ item.name }}</text>
					<text class="time">{{ item.time }}</text>
				</view>
				<view class="txt">{{ item.msg }}</view>
			</view>
 
		</view>
	</view>
</template>
 
<script>
	export default {
		data() {
			return {
				options: [{
					text: '取消',
					style: {
						backgroundColor: '#007aff'
					}
				}, {
					text: '确认',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
				users: [{
						avatar: '/static/avatar/avatar1.png',
						name: '杨涛',
						read: 1,
						time: '23:59',
						msg: '没有消息就是最好的消息'
					},
					{
						avatar: '/static/avatar/avatar2.jpg',
						name: '雨中漫步',
						read: 1,
						time: '23:59',
						msg: '没有消息就是最好的消息'
					},
					{
						avatar: '/static/avatar/avatar3.jpeg',
						name: '糖果梦境',
						read: 1,
						time: '23:59',
						msg: '没有消息就是最好的消息'
					},
					{
						avatar: '/static/avatar/avatar4.png',
						name: '海上日落',
						read: 1,
						time: '23:59',
						msg: '没有消息就是最好的消息'
					},
					{
						avatar: '/static/avatar/avatar6.png',
						name: '男朋友',
						read: 1,
						time: '23:59',
						msg: '没有消息就是最好的消息'
					},
					{
						avatar: '/static/avatar/avatar8.png',
						name: '女朋友',
						read: 1,
						time: '23:59',
						msg: '没有消息就是最好的消息'
					},
					{
						avatar: '/static/avatar/avatar5.jpeg',
						name: '静谧之夜',
						read: 1,
						time: '23:59',
						msg: '没有消息就是最好的消息'
					},
					{
						avatar: '/static/avatar/avatar1.png',
						name: '风吹麦浪',
						read: 0,
						time: '23:59',
						msg: '没有消息就是最好的消息'
					},
					{
						avatar: '/static/avatar/avatar1.png',
						name: '路过岁月',
						read: 0,
						time: '23:59',
						msg: '没有消息就是最好的消息'
					},
					{
						avatar: '/static/avatar/avatar1.png',
						name: '繁星点点',
						read: 0,
						time: '23:59',
						msg: '没有消息就是最好的消息'
					}
				]
			};
		},
		methods: {
			onClick(e) {
				console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
			},
			swipeChange(e, index) {
				console.log('当前状态：' + e + '，下标：' + index)
			},
			connect(item) {
				uni.navigateTo({
					url: `/pages/message/message?name=${item.name}&avatar=${item.avatar}`
				})
			}
		}
	}
</script>
 
<style lang="scss" scoped>
	.page {
		padding: 0 32rpx;
		color: #333;
	}
 
	.list-item {
		display: flex;
		padding: 30rpx 0;
		border-bottom: 1px solid #ccced3;
 
		.avatar {
			width: 90rpx;
			height: 90rpx;
			border-radius: 10rpx;
			margin-right: 20rpx;
			position: relative;
 
			.round {
				position: absolute;
				width: 14rpx;
				height: 14rpx;
				border-radius: 50%;
				background: #ef5656;
				top: -4rpx;
				right: -4rpx;
				z-index: 1;
			}
 
			image {
				width: 100%;
				height: 100%;
				border-radius: 10rpx;
			}
		}
 
		.content {
			flex: 1;
 
			.title {
				display: flex;
				justify-content: space-between;
 
				.name {
					font-weight: bold;
				}
 
				.time {
					color: #999;
					font-size: 24rpx;
				}
			}
 
			.txt {
				margin-top: 10rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				text-align: left;
				color: #999;
				font-size: 26rpx;
			}
		}
	}
</style>
