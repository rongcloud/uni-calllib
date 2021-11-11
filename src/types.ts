import {
  RCCallIWCallDisconnectedReason,
  RCUNICallErrorCode
} 
from './enum';
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
  reason?:RCCallIWCallDisconnectedReason
}
export interface ListenerResultError{
  reason?:RCUNICallErrorCode
}
export interface ListenerResultData{
  userId?:string,
  user?:usersParams,
  mediaType?:string

}
export interface RCCallIWBeautyOption{
  whitenessLevel:number,
  smoothLevel:number,
  ruddyLevel:number,
  brightLevel:number
}