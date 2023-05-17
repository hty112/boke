<template>
  <div class="all">
    <div class="userBox" v-if="user">
      <img v-if="!user.headImg" @click="centerDialogVisible = true" src="../assets/Tom.jpg">
      <img v-else @click="centerDialogVisible = true" :src="user.headImg">
      <div class="userInfo">
        <div class="userName">
          用户名：<input v-model="user.username" type="text"/>
        </div>
        <div class="email">
          邮箱：{{user.email}}
        </div>
        <div class="sex">
          性别：
          <el-radio v-model="user.sex" label="1">男</el-radio>
          <el-radio v-model="user.sex" label="2">女</el-radio>
        </div>
        <div class="introdu">
          简介：<el-input
            type="textarea"
            maxlength="30"
            show-word-limit
            placeholder="请输入内容"
            v-model="user.introduction">
        </el-input>
        </div>
      </div>
      <button class="button" @click="submit">提交</button>
      <button class="buttonExit" @click="exit">退出登录</button>
    </div>

    <el-dialog
        title="头像上传"
        :visible.sync="centerDialogVisible"
        width="350px"
        top="22vh"
        center>
      <el-upload
          class="avatar-uploader"
          action="http://localhost:3000/imgUpload"
          :show-file-list="false"
          drag
          name="img"
          :headers="headers"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <div v-else>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2MB</div>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="reviseImg">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "userInfo",
  data(){
    return{
      headers:{ enctype: "multipart/form-data"},
      centerDialogVisible: false,
      imageUrl:''
    }
  },
  methods:{
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.fileInfo = res.fileInfo
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg' || 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG或PNG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    reviseImg(){
      this.centerDialogVisible = false;
      this.$axios({
        url:'/user/reviseImg',
        method:"POST",
        data:{image:this.fileInfo}
      }).then(res=>{
        if(res.data.type == "error"){
          this.$router.go(0)
        }else {
          this.init()
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: 'success'
          })
        }
        this.fileInfo = ''
      })
    },
    submit(){
      this.$axios({
        url:'/user/revise',
        method:"POST",
        data:{user:this.user}
      }).then(res=>{
        if(res.data.type == "error"){
          this.$router.go(0)
        }else {
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: 'success'
          })
        }
      })
    },
    exit(){
      this.$store.commit("delToken")
      this.$router.go(0)
    }
  },
  props: {
    user:{ type: Object },
    init:{ type: Function}
  },
  mounted() {
  }
}
</script>

<style scoped>
@keyframes zhuye {
  from{
    opacity: 0;
    transform: translate(0px,-50px);
  }
  to{
    opacity: 1;
    transform: translate(0px,0px);
  }
}
.all{
  position: relative;
  align-items: center;
  background: #e9e9e9 url("@/assets/nv6.png") no-repeat fixed center;
  background-size: cover;
  display: grid;
  height: 100vh;
  width: 100%;
  place-items: center;
  animation: zhuye 1s ease 0s 1 normal none running;
}
.userBox{
  background-color: rgb(255,255,255,0.1);
  border-radius: 0.7rem;
  box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
  0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
  height: 700px;
  max-width: 800px;
  overflow: hidden;
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
}
.userBox img{
  border-radius: 100%;
  width: 80px;
  height: 80px;
  object-fit: cover;
}
.userInfo{
  margin-right: 30px;
}
.userName,.email,.sex,.introdu{
  margin-top: 30px;
  color: white;
  font-size: 20px;
}
.userName input{
  background-color: rgb(255,255,255,0.5);
  border: none;
  font-size: 20px;
  padding: 10px;
  outline: none;
  border-radius: 10px;
  color: rgb(0,0,0,0.6);
}
.button{
  color: white;
  font-size: 20px;
  margin-top: 40px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  background-color: darkviolet;
}
.buttonExit{
  position: absolute;
  top: 0;
  left: 80%;
  color: white;
  font-size: 20px;
  margin-top: 40px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  background-color: darkviolet;
}


/*表单*/
/deep/ .el-radio__label{
  font-size: 20px;
}
/deep/ .el-radio__inner{
  height: 18px;
  width: 18px;
}
/deep/ .el-radio__input.is-checked .el-radio__inner{
  background: darkviolet;
  border-color: darkviolet;
}
/deep/ .el-radio__input.is-checked+.el-radio__label{
  color: darkviolet;
}
/deep/ .el-radio__inner::after{
  height: 8px;
  width: 8px;
}
/deep/ .el-textarea{
  margin-top: 10px;
}
/deep/ .el-textarea__inner{
  background-color: rgb(255,255,255,0.5);
  font-size: 18px;
  user-select: none;
}
/deep/ .el-input__count{
  background-color: transparent;
  font-size: 15px;
}




/deep/ .avatar-uploader{
  width: 300px;
  margin: 0 auto;
}
/deep/ .el-upload-dragger{
  width: 300px;
}
.avatar{
  object-fit: cover;
  width: 100%;
  height: 100%;
}

</style>