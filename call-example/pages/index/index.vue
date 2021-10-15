<template>
	<view class="content" >
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
			<!-- <view class="content-lab">
				<view class="content-flex">
					<span class="flex-des">MediaSever:</span>
					<view class="flex1">
						<input v-model="form.mediaServer" class="flex1" type="text" placeholder="请输入 MediaSever 地址">
						<view>非必填；</view>	
					</view>
				</view>
			</view> -->
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
								 <!-- class="uni-list-cell uni-list-cell-pd" -->
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
		<mask v-if="showMask"></mask>
		
	</view>
</template>

<script>
	import mask from "../component/mask.vue"
	import * as call from "@rongcloud/calllib-uni"
	import * as im from "@rongcloud/imlib-uni"
	export default {
		data() {
			return {
				loginUserId: "",
				loginUserId1:true,
				loginUserId2:true,
				isLogining: "",
				isInitIm: false,
				form:{
					appkey:'',
					token:'',
					navi:'',
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
				targetId:'',
				isRoom:false,
				groupId:'',
				userIds:'',
				isCut:false,
				localSession:'',
				showMask:false
			}
		},
		components:{
			mask
		},
		onLoad() {
			// 初始化 CallLib
			console.log('初始化call')
			console.log(call)
			call.init({});
			call.addOnCallReceivedListener( (res)=> {
				console.log('我接收到了')
				console.log(res)
				this.isCut=true;
				this.localSession = res.data;
			});
			call.addOnCallDisconnectedListener((res)=>{
				console.log('挂断1');
				this.isCut=false;
				uni.$emit('OnCallDisconnected');
			});
			call.addOnCallConnectedListener((res)=>{
				console.log('对端接收')
				uni.$emit('OnCallConnected');
			});
		},
		onUnload:function(){
			call.unInit();
		},
		onBackPress(){
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
			//是否接入
			cutFn(isFlag){
				//确认接入
				if(isFlag){
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
				// console.log(this.form);
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
					  // console.log(userId)
					  this.libPage = true;
					  this.loginUserId = userId;
					  uni.showToast({
					  	title:userId
					  });
					  
				  }).catch((e)=>{
						console.log("连接IM发生错误... code=",e.message);
						uni.showToast({
							title:"错误码: "+ e.message,
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
					// console.log(im.init)
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
							resolve(res.userId);
						} else {
							console.log(123)
							reject(Error(res.error));
						}
					});
				});
			},
			//呼叫
			callOut(){
				//单聊音频
				if(this.callSelect ==='single'&&this.mediaSelect ==='audio'){
					this.callMsg(this.mediaSelect,this.targetId,this.callSelect);
				}else if(this.callSelect ==='single'&&this.mediaSelect ==='video'){
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
				// uni.showModal({
				// 	title:"是否接收？",
				// 	success:function(res){
				// 		if(res.confirm)	{
				// 			//呼入
				// 			uni.setStorageSync('room-parameters', {
				// 				callType: 'in',
				// 				mediaType: session.mediaType === 0 ? 'audio' : 'video'
				// 			});
				// 			//跳转.nvue
				// 			uni.navigateTo({
				// 				url:'../room/room'
				// 			});
				// 		}else{
				// 			//挂断
				// 			call.hangup();
				// 		}
				// 	}
				// })
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
		/* background: blue; */
		color: #FFFFFF;
		height: 90vh;
		overflow:hidden;
		/* background: #eeeeee1c; */
		padding: 30upx 50upx;
		
	}
	.user{
		/* text-align: center; */
		padding: 20px;
		background: #eeeeee1c;
	}
	.user h3{
		text-align: center;
	}
	.content-center{
		/* margin-top: 50upx; */
		text-align: center;
	}
	.content-lab{
		/* padding: 0 50upx; */
	}
	.content-flex{
		display: flex;
		margin-top: 30upx;
		/* background: #eeeeee1c; */
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
		/* color: #ccc; */
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
		/* height: 100%; */
		background: blue;
		
	}
	.boxs{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.5);
		/* color: #fff; */
		z-index: 9999;
		/* padding: 0 50upx; */
	
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
		/* padding-top: 100upx; */
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
