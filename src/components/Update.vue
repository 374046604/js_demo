<template>
  <div class="update">
    <el-button size="mini" type="primary" round plain>核心原理就是调用服务器上传借口，获取到服务器的地址，提交将服务器地址的数组提交</el-button>
    <div class="up-wrap-box">
      <van-uploader class="mx_upload_item" :after-read="afterRead" />
      <div class="mx_upload_item" v-for="(item, index) in imgArr" :key="index">
        <div class="img_box">
          <img :src="item" />
          <img
            class="coupon_del"
            src="https://kumai-pub.oss-cn-shanghai.aliyuncs.com/images/coupon_del.png"
            @click="couponDel('imgArr', index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "timer60",
  data() {
    return {
      imgArr:[]
    };
  },
  mounted() {},
  methods: {
    //上传图片
    afterRead(file) {
      this.upLoadPhoto(file,'imgArr')
    },
    upLoadPhoto(file,key) {
      const formData = new FormData(); // 创建form对象
      formData.append("file", file.file);
      //本地文件的base64地址
      // this.imgArr.push(file.content);
      axios.post('https://gateway-dev.koosell.cn/community-client/secondMer/accessFlow/uploadImg', {formData})
      .then(res => {
          if(res.resultCode === "0") {
              this.imgArr.push(res.resultData.aliOssUrl)
          }
      })
    },
    //删除当前的图片
    couponDel(list,index){
        this[list].splice(index,1);
    },

  },
};
</script>

<style lang="scss" scoped>
.up-wrap-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .mx_upload_item {
    margin-bottom: 20px;
    width: 49%;
    .img_box {
      position: relative;
      width: 100%;
      height: 100%;
      & > img {
        width: 100%;
        height: 200px;
      }
      .coupon_del {
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 50px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .van-uploader__input-wrapper {
      width: 100%;
    }
    .mx_upload {
      width: 300px;
      height: 200px;
      border: 1px dashed #d8d8d8;
    }
  }
}
</style>