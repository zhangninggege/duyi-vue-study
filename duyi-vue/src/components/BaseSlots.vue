<script>
export default {
    data(){
        return{
            message:'hello world'
        }
    },
    render(h){
        return h('div',[
            this.$scopedSlots.default({
                text:this.message
            })
        ])
    }
}
</script>