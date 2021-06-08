// 常用工具函数
// https://juejin.cn/post/6862591794312560647
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
  },
  //防抖：
  debounce(callbackFn, wait) {
    //或者赋值到vue的方法里面使用
    //window.addEventListener('scroll', debounce(handle, 1000));
    var timeout = null;
    return function() {
        if(timeout !== null) 
                clearTimeout(timeout);
        timeout = setTimeout(callbackFn, wait);
    }
  },
  //节流
  throttle(fn, interval) {
    //或者赋值到vue的方法里面使用
    //throttle(handle, 1000)
    var last;
    var timer;
    var interval = interval || 200;
    return function () {
        var th = this;
        var args = arguments;
        var now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                fn.apply(th, args);
            }, interval);
        } else {
            last = now;
            fn.apply(th, args);
        }
    }
  }
}
export default utils;