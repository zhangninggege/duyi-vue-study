<template>
  <div id="app">
    <div class="nav-box">
      <div class="logo" @click="handleClick">渡一教育</div>
      <div class="nav-list">
        <router-link to="/Login">登录</router-link>
        <router-link to="/Home">首页</router-link>
        <router-link to="/Learn">学习</router-link>
        <router-link to="/Student">学员展示</router-link>
        <router-link to="/About">关于</router-link>
        <router-link to="/Community">社区</router-link>
      </div>
      
    </div>
    <div class="content">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "app",
  methods:{
    handleClick(){
      this.$router.replace('/')
    }
  }
};
</script>

<style scoped>

.v-enter{
    transform: translateX(1000px);
  }
  .v-enter-active{
    transition: all .5s;
  }
  .v-enter-to{
    transform: translateX(0px);
  }
  .nav-box{
    display: flex;
    justify-content: space-between; 
    height: 60px;
    line-height: 60px;
    background-color: #3385ff;
    color: #fff;
  }
  .nav-box .logo{
    
  }
  .nav-list a{
    margin-right:40px;
    color: #fff;
    text-decoration: none;
  }
  .content{
    margin-top:60px;
  }
  .content,
  .nav-box{
    padding-right:200px;
    padding-left:200px;
  }
  .nav-list a.router-link-active{
    font-weight: 700;
  }
  
  

</style>

