<template>
	<view class="content" @click.stop="">
		<!-- IM连接 -->
		<view v-if="!libPage" class="user login-user">
			<!-- <p>User1</p> -->
			<h3 class="page-title">请先进行IM连接</h3>
			<view class="content-lab">
				<view class="content-flex">
					<span class="flex-des">App Key:</span>
					<view class="flex1">
						<input v-model="form.appkey" type="text" placeholder="请输入 App Key" />
						<view>必填；</view>
					</view>
				</view>
			</view>
			<view class="content-lab">
				<view class="content-flex">
					<span class="flex-des">Token:</span>
					<view class="flex1">
						<picker mode="selector" :range="tokenOptions" range-key="label" :value="tokenIndex" @change="tokenChange">
							<view class="token-picker">
								{{tokenOptions[tokenIndex] ? 'Token：' + tokenOptions[tokenIndex].label : '请选择 Token'}}
							</view>
						</picker>
						<view>必填；</view>
					</view>
				</view>
			</view>
			<view class="content-lab">
				<view class="content-flex">
					<span class="flex-des">Navi:</span>
					<view class="flex1">
						<input v-model="form.navi" class="flex1" type="text" placeholder="请输入 Navi地址">
						<view>非必填；</view>
					</view>
				</view>
			</view>
			<view class="content-lab">
				<button @click="connect" class="btn btn-full">
					连接
				</button>
			</view>
		</view>
		
		<view v-if="libPage">
			<view class="user call-user">
				<view class="current-user">
					<span>用户ID：</span><span>{{loginUserId}}</span>
				</view>
				<view class="content-lab">
					<view class="content-flex">
						<span class="flex-des">通话类型:</span>
						<view class="flex1">
							<radio-group class="choice-group" @change="callChange">
								<label class="choice-label" v-for="(item, index) in callTypeArr" :key="item.id">
									<view class="radio-style">
										<radio :value="item.id" :checked="index === current" />
										{{item.label}}
									</view>
								</label>
							</radio-group>
						</view>
					</view>
				</view>
				<view class="content-lab">
					<view class="content-flex">
						<span class="flex-des">媒体类型:</span>
						<view class="flex1">
							<radio-group class="choice-group" @change="mediaChange">
								<label class="choice-label" v-for="(item, index) in mediaTypeArr" :key="item.id">
									<view class="radio-style">
										<radio :value="item.id" :checked="index === cur" />
										{{item.label}}
									</view>
								</label>
							</radio-group>
						</view>
					</view>
				</view>
				<view v-if="callSelect === 'single'" class="content-lab" >
					<view class="content-flex">
						<span class="flex-des">对方ID:</span>
						<view class="flex1">
							<input v-model="targetId" class="flex1" type="text" placeholder="对方userID">
							<view>必填；对方的userId</view>
						</view>
					</view>
				</view>
				<view v-if="callSelect !== 'single'" class="content-lab">
					<view class="content-flex">
						<span class="flex-des">群组ID:</span>
						<view class="flex1">
							<input v-model="groupId" class="flex1" type="text" placeholder="群组ID">
							<view>必填；通过开发者后台API调用创建群组</view>
						</view>
					</view>
				</view>
				<view v-if="callSelect !== 'single'" class="content-lab">
					<view class="content-flex">
						<span class="flex-des">被邀请者ID:</span>
						<view class="flex1">
							<input v-model="userIds" class="flex1" type="text" placeholder="被邀请者ID">
							<view>必填；需加入群后，方可收到邀请，多个userId用英文半角逗号分开</view>
						</view>
					</view>
				</view>
				<view class="content-lab">
					<button @click="showPushConfig" class="btn btn-wide">
						设置推送参数
					</button>
				</view>
				<view class="content-lab">
					<button @click="callOut" class="btn">
						呼叫
					</button>
				</view>
			</view>
		</view>
		<uni-popup ref="formPopup" type="dialog">
			<uni-popup-dialog mode="base" type="info"
				:duration="2000" 
				:before-close="true" 
				@close="closeForm" 
				@confirm="runAction"
				:title="curFormInfo.name"
			>
				<scroll-view scroll-y="true" style="height: 70vh;">
					<view  v-if="curFormVisible">
						<view class="" v-for="(item, index) in curFormInfo.params" :key="item.key" style="margin-bottom: 10px;">
							<view class="" style="color: #222831;">
								{{item.name || item.key}}:
							</view>
							<view class="" v-if="item.type === 'number'">
								<input  type="number" v-model="item.value" :placeholder="item.placeholder" style="border: 1px solid #999999;padding: 3px; background-color:#ccc"/>
							</view>
							<view class="" v-else>
								<input  type="text" v-model="item.value" :placeholder="item.placeholder" maxlength="-1" style="border: 1px solid #999999;padding: 3px; background-color:#ccc"/>
							</view>
						</view>
					</view>
				</scroll-view>
			</uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import * as call from "@/uni_modules/RongCloud-CallWrapper/lib/index"
	// import * as im from "@/uni_modules/RongCloud-IMWrapper/js_sdk/index"
	import RCIMIWEngine from "@/uni_modules/RongCloud-IMWrapper-V2/js_sdk/RCIMEngine";
	import permision from "@/js_sdk/wa-permission/permission.js"
	import {reasonDeal,errorDeal,imCode} from '../../utils/code.js'
	import * as Config from '../../common/config.js'
	
	export default {
		data() {
			return {
				loginUserId: "",
				loginUserId1:true,
				loginUserId2:true,
				isLogining: "",
				isInitIm: false,
				form:{
					appkey: Config.appKey,
					token: Config.token1,
					navi: Config.navi,
					mediaServer: Config.mediaServer
				},
				tokenIndex: 0,
				tokenOptions: [
					{
						label: Config.userId1,
						value: Config.token1
					},
					{
						label: Config.userId2,
						value: Config.token2
					}
				],
				isShow:false,
				libPage:false,
				isReceive:false,
				callSelect:'single',
				mediaSelect:'audio',
				current:0,
				cur:0,
				callTypeArr:[
					{
						id:'single',
						label:'单聊'
					},
					{
						id:'group',
						label:'群聊'
					}
				],
				mediaTypeArr:[
					{
						id:'audio',
						label:'音频'
					},
					{
						id:'video',
						label:'音视频'
					}
				],
				targetId:'',
				isRoom:false,
				groupId:'',
				userIds:'',
				isCut:false,
				localSession:'',
				isPermission:false,
				isBeauty:false,
				imEngine: null,
				curFormInfo: {
					name: ''
				},
				curFormVisible: true,
			}
		},
		onLoad() {
			// 初始化 CallLib
			// im.disconnect();
			// call.init({});
			call.onCallReceived( (res)=> {
				console.log(res)
				console.log("Engine:OnCallReceived=>"+"监听通话呼入, 目标id=>", res.data.targetId);
				this.onCallReceived()
			});
			call.onCallDisconnected((res)=>{
				console.log(res)
				console.log("Engine:OnCallDisconnected=>"+"通话挂断/拒绝, 挂断原因=>", res.data.reason);
				this.isCut=false;
				// 重新渲染视频视图
				uni.$emit('OnCallDisconnected');
				uni.showToast({
					title:reasonDeal(res.data.reason),
					error:"error",
					icon:'none',
					duration:2000
				})
			});
			call.onCallConnected((res)=>{
				console.log(res)
				console.log("Engine:OnCallConnected=>"+"已建立通话通话接通时，通过回调 onCallConnected 通知当前 call 的详细信息", res);
			});
			call.onRemoteUserInvited((res)=>{
				console.log("Engine:OnRemoteUserInvited=>"+"通话中的某一个参与者，邀请好友加入通话 ,远端Id为=>", res.data.userId);
				uni.$emit('OnCallConnected');
			})
			call.onRemoteUserJoined((res)=>{
				console.log("Engine:OnRemoteUserJoined=>"+"主叫端拨出电话，被叫端收到请求后，加入通话，对端Id为=>", res.data.userId);
				uni.$emit('OnCallConnected');
			})
			call.onRemoteUserLeft((res)=>{
				console.log("Engine:OnRemoteUserLeft=>"+"远端用户挂断(群聊触发)，远端Id为=>", res.data.reason);
				// uni.$emit('OnCallConnected');
				uni.showToast({
					title:reasonDeal(res.data.reason),
					error:"error",
					icon:'none',
					duration:2000
				})
			})
			call.onCallOutgoing((res)=>{
				console.log('电话已拨出 主叫端拨出电话后，通过回调 onCallOutgoing 通知当前 call 的详细信息')
			})
			call.onRemoteUserRinging((res)=>{
				console.log('被叫端正在振铃，主叫端拨出电话，被叫端收到请求，发出振铃响应时，回调 onRemoteUserRingin,对端Id为=>', res.data.userId)
			})
			call.onError((res)=>{
				console.log('通话过程中，发生异常')
				uni.showToast({
					title:errorDeal(res.data.reason),
					error:"error",
					icon:'none',
					duration:2000
				});
			})
			call.onRemoteUserMediaTypeChanged((res)=>{
				console.log('当通话中的某一个参与者切换通话类型，例如由 audio 切换至 video，回调 onMediaTypeChanged,切换媒体类型的Id为=>',res.data.user.userId);
			})
		},
		onUnload:function(){
			this.removeAllListeners();
		},
		onBackPress(){
			console.log('返回')
			call.unInit()
			if (this.imEngine != null){
				this.imEngine.disconnect(false)
			}
		},
		methods: {
			removeAllListeners(){
				call.unInit();
				//移除监听-接收到通话呼入
				call.removeCallReceivedListener();
				// 移除监听-开始呼叫通话的回调
				call.removeCallOutgoingListener();
				// 移除监听-通话已接通
				call.removeCallReceivedListener();
				// 移除监听-通话已结束
				call.removeCallDisconnectedListener();
				// 移除监听-对端用户正在振铃
				call.removeRemoteUserRingingListener();
				// 移除监听-对端用户加入了通话
				call.removeRemoteUserJoinedListener();
				// 移除监听-有用户被邀请加入通话
				call.removeRemoteUserInvited();
				// 移除监听-对端用户挂断
				call.removeRemoteUserLeftListener();
				// 移除监听-对端用户切换了媒体类型
				call.removeRemoteUserMediaTypeChangedListener();
				// 移除监听-通话出现错误的回调
				call.removeErrorListener();
				
			},
			//是否接入
			cutFn(isFlag){
				//确认接入
				if(isFlag){
					this.isCut=false;
					if (this.localSession.callId && this.localSession.callId.length > 0) {
						this.onCallReceived(this.localSession);
					}
				}else{
				//取消接入
					this.isCut=false;
					call.hangup();
				}
			},
			//连接IM
			async connect(){
				if(!this.form.appkey){
					uni.showToast({
						title:"请输入appKey",
						icon: "error",
						duration:2000
					})
					return;
				}
				if (!this.form.token) {
				    uni.showToast({
				    	title:"请输入token",
				    	icon: "error",
				    	duration:2000
				    })
				    return;
				}
				uni.showLoading({
					title: '正在连接。。。'
				});
				this.connectIM()
			},
			//连接IM
			async connectIM(){
				const options = {
					naviServer: this.form.navi
				}
				this.imEngine = await RCIMIWEngine.create(this.form.appkey,options)

				let callback = {
					onDatabaseOpened:(res) => {
					},
					onConnected:(res) => {
						if (res.code != 0){
							uni.hideLoading();
							uni.showToast({
								title: 'OnCon:' + res.code,
								icon: 'error'
							})
							return
						}
						//连接成功
						call.init({});
						console.log('call.init')
						this.libPage = true;
						this.loginUserId = res.userId;
						uni.hideLoading();
						uni.showToast({
							title:res.userId
						});
						if(uni.getSystemInfoSync().platform === 'android'){
							permision.requestAndroidPermission('android.permission.CAMERA');
							permision.requestAndroidPermission('android.permission.RECORD_AUDIO');
						}
					}
				};

				let code = await this.imEngine.connect(this.form.token,10,callback)
				if(code != 0 ){
					uni.hideLoading();
					uni.showToast({
						title: 'connect:' + code,
						icon: 'error'
					})
				}
			},
			//呼叫
			callOut(){
				let params = {
					callType: 'out',
					mediaType: this.mediaSelect,
					callSelect: this.callSelect,
				};
				//单聊音视频
				if(this.callSelect ==='single'){
					if(this.targetId === ''){
						uni.showToast({
							title:"请输入对方ID",
							icon: "error",
							duration:2000
						})
						return;
					}
					params.targetId = this.targetId;
				} else if(this.callSelect ==='group') {
					if(this.groupId === ''){
						uni.showToast({
							title:"请输入群 ID",
							icon: "error",
							duration:2000
						})
						return;
					}
					params.targetId = '';
					params.groupId = this.groupId;
					let userIdsArr = this.userIds.split(',');
					params.userIds = userIdsArr;
				}
				console.log('push room', params);
				let {callType, mediaType, targetId, callSelect, groupId, userIds} = params;
				let roomUrl = `../room/room?callType=${callType}&mediaType=${mediaType}&targetId=${targetId}&callSelect=${callSelect}&groupId=${groupId}&userIds=${JSON.stringify(userIds)}`
				uni.navigateTo({
					url: roomUrl
				});
			},
			//通话类型切换
			callChange(e){
				this.callSelect = e.target.value;
			},
			//媒体类型切换
			mediaChange(e){
				this.mediaSelect = e.target.value;
			},
			tokenChange(e) {
				const index = Number(e.detail.value);
				this.tokenIndex = index;
				this.form.token = this.tokenOptions[index].value;
			},
			// 是否接收逻辑
			onCallReceived(session) {
				// 呼入
				// uni.setStorageSync('room-parameters', {
				// 	callType: 'in',
				// 	mediaType: session.mediaType === 0 ? 'audio' : 'video'
				// });
				//跳转.nvue
				uni.navigateTo({
					url:'../room/room'
				});
			},
			showPushConfig() {
				this.curFormInfo = {
					name: "设置推送参数",
					params: [
						{ key: 'channelIdMi', value: '', type: 'string', name: '小米的渠道 ID', placeholder: '非必填'},
						{ key: 'channelIdHW', value: '', type: 'string', name: '华为的渠道 ID', placeholder: '非必填'},
						{ key: 'categoryHW', value: '', type: 'string', name: '华为推送消息分类', placeholder: '非必填'},
						{ key: 'channelIdOPPO', value: '', type: 'string', name: 'OPPO 的渠道 ID', placeholder: '非必填'},
						{ key: 'typeVivo', value: '', type: 'number', name: 'vivo 推送通道类型', placeholder: '非必填, 0 运营, 1 系统'},
						{ key: 'categoryVivo', value: '', type: 'string', name: 'vivo 推送消息分类', placeholder: '非必填'},
					],
					action: (params) => {
						if (uni.getSystemInfoSync().platform !== 'android') {
							uni.showToast({
								title: 'iOS 无需设置 Android 推送参数',
								icon: 'none',
								duration: 2000
							})
							return;
						}
						if (Object.keys(params).length === 0) {
							uni.showToast({
								title: '未填写推送参数',
								icon: 'none',
								duration: 2000
							})
							return;
						}
						console.log(params);
						call.setPushConfig({androidConfig: params}, {});
					},
				}

				this.$refs.formPopup.open();
			},
			closeForm() {
				this.$refs.formPopup.close()
			},
			runAction() {
				const params = {}
				this.curFormInfo.params && this.curFormInfo.params.forEach((item) => {
					const value = typeof item.value === 'string' ? item.value.trim() : item.value;
					if (value === '' || value === undefined || value === null) {
						return;
					}
					params[item.key] = item.type === 'number' ? Number(value) : value;
				})
				this.curFormInfo.action && this.curFormInfo.action(params)
				this.$refs.formPopup.close()
			}
		}
	}
</script>

<style scoped>
	page{
		height: 100vh;
		overflow-y: auto;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #222831;
		color: #FFFFFF;
		min-height: 100vh;
		overflow-y: auto;
		padding: 56upx 44upx;
		box-sizing: border-box;
	}
	.user{
		width: 100%;
		max-width: 720upx;
		padding: 0;
		box-sizing: border-box;
	}
	.login-user{
		transform: translateY(-120upx);
	}
	.login-user .content-flex{
		justify-content: center;
	}
	.login-user .flex-des{
		display: none;
	}
	.login-user .flex1{
		flex: none;
		width: 80vw;
		max-width: 600upx;
	}
	.call-user{
		transform: translateY(-70upx);
	}
	.call-user .content-lab{
		margin-top: 28upx;
	}
	.call-user .content-flex{
		flex-direction: column;
		align-items: center;
	}
	.call-user .flex-des{
		width: 80vw;
		max-width: 600upx;
		min-height: 38upx;
		line-height: 38upx;
		text-align: left;
		margin-right: 0;
		margin-bottom: 12upx;
		font-size: 26upx;
		color: #cbd5df;
	}
	.call-user .flex1{
		flex: none;
		width: 80vw;
		max-width: 600upx;
	}
	.page-title{
		text-align: center;
		font-size: 36upx;
		font-weight: 600;
		line-height: 48upx;
		margin: 0 0 54upx;
		color: #f7fafc;
	}
	.current-user{
		text-align: center;
		font-size: 30upx;
		line-height: 42upx;
		margin-bottom: 52upx;
		color: #f7fafc;
	}
	.content-center{
		text-align: center;
	}
	.content-lab{
		width: 100%;
		margin-top: 26upx;
	}
	.content-flex{
		display: flex;
		align-items: flex-start;
		width: 100%;
	}
	.flex-des{
		width: 168upx;
		min-height: 72upx;
		line-height: 72upx;
		text-align: right;
		margin-right: 24upx;
		color: #edf2f7;
		font-size: 28upx;
		white-space: nowrap;
	}
	.flex1{
		flex: 1;
		min-width: 0;
		color: #aeb8c2;
		font-size: 24upx;
		line-height: 34upx;
	}
	.flex1 input{
		width: 100%;
		height: 72upx;
		border: 1px solid #5f6d7a;
		border-radius: 8upx;
		background: rgba(255, 255, 255, 0.06);
		color: #f7fafc;
		padding: 0 20upx;
		box-sizing: border-box;
		font-size: 26upx;
	}
	.token-picker{
		width: 100%;
		height: 72upx;
		line-height: 72upx;
		border: 1px solid #5f6d7a;
		border-radius: 8upx;
		background: rgba(255, 255, 255, 0.06);
		color: #f7fafc;
		padding: 0 20upx;
		box-sizing: border-box;
		font-size: 26upx;
	}
	.flex1 select{
		width: 100%;
		height: 72upx;
	}
	.btn{
		margin: 36upx auto 0;
		width: 360upx;
		height: 72upx;
		line-height: 72upx;
		color: #fff;
		background: #2da2ea;
		border: 0;
		border-radius: 8upx;
		font-size: 28upx;
		padding: 0 24upx;
		white-space: nowrap;
		box-sizing: border-box;
	}
	.login-user .page-title{
		margin-bottom: 92upx;
	}
	.btn-wide{
		width: 420upx;
	}
	.call-user .btn,
	.call-user .btn-wide{
		width: 80vw;
		max-width: 600upx;
	}
	.btn-full{
		width: 80vw;
		max-width: 600upx;
	}
	.login-user .btn-full{
		margin-top: 70upx;
	}
	.radio-style{
		min-height: 72upx;
		line-height: 72upx;
		margin-bottom: 8upx;
		color: #f7fafc;
		font-size: 28upx;
	}
	.choice-group{
		display: flex;
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
	}
	.choice-label{
		width: 48%;
	}
	.choice-label .radio-style{
		border: 1px solid #5f6d7a;
		border-radius: 8upx;
		background: rgba(255, 255, 255, 0.06);
		text-align: center;
		box-sizing: border-box;
	}
	.shade-call{
		position: absolute;
		width: 100%;
		background: blue;
		
	}
	.boxs{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.5);
		z-index: 9999;
	}
	.boxs-cen{
		width: 80%;
		height: 300upx;
		background: #FFFFFF;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		border-radius: 4upx;
	}
	.boxs-des{
		margin-top: 50upx;
		color: #000000;
		text-align: center;
	}
	.boxs-btn{
		margin-top: 50upx;
		display: flex;
		justify-content: space-between;
	}
</style>
