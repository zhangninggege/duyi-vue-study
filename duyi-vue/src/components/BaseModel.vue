<script>
export default {
    
    data(){
        return {
            value:'shanshan'
        }
    },
    render(h){
        var self = this;
        return h('div',{},[
            h('input',{
                attrs:{
                    value:self.value
                },
                on:{
                    input(e){
                        self.value = e.target.value
                    }
                }
            }),
            self.value
        ])
    }
}
</script>