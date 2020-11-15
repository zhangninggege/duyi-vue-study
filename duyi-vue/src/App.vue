<template>
  <div id="app">
    <div class="nav-box">
      <div class="logo">度一教育</div>
      <div class="nav-list">
        <router-link to="/">首页</router-link>
        <router-link to="/Learn">学习</router-link>
        <router-link to="/Student">学员展示</router-link>
        <router-link to="/About">关于</router-link>
        <router-link to="/Community">社区</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style scoped>
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
  .nav-list a.router-link-exact-active{
    font-weight: 700;
  }
</style>

