<template>
  <div>
<!--    <Header style="z-index: 1000"></Header>-->
    <div v-if="!user.userId">
      <SignInUp/>
    </div>
    <div v-if="user.userId">
      <UserInfo :user="user" :init="init"/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
import SignInUp from "@/components/signInUp";
import UserInfo from "@/components/userInfo";
export default {
  name: `user`,
  data(){
    return{
      user:{
        userId:'',
        username:'',
        sex:'',
        email:'',
        introduction:'',
        headImg:''
      }
    }
  },
  methods:{
    init(){
      this.$axios({
        url:'/user',
        method:'get'
      }).then(res => {
        if(res.data.type == "success"){
          // this.$nextTick(()=>{
          //
          // })
          this.user.userId = res.data.user[0].userId.toString()
          this.user.username = res.data.user[0].username
          this.user.sex = res.data.user[0].sex.toString()
          this.user.email = res.data.user[0].email
          this.user.introduction = res.data.user[0].introduction
          if(res.data.headImg){
            this.user.headImg = 'data:image/png;base64,' + res.data.headImg
          }
        }
      })
    }
  },
  components:{
    Header,
    SignInUp,
    UserInfo
  },
  mounted() {
    this.init()
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
</style>