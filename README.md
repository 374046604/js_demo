## 准备开发 可视化布局
> 1，这项目是做什么？

- 实现一个快速开发网页的工具

> 2，这项目的最终结果是什么？

- 实现一个快速开发网页的工具

---  

### 存在的问题点
> 拖拽：
dragstart: 在图形上触发拖拽
drag: 拖拽持续
dragend: 结束图形的拖拽
dragenter: 当拖拽图形进入另外一个图形时，在后者上触发
dragover: 当拖拽图形持续在另一个图形上移动时触发，在后者上触发
dragleave: 拖拽图形离开了另一个图形，在后者上触发
drop: 拖拽图形在另一个图形上释放，在后者上触发

> 携带属性：

> 排版位置变化



//vue防抖 回调 时间差 是否立即执行
export const debounce = (func, wait, immediate) => {
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
};

getFlowList:debounce(function(item) {
	console.log(111)
	// this.$router.push('payFlowList?id='+item.id)
},1000)