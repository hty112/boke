<template>
  <div>
    <Header style="z-index: 1000"></Header>
    <router-view></router-view>
    <music-player></music-player>
  </div>
</template>
<script>
import musicPlayer from "@/components/music-player";
import Header from "@/components/header";
export default {
  name: 'App',
  components:{
    musicPlayer,
    Header
  },
  mounted() {
    document.addEventListener("visibilitychange", ()=>{
      if (document.hidden === true) {
        document.title = "不要离开我😭"
      }else{
        document.title = "欢迎回来😊"
      }
    });
  },
  beforeDestroy() {
    this.$store.commit("delToken")
  }
}
</script>

<style>
@font-face {
  font-family: rain;
  src: url("assets/wenzi.ttf");
}
@font-face {
  font-family: windy;
  src: url("assets/Hofisem.ttf");
}
*{
  padding: 0px;
  margin: 0px;
  font-family: rain;
  cursor:url(https://ik.imagekit.io/nicexl/cursor/link.cur),default!important;
  box-sizing: border-box;
  user-select: none;
}
p,span,h1,a{
  user-select: none;
}
</style>
