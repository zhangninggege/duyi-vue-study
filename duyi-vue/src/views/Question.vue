<template>
  <div class="question">
    <div class="cur-question">
      {{ res.title }}
    </div>
    <div class="other">
      <div v-for="other in otherQuestion" 
      @click="handle(other.id)"
      :key="other.id" :class="other.type">
        {{ other.title }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
    beforeRouteLeave(to,from,next){
      const isLeave = window.confirm('要离开吗？不在看看了吗');
      if(isLeave){
        next()
      }else{
        next(false)
      }
    },
    props:{
        id:{
            type:[String,Number]
        }
    },
  data() {
    return {
      res: {},
    };
  },

  computed: {
    otherQuestion() {
      const arr = [];
      const { prev, prevId, next, nextId } = this.res;
      if (this.res.prev) {
        arr.push({ title: prev, id: prevId, type: "prev" });
      }
      if (this.res.next) {
        arr.push({ title: next, id: nextId, type: "next" });
      }
      return arr;
    },
  },
  methods: {
    handle(id) {
      this.$router.push({ name: "question", params: { id } });
    },
    getData() {
      const { id } = this
      this.$axios.get(`/question/${id}`).then((res) => {
        this.res = res;
      });
    },
  },
  watch: {
    '$route': {
      handler() {
        this.getData();
      },
      immediate:true
    },
  },
};
</script>
<style scoped>
.cur-question {
  margin-bottom: 200px;
}
.prev {
  float: left;
}
.next {
  float: right;
}
.next,
.prev {
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.next:hover,
.prev:hover {
  text-decoration: underline;
  color: #3385ff;
}
</style>