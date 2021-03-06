// 常用工具函数
// https://juejin.cn/post/6862591794312560647

// 加载文件夹所有文件
export function importAll(r) {
    let arr = []
    r.keys().forEach((file) => {
        let fileName = file.substr(2).split('.vue')[0]
        if (fileName != 'Start') {
            let firstLetter = fileName.charAt(0)
            let lowerCase = fileName.replace(firstLetter, firstLetter.toLowerCase())
            arr.push({
                path: `/${lowerCase}`,
                name: lowerCase,
                // component: () => import(`@/views/${fileName}.vue`)
                component: (resolve) =>
                    require([`@/components/${fileName}.vue`], resolve)
            })
        }
    })
    return arr;
}

export function deepCopy(target) {
    if (typeof target == 'object') {
        const result = Array.isArray(target) ? [] : {}
        for (const key in target) {
            if (typeof target[key] == 'object') {
                result[key] = deepCopy(target[key])
            } else {
                result[key] = target[key]
            }
        }

        return result
    }

    return target
}

//uniapp rpx转px
export function rpxToPx(callBack) {
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
        success(res) {
            let windowWidth = res.windowWidth;
            let px;
            px = Math.floor(100 * windowWidth / 750) / 100;
            callBack(px)
        }
    })
}
//防抖：
export function debounce(func, wait, immediate) {
    // getFlowList:debounce(function(item) {
    //   console.log(111)
    //   // this.$router.push('payFlowList?id='+item.id)
    // },1000)
    //防抖
    let timeout;
    return function () {
        let context = this, args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
//节流
export function throttle(fn, interval) {
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