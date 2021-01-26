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
        }
    };
</script>

<style lang="scss" scoped>
</style>