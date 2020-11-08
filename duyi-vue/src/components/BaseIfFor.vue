<script>
export default {
    props:{
        items:Array,
    },
    mounted(){
        console.log(this.$refs)
    },
    render(createElement){
        if(this.items.length){
            return createElement('ul',this.items.map(item =>
                createElement('li',{
                    key:item,
                    ref:'li',
                    
                },item)));
        }else{
            return createElement('p','no item found');
        }
        
    }
}
</script>