<template>
  <div>
    <div class="bcg">
<!--      <Header class="header"></Header>-->
      <div style="width: 100%;height: 70px;position: relative;"></div>
      <div class="fireBox">
        <p>留言板</p>
        <div class="fire">
          <input v-model="text" type="text" placeholder="留下点什么吧~" maxlength="20">
          <button @click="fire()">发射</button>
        </div>
      </div>
      <vue-baberrage
          :barrageList="barrageList"
          :loop="barrageLoop">
      </vue-baberrage>
    </div>
  </div>
</template>

<script>
import {MESSAGE_TYPE} from "vue-baberrage";
import Header from "@/components/header";
export default {
  name: "message",
  data() {
    return {
      lit:[],
      barrageList: [],
      barrageIsShow: true,    	//是否展示弹幕
      barrageLoop: true,     	//是否循环播放
      boxHeight: 170,         	//高度
      messageHeight: 100,		//消息高度
      lanesCount: 20,			//泳道数量
      throttleGap: 3000,		//消息间隔
      text:''
    }
  },
  methods: {
    fire(){
      if(this.text.trim() == ""){
        this.$message({
          showClose: true,
          message: "发言为空",
          type: 'error'
        });
      }else {
        this.$axios({
          method:"POST",
          url:"/message/send",
          data:{message:this.text}
        }).then(res=>{
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: res.data.type
          })
          if(res.data.type == "success"){
            this.barrageList.push({
              avatar: res.data.headImg != ""?'data:image/png;base64,'+res.data.headImg:require('../assets/Tom.jpg'),      		//头像
              msg: res.data.text,             	//弹幕消息
              time: this.randomNum(3,10),          		//屏幕展示时间
              type: MESSAGE_TYPE.NORMAL,	//类型
            });
          }
        })
      }
      this.text = ""
    },
    addToList() {
      this.list.forEach((v) => {
        this.barrageList.push({
          id: v.messageId,					//弹幕ID
          avatar: v.headImg,      		//头像
          msg: v.message,             	//弹幕消息
          time: this.randomNum(3,10),          		//屏幕展示时间
          type: MESSAGE_TYPE.NORMAL,	//类型
        });
      });
    },
    randomNum(minNum,maxNum){
      switch(arguments.length){
        case 1:
          return parseInt(Math.random()*minNum+1,10);
          break;
        case 2:
          return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
          break;
        default:
          return 0;
          break;
      }
    }
  },
  components:{
    Header
  },
  mounted() {
    this.$axios({
      method:"GET",
      url:"/message"
    }).then(res=>{
      this.list = res.data
      for(let i = 0;i < this.list.length;i ++){
        if(this.list[i].headImg){
          this.list[i].headImg = 'data:image/png;base64,' + this.list[i].headImg
        }else{
          this.list[i].headImg = require('../assets/Tom.jpg')
        }
      }
      this.addToList()
    })
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
.header{
  position: relative;
  z-index: 100;
}
.bcg{
  animation: zhuye 1s ease 0s 1 normal none running;
  height: 100vh;
  width: 100%;
  background: url("./../assets/nv9.jpg") no-repeat;
  position: fixed;
  background-size: cover;
}
.fireBox{
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  width: 100%;
  height: 100%;
}
.fireBox p{
  color: white;
  font-size: 40px;
  margin-bottom:20px;
}
.fire{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.fire input{
  color: white;
  background-color: transparent;
  font-size: 20px;
  padding: 10px;
  border: 2px solid white;
  border-radius: 20px;
  outline: none;
  margin-right: 10px;
}
.fire input::-webkit-input-placeholder{
  color: white;
}
.fire button{
  padding: 10px;
  border-radius: 20px;
  color: white;
  font-size: 20px;
  border: 2px solid white;
  background-color: transparent;
  outline: none;
}
/*弹幕消息框*/
/deep/ .baberrage-item .normal {
  padding: 5px 10px;
}

/*头像*/
/deep/ .baberrage-item .normal .baberrage-avatar {
  width: 30px;
  height: 30px;
  background-color: black;
}

/deep/ .baberrage-stage {
  height: calc(100vh - 70px);
}

/*文字*/
/deep/ .baberrage-item .normal .baberrage-msg {
  font-size: 20px;
  line-height: 25px;
}
</style>