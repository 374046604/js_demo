let utils = {
  //uniapp rpx转px
  rpxToPx(callBack){
    // this.rpxToPx((PX)=>{
    //   _this.setData({
    //     marginTop: -240,
    //     menuHeight: _this.allHeight - 210*PX,
    //     menuHeight2:_this.allHeight - 210*PX,
    //     menuHeight3:_this.allHeight - (240+25)*PX
    //   });
    // })
    let window = wx.getSystemInfoSync().pixelRatio
    wx.getSystemInfo({
      success(res){
       let windowWidth = res.windowWidth;
       let px;
       px = Math.floor(100 * windowWidth/750)/100 ;
       callBack(px)
      }
    })
  }
}
export default utils;