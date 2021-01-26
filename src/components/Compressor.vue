<template>
  <div class="box">
    {{`handleFile() {
        //传入一个文件对象
        const file = e.currentTarget.files[0];
        new Compressor(file, {
            quality: 0.2,
            success(f) {
                const formData = new FormData(); // 创建form对象
                formData.append("file", result);
                //返回一个文件对象 掉接口传入
                // APIztUploadImg(formData).then(res => {
                //     if(res.resultCode === "0") {
                //         this.$toast.clear();
                //         this.displayInfo[key] = content;
                //         this.info[key] = res.resultData.aliOssUrl;
                //     }
                // })
            },
            error(err) {
                //直接把原文件上传
                // APIztUploadImg(file).then(res => {
                //     if(res.resultCode === "0") {
                //         this.$toast.clear();
                //         this.displayInfo[key] = content;
                //         this.info[key] = res.resultData.aliOssUrl;
                //     }
                // })
            },
        });
    }`}}
  </div>
</template>

<script>
    import Compressor from 'compressorjs';
    export default {
        name:'name',
        data(){
        return {
        }
        },
        mounted(){
        },
        methods:{
            handleFile() {
                //传入一个文件对象
                const file = e.currentTarget.files[0];
                new Compressor(file, {
                    quality: 0.2,
                    success(f) {
                        const formData = new FormData(); // 创建form对象
                        formData.append("file", result);
                        //返回一个文件对象 掉接口传入
                        // APIztUploadImg(formData).then(res => {
                        //     if(res.resultCode === "0") {
                        //         this.$toast.clear();
                        //         this.displayInfo[key] = content;
                        //         this.info[key] = res.resultData.aliOssUrl;
                        //     }
                        // })
                    },
                    error(err) {
                        //直接把原文件上传
                        // APIztUploadImg(file).then(res => {
                        //     if(res.resultCode === "0") {
                        //         this.$toast.clear();
                        //         this.displayInfo[key] = content;
                        //         this.info[key] = res.resultData.aliOssUrl;
                        //     }
                        // })
                    },
                });
            },
            //毫秒数转日期(下面对应的类型输出)
            // 2021-01-26 11:01
            // 2021-01-26 11:01:06
            // 01-26
            // 2021-01
            // 2021-01-26
            dateFormat(time='',type=5,sign='-'){
				//时间处理
				if(!time) return ;
				let d = new Date(time),
					year = d.getFullYear(),
					month= d.getMonth()+1,
					date = d.getDate(),
					hour = d.getHours(),
					minute = d.getMinutes(),
					second = d.getSeconds(),
					result = '';
				switch (type){
					case 1:
						result = year + sign + (month<10?('0'+month):month) + sign + (date<10?('0'+date):date) + ' ' + (hour<10?('0'+hour):hour) + ':' + (minute<10?('0'+minute):minute);
						break;
					case 2:
						result = year + sign + (month<10?('0'+month):month) + sign + (date<10?('0'+date):date) + ' ' + (hour<10?('0'+hour):hour) + ':' + (minute<10?('0'+minute):minute) + ":" + (second<10?('0'+second):second);
						break;
					case 3:
						result = (month<10?('0'+month):month) + sign + (date<10?('0'+date):date);
						break;
					case 4:
						result = year + sign + (month<10?('0'+month):month);
						break;
					case 5:
						result = year + sign + (month<10?('0'+month):month) + sign + (date<10?('0'+date):date);
						break;
				}
				return result;
			}
        }
    };
</script>

<style lang="scss" scoped>
</style>