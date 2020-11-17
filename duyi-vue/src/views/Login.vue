<template>
    <div class="login">
        <button @click="handleClick">{{ text }}</button>
    </div>
</template>
<script>
import auth from '../untils/auth'
export default {
    data(){
        return{
            msg:auth.isLogin()
        }
    },
    computed:{
        text(){
            return this.msg ? '取消登录' : '登录'
        }
        
    },
    methods:{
        handleClick(){
            if(this.msg ){
                auth.cancleLogin()
                this.msg = !this.msg;
            }else{
                auth.Login();
                this.msg = !this.msg;
                this.goBack()
            }    
        },
        goBack(){
            const isToGo = window.confirm('需要跳转到刚才的页面吗');
            if(isToGo){
                this.$router.go(-1);
            }
        }
    }
}
</script>