<template>
    <div class="academic">
        <ul>
            <router-link
            tag="li"
            v-for='question in questionList'
            :key='question.id'
            :to="{name:'question',params:{id:question.id}}"
            >
    {{ question.title }}
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            questionList:[]
        }
    },
    mounted(){
        this.$axios.get('/data').then((res)=>{
           this.questionList = res
        })
   }
}
</script>
<style scoped>
ul li{
    margin-top: 20px;
}
ul li:hover{
    cursor: pointer;
    text-decoration: underline;
    color:#3385ff
}

</style>