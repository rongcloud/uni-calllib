<template>
	<view class="content" @click.sop="">
		<!-- IM连接 -->
		<view v-if="!libPage" class="user">
			<!-- <p>User1</p> -->
			<h3>请先进行IM连接</h3>
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
						<input v-model="form.token" class="flex1" type="text" placeholder="请输入 Token">
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
				<button @click="connect" class="btn">
					连接
				</button>
			</view>
		</view>
		
		<view v-if="libPage">
			<view class="user">
				<view>
					<span>用户ID：</span><span>{{loginUserId}}</span>
				</view>
				<view class="content-lab">
					<view class="content-flex">
						<span class="flex-des">通话类型:</span>
						<view class="flex1">
							 <radio-group @change="callChange">
								 <label style="margin-top:20upx" v-for="(item, index) in callTypeArr" :key="item.id">
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
							<radio-group @change="mediaChange">
								<label style="margin-top:20upx" v-for="(item, index) in mediaTypeArr" :key="item.id">
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
					<button @click="callOut" class="btn">
						呼叫
					</button>
				</view>
			</view>
		</view>
		<view class="boxs" v-if="isCut">
			<view class="boxs-cen">
				<view class="boxs-des">
					是否接入？
				</view>
				<view class="boxs-btn">
					<button type="default" @click="cutFn(false)">取消</button>
					<button type="default" @click="cutFn(true)">确定</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import * as call from "@/uni_modules/RongCloud-CallWrapper/lib/index"
	import * as im from "@rongcloud/imlib-uni"
	import permision from "@/js_sdk/wa-permission/permission.js"
	import {reasonDeal,errorDeal,imCode} from '../../utils/code.js'
	export default {
		data() {
			return {
				loginUserId: "",
				loginUserId1:true,
				loginUserId2:true,
				isLogining: "",
				isInitIm: false,
				form:{
					appkey:'c9kqb3rdkbb8j',
					token:'fBsTKu1WSiANi7pTWnHRyf+f0IjfzRkyUpTVecImFcPNrpMY6GzeS/sRCrHjCiQD+FKPw5HyKn95+fgPzxzcLgS1YXhQ15eZ',
					navi:'https://nav-ucqa.rongcloud.net',
					mediaServer:''
				},
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
				targetId:'13811396855',
				isRoom:false,
				groupId:'88888888',
				userIds:'13811396855',
				isCut:false,
				localSession:'',
				showMask:false,
				isPermission:false,
				isBeauty:false
			}
		},
		onLoad() {
			// 初始化 CallLib
			im.disconnect();
			call.init({});
			call.onCallReceived( (res)=> {
				console.log(res)
				console.log("Engine:OnCallReceived=>"+"监听通话呼入, 目标id=>", res.data.targetId);
				this.isCut=true;
				this.localSession = res.data;
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
			if(this.showMask) {  
			     this.showMask = false;  
			     return true;  
			   }else{  
			      uni.showModal({  
			        title: '提示',  
			        content: '是否退出uni-app？',  
			        success: function(res) {  
			            if (res.confirm) {  
							im.disconnect();
			                // 退出当前应用，改方法只在App中生效  
			                plus.runtime.quit();  
			            } else if (res.cancel) {  
			                console.log('用户点击取消');  
			            }  
			        }  
			      });  
			      return true  
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
			connect(){
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
				  this.connectIM().then((userId)=>{
					  this.libPage = true;
					  this.loginUserId = userId;
					  uni.showToast({
					  	title:userId
					  });
					  if(uni.getSystemInfoSync().platform === 'android'){
						  permision.requestAndroidPermission('android.permission.CAMERA');
						  permision.requestAndroidPermission('android.permission.RECORD_AUDIO');
					  }
				  }).catch((e)=>{
						uni.setStorageSync('login-params',{
							appkey:this.form.appkey,
							token:this.form.token,
							navi:this.form.navi
						});
						console.log(e)
						console.log("连接IM发生错误... code=",e.message);
						uni.showToast({
							title:imCode(e),
							icon: "error",
							duration:2000
						})
						this.isInitIm=false;
					});
			},
			//连接IM
			connectIM(){
				
				//判断是否初始化
				if(!this.isInitIm){
					if(this.form.navi){
						console.log('有nav')
						console.log(this.form.navi)
						im.setServerInfo(this.form.navi,'')
					};
					im.init(this.form.appkey)
					this.isInitIm = true;
				}else{
					uni.showToast({
						title:"正在连接。。。",
						icon: "error",
						duration:2000
					})
					return;
				}
				return new Promise((resolve,reject)=>{
						im.connect(this.form.token,(res)=> {
							console.log('im已连接')
							console.log(res)
							if (res.code === 0) {
								uni.setStorageSync('login-params',{
									appkey:this.form.appkey,
									token:this.form.token,
									navi:this.form.navi
								});
								resolve(res.userId);
							} else {
								reject(res.code);
							}
						});
				});
				
			},
			//呼叫
			callOut(){
				
				//单聊音频
				if(this.callSelect ==='single'&&this.mediaSelect ==='audio'){
					if(this.targetId === ''){
						uni.showToast({
							title:"请输入对方ID",
							icon: "error",
							duration:2000
						})
						return;
					}
					this.callMsg(this.mediaSelect,this.targetId,this.callSelect);
				}else if(this.callSelect ==='single'&&this.mediaSelect ==='video'){
					if(this.targetId === ''){
						uni.showToast({
							title:"请输入对方ID",
							icon: "error",
							duration:2000
						})
						return;
					}
					//单聊视频
					this.callMsg(this.mediaSelect,this.targetId,this.callSelect);
				}else if(this.callSelect ==='group'&&this.mediaSelect ==='video'){
					let userIdsArr = this.userIds.split(',');
					uni.setStorageSync('room-parameters', {
						callType: 'out',
						mediaType: this.mediaSelect,
						targetId: '',
						callSelect:this.callSelect,
						groupId:this.groupId,
						userIds:userIdsArr
					});
					uni.navigateTo({
						url:'../room/room'
					});
				}else if(this.callSelect ==='group'&&this.mediaSelect ==='audio'){
					let userIdsArr = this.userIds.split(',');
					uni.setStorageSync('room-parameters', {
						callType: 'out',
						mediaType: this.mediaSelect,
						targetId: '',
						callSelect:this.callSelect,
						groupId:this.groupId,
						userIds:userIdsArr
					});
					uni.navigateTo({
						url:'../room/room'
					});
				}
			},
			callMsg(mediaSelect,targetId,callSelect){
				console.log(targetId)
				console.log(mediaSelect)
				uni.setStorageSync('room-parameters', {
					callType: 'out',
					mediaType: mediaSelect,
					targetId: targetId,
					callSelect:callSelect
				});
				uni.navigateTo({
					url:'../room/room'
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
			//是否接收逻辑
			onCallReceived(session) {
				// //呼入
				uni.setStorageSync('room-parameters', {
					callType: 'in',
					mediaType: session.mediaType === 0 ? 'audio' : 'video'
				});
				//跳转.nvue
				uni.navigateTo({
					url:'../room/room'
				});
			}
		}
	}
</script>

<style scoped>
	page{
		height: 90vh;
		overflow-y:hidden;
	}
	.content {
		flex: 1;
		position: relative;
		align-items: center;
		justify-content: center;
		background: #222831;
		color: #FFFFFF;
		height: 90vh;
		overflow:hidden;
		padding: 30upx 50upx;
		
	}
	.user{
		padding: 20px;
		background: #eeeeee1c;
	}
	.user h3{
		text-align: center;
	}
	.content-center{
		text-align: center;
	}
	.content-lab{
		/* padding: 0 50upx; */
	}
	.content-flex{
		display: flex;
		margin-top: 30upx;
	}
	.flex-des{
		width: 30%;
		text-align: right;
		margin-right: 10upx;
	}
	.flex1{
		flex:1;
		color: #ccc;
		
	}
	.flex1 input{
		border: 1px solid #ccc;
		height: 60upx;
	}
	.flex1 select{
		width: 100%;
		height: 60upx;
	}
	.btn{
		margin-top: 30upx;
		width: 50%;
		color: #fff;
		background: #2da2ea;
	}
	.radio-style{
		margin-bottom: 20upx;
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
