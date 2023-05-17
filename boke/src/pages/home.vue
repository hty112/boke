<template>
  <div>
<!--    <Header style="z-index: 1000"></Header>-->
    <div class="zhu" ref="zhu">
      <h1>欢迎光临</h1>
      <div class="zhu-title-overlay">
        <p>{{outString}}</p>
        <span>I</span>
      </div>
      <svg @click="gotoBody()" t="1680946162277" class="icon zhu-bottom" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1201" width="200" height="200"><path d="M511.853714 734.793143a55.296 55.296 0 0 1-38.326857-15.945143L28.16 273.188571a54.125714 54.125714 0 0 1 76.580571-76.580571l407.113143 407.04 407.405715-407.04a54.125714 54.125714 0 0 1 76.580571 76.580571L550.034286 718.848a53.833143 53.833143 0 0 1-38.253715 15.945143z" p-id="1202" fill="#ffffff"></path></svg>
      <div class="zhu-image">
        <video class="index-video" autoplay="autoplay" loop="loop" muted="muted" src="./../assets/hutao.mp4"></video>
      </div>
    </div>
    <home-body></home-body>
    <my-footer/>
  </div>
</template>

<script>
import Header from "@/components/header";
import myFooter from "@/components/myFooter";
import homeBody from "@/components/home-body";
export default {
  name: `Main`,
  data(){
    return{
      String:'影孤怜夜永，永夜怜孤影',
      outString:'',
      inP:0,
    }
  },
  components:{
    Header,
    myFooter,
    homeBody
  },
  watch:{
    inP:{
      handler(newVal){
        if(newVal == this.String.length){
          clearInterval(this.intimer)
          setTimeout(this.out,1000)
        }else if(this.inP == 0 || newVal == 0){
          clearInterval(this.outtimer)
          setTimeout(this.in,500)
        }
      }
    }
  },
  methods:{
    in() {
      this.intimer = setInterval(() => {
        this.outString += this.String.charAt(this.inP)
        this.inP += 1
      }, 200)
    },
    out() {
      this.outtimer = setInterval(() => {
        this.outString = this.outString.slice(0, this.outString.length - 1)
        this.inP -= 1
      }, 100)
    },
    gotoBody(){
      scrollTo({
        top:this.$refs.zhu.offsetHeight,
        behavior:'smooth'
      })
    }
  },
  mounted() {
    this.in()
  },
  beforeDestroy() {
    clearInterval(this.outtimer)
    clearInterval(this.intimer)
  }
}
</script>

<style scoped>
@keyframes hideToShow {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
@keyframes zhuye {
  from{
    opacity: 0;
    transform: translateY(-50px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes bottom {
  0%{
    transform: translate(0px,-20px);
    opacity: 1;
  }
  40%{
    transform: translate(0px,20px);
    opacity: 0.3;
  }
  100%{
    transform: translate(0px,-20px);
    opacity: 1;
  }
}
.zhu{
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.zhu h1{
  font-size: 50px;
  margin-bottom: 20px;
  color: white;
}
.zhu p{
  font-size: 30px;
  display: inline-block;
}
.zhu-title-overlay{
  padding: 10px;
  background-color: rgba(0,0,0,0.3);
  border-radius: 20px;
  color: white;
}
.zhu-title-overlay span{
  font-weight: 200;
  font-size: 30px;
  animation: hideToShow .7s infinite;
}
.zhu-image{
  position: fixed;
  height: 100vh;
  width: 100%;
  /*background: url("../assets/home-bg.jpeg") no-repeat;*/
  /*background-size: 100% 100%;*/
  z-index: -1000;
  animation: zhuye 2s ease 0s 1 normal none running;
}
.index-video{
  width: 100%;
  height: 100%;
  object-fit:cover;
}
.zhu-bottom{
  width: 50px;
  height: 50px;
  position: absolute;
  top: 80%;
  animation: bottom 2s infinite;
  cursor: pointer;
  text-align: center;
}
</style>