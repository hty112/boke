<template>
  <div class="content" ref="con">
    <h2>Cavalry</h2>
    <div class="content-background">
    </div>
    <div class="content-menu">
      <img v-if="!headImg" class="content-head" @click="gotoUser" src="../assets/Tom.jpg" alt="">
      <img v-else class="content-head" @click="gotoUser" :src="headImg" alt="">
      <ul>
        <li @click="gotoHome()" >🐔首页</li>
        <li @click="gotoChat()" >🐔聊天</li>
        <li @click="gotoMessage()">🐔留言</li>
        <li >🐔期待</li>
        <li >🐔期待</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-hangdog",
  data(){
    return{
      headImg:''
    }
  },
  methods:{
    gotoHome(){
      this.$router.push('/')
    },
    gotoChat(){
      this.$router.push('/chat')
    },
    gotoMessage(){
      this.$router.push('/message')
    },
    gotoUser(){
      this.$router.push('/user')
    }
  },
  mounted() {
    this.$axios({
      url:'/user',
      method:'get'
    }).then(res => {
      if(res.data.type == "success" && res.data.headImg){
        this.headImg = 'data:image/png;base64,' + res.data.headImg
      }
    })
  }
}
</script>

<style scoped>
.content{
  position: fixed;
  width: 100%;
  height: 70px;
}
.content-background{
  position: fixed;
  background-color: black;
  opacity: 0;
  width: 100%;
  height:70px;
  transition: 1s;
  z-index: -1;
}
.content:hover .content-background{
  opacity: 0.3;
}
.content h2{
  float: left;
  font-family: windy;
  font-size: 39px;
  margin: 10px 0 0 30px;
  cursor: pointer;
  user-select: none;
  color: white;
}
.content-menu{
  float: right;
}
.content-menu ul{
  display: flex;
  margin-top: 20px;
  width: 600px;
  justify-content: space-between;
}
.content-menu li{
  position: relative;
  flex-direction: row;
  height: 50px;
  list-style: none;
  font-size: 25px;
  cursor: pointer;
  user-select: none;
  border: 0px solid #ee7752;
  transition: 0.5s;
  box-sizing: border-box;
  color: white;
}
.content-menu li::after{
  content: "";
  background-color: #ee7752;
  bottom: 0;
  left: 50%;
  position: absolute;
  width: 0;
  height: 6px;
  transform: translateX(-50%);
  transition: all .25s ease-in-out;
}
.content-menu li:hover{
  color: #ee7752;
}
.content-menu li:hover::after{
  width: 100%;
}
.content-head{
  float: right;
  width: 34px;
  height: 34px;
  border-radius: 100%;
  margin: 20px 30px 0 30px;
  cursor: pointer;
  user-select: none;
}
</style>