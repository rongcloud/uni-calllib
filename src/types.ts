export interface UniListenerResult <T>{
  module:string,
  type:string,
  data:T
}
export interface usersParams {
  userId:string,
  mediaType:string,
  enableCamera:string,
  userType:string,
  enableMicrophone:string,
  mediaId?:string
}
export interface ReceivedListenerResult{
  mine:usersParams,
  inviter:usersParams,
  startTime:number,
  caller:usersParams,
  mediaType:number,
  callType:number,
  endTime:number,
  extra:string,
  targetId:string,
  connectedTime:number,
  users:usersParams[],
  callId:string
}
export interface ListenerResultRes{
  reason?:number
}
export enum RCCallIWCamera {
  NONE = -1,
  FRONT = 0,
  BACK = 1
}


