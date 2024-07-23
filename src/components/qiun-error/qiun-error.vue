<template>
	<view class="chartsview">
		<view class="charts-font">{{errorMessage==null?'请点击重试':errorMessage}}</view>
	</view>
</template>

<script>
	export default {
		name: 'qiun-error',
		props: {
			errorMessage: {
				type: String,
				default: null
			},
		},
		data() {
			return {
				
			};
		},
	}
</script>

<style>
	.chartsview {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: center;
		align-items: center;
	}
	.charts-font{
		font-size: 14px;
		color: #CCCCCC;
		margin-top: 10px;
	}
</style>
