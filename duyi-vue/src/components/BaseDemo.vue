<template>
    <div class="demo">
        <button @click="show=!show">点击</button>
        <transition>
            <div class="content" v-if='show'>过渡</div>
        </transition>
    </div>
</template>
<script>
export default {
   data(){
       return {
           show:true
       }
   }
}
</script>
<style scoped>
.demo{
    position: relative;
}
.content{
    position: absolute;
    top:100px;
    right:0;
}
    .v-enter{
        opacity: 0;
        right:0;
    }
    .v-enter-active{
        transition: all 8s
    }
    .v-enter-to{
        opacity: 1;
        right:800px;
    }
    .v-leave{
        opacity: 1;
        top:100px;
    }
    .v-leave-active{
        transition: opacity top .8s
    }
    .v-leave-to{
        opacity: 0;
        top:700px;
    }
</style>