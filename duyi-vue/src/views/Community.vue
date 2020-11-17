<template>
    <div class="community">
        <router-link :to='{name:"Academic"}'>学术交流</router-link>
        <router-link :to='{name:"Personal"}'>个人中心</router-link>
        <router-link :to='{name:"Download"}'>资源下载</router-link>
        
        <div class="content">
            <router-view></router-view>
        </div>
         
    </div>
    
</template>
<style scoped>
a{
    
    text-decoration: none;
    
    padding:5px 10px;
    margin-right:10px;
}
a.router-link-exact-active{
background-color: #3385ff;
color: #fff;
}
.content{
    margin-top:100px;
    padding-left:20px;
}
.iii{
    margin-top: 2000px;
}
</style>