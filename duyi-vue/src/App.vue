

<script>
export default {
  name:'app',
  data(){
    return {
      value:'hello world',
      show:false
    }
  },
  components:{

  },
  render(h){
    return (<h1>{ this.value }
      <div domPropsTextContent='<a>lianjie</a>'></div>
      <div v-show={this.show}>show</div>
      {false && <div>v-if</div>}
      
    </h1>
            
    )
  }
}
</script>

<style>

</style>
