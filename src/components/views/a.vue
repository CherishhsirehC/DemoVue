<template>
  <div id="a">
    {{msg222}}---{{dataGetter}}
    <router-view />
    <mydiv v-show="isshow"></mydiv>
    <transition name="bound">
      <mycomponent @myevent="receive($event)" :myname="msg" :myshow="isbound" ref="mycomponent"></mycomponent>
    </transition>

    <input type="text" v-model.lazy="mytext" @keyup.13="keyupevent" ref="mytext" />
    <transition name="animate">
      <ul v-show="isshow">
        <li v-for="data in getdatalist" :key="data">{{data}}</li>
        <li v-for="(data,i) in temparr" :key="data">{{data}}--{{i}}</li>
      </ul>
    </transition>
    <button v-on:click="boundFun()">按钮2</button>
    <transition name="bound">
      <strong v-if="isbound">123456789</strong>
      <span v-else>eeeeeeeeee</span>
    </transition>
  </div>
</template>
<script>
import mycomponent from "@/components/views/mycomponent";
import bus from "@/components/bus";
import { mapMutations, mapState, mapActions, mapGetters } from "vuex";
export default {
  //   name: "a",
  data() {
    return {
      mytext: "",
      msg: "hello2",
      datalist: ["4526", "45698", "5697", "593", "596"],
      isshow: true,
      isbound: true,
      // temparr:['w','f',3]
      temparr: {
        a: "q",
        d: "e",
      },
    };
  },
  components: {
    mycomponent,
    mydiv: {
      template: `<div style="background-color:green;">147895623</div>`,
    },
  },
  methods: {
    getMsg() {
      console.info("M");
      return this.msg;
    },
    receive(ev) {
      console.info("receive", ev);
      this.isshow = !this.isshow;
    },
    keyupevent(ev) {
      // ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上
      console.log(ev, this.$refs.mycomponent,this.Global);
    },
    boundFun() {
      this.isbound = !this.isbound;
      this.$store.dispatch("getListAction");
      // getListAction();
    },
    // ...mapMutations(['getListAction'])
  },
  computed: {
    computedMsg() {
      console.info("computed");
      return "123456";
    },
    getdatalist() {
      console.info("filter");
      return this.datalist.filter((item) => item.indexOf(this.mytext) > -1);
    },
    ...mapState(["msg222"]), //扩展运算符 取出对象的所有可遍历属性，拷贝到当前对象中
    ...mapGetters(["dataGetter"]), //可认为是store的计算属性 与之相同this.$store.getters.dataGetter
  },
  beforeMount() {
    bus.$emit("abc",'12345');//事件总线 （全局的vue对象）发布者者
  },
  mounted: function () {
    // console.log(this.$route.params);//可获取路由跳转获取的参数
    bus.a=33;
    console.log(bus.a)
    this.$store.commit("message", false);
  },
  beforeRouteEnter(to, from, next) {
    //路由进入之前拦截判断
    next();
  },
};
</script>
<style scoped>
.divclass {
  background-color: red;
}
.animate-enter-active,
.animate-leave-active {
  translate: 0.5s all;
}
.animate-enter,
.animate-leave-to {
  transform: translateY(-100px);
}
.bound-enter-active {
  animation: animate 1.5s;
}
.bound-leave-active {
  animation: animate 1.5s reverse;
}
@keyframes animate {
  0% {
    opacity: 1;
    transform: translateX(-100px);
  }
  100% {
    opacity: 0;
    transform: translateX(100px);
  }
}
</style>