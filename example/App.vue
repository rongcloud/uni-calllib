<script>
	export default {
		onLaunch: function() {
			uni.configMTLS({
			    certificates: [{
			        'host': 'im.irenfang.cn:1444',
			    }],
			    success ({code}) {
						console.log(code);
					},
					fail ({code}) {
						console.log(code);
					}
			});
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
