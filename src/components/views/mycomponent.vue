<template>
  <div>
    <div class="red">-------------</div>
    <div v-hello="{ color: 'red', fontSize: 18 }">自定义指令1</div>
    <div v-hello="{ color: 'yellow', fontSize: 14 }">自定义指令2</div>
    <img
      :style="myimg"
      :src="'https://leafletjs.com/docs/images/logo.pngaaaaa' | myfilter"
      alt
    />
    <div v-cloak onclick="alert('pop')">
      <button :class="classobj" @click.stop="btnclick($event)">按钮</button>
      {{ text }}
      <childdiv @ee="r($event)" v-show="myshow">
        <div slot="b" v-for="data in classobj" :key="data">{{ data }}</div>
        <div slot="a">插槽</div>
      </childdiv>
      {{ myname }}
      <a href="http://www.baidu.com" @click.prevent="preventDef"
        >阻止默认事件</a
      >
    </div>
    <div>
      复选框
      <input type="checkbox" v-model="group" value="1" />a
      <input type="checkbox" v-model="group" value="2" />b
      <input type="checkbox" v-model="group" value="3" />
      c
      {{ group }}
      单选框
      <input type="radio" v-model="radio" value="js" />js
      <input type="radio" v-model="radio" value="java" />java
      <input type="radio" v-model="radio" value="php" />
      php
      {{ radio }}
    </div>
    <component :is="who"></component>
    <footer>
      <ul>
        <li>
          <a @click="who = 'home'">首页</a>
        </li>
        <li>
          <a @click="who = 'my'">我的</a>
        </li>
      </ul>
    </footer>
    <!-- <home></home> -->
    <div class="list">3456789
      <template v-if="count">
        <ul>
          <li v-for="item in items" :key="item">...</li>
        </ul>
        <mo-paging
          :page-index="currentPage"
          :totla="count"
          :page-size="pageSize"
          @change="pageChange"
        >
        </mo-paging>
      </template>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import j from "@/file/file.json";
import axios from "axios";
import MoPaging from  './page'
// Vue.prototype.$axios = axios;
export default {
  filters: {
    //过滤器写法 v-bind中 parameter | filtername
    myfilter(data) {
      console.log(data);
      return data.replace(/aaaaa/g, "");
    },
  },
  directives: {
    //自定义指令写法
    hello: {
      inserted(el, bind) {
        console.log("当前节点插入到父节点", bind);
        el.style.backgroundColor = bind.value.color;
        el.style.fontSize = bind.value.fontSize + "px";
      },
      updata(el, bind) {
        console.log("当前节点更新了", bind);
        el.style.backgroundColor = bind.value;
      },
    },
  },
  mounted() {
    // axios.get("/LL/leaflet@1.6.0/dist/leaflet.js").then(res=>console.log(res.data));
    // axios.get('/videoui/api/hotwords').then(res=>console.log(res.data));
    // axios
    //   .post("/local", 'eyJmaWVsZG5hbWVjbiI6IuiNr+adkOWQjeensCJ9')
    //   .then((res) => console.log(res.data));
  },
  methods: {
    btnclick(ev) {
      console.log(ev);
      // ev.stopPropagation() 由事件修饰符.stop代替
      this.$emit("myevent", this.text);
      console.log(j);
      // fetch("@/file/file.json")
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((res) => {
      //     console.log(res);
      //   });
    },
    r(ev) {
      this.text = ev;
      this.classobj.push("c");
    },
    preventDef() {},
    keyupevent(ev) {
      console.log(ev);
    },
  },
  data: function () {
    return {
      text: "456987",
      // classobj: {
      //   a: true,
      //   b: true
      // },
      classobj: ["a", "b"],
      group: [],
      radio: "",
      who: "home",
      myimg: {
        width: "300px",
      },
      pageSize: 20, //每页显示20条数据
      currentPage: 1, //当前页码
      count: 0, //总记录数
      items: []
    };
  },
  components: {
    childdiv: {
      template: `<div @click="change()" :class="isshow?'red':'yellow'">
      <slot name="a"></slot>123
      <slot name="b"></slot>
      </div>`,
      data: function () {
        return { isshow: false };
      },
      methods: {
        change() {
          this.isshow = !this.isshow;
          this.$emit("ee", !this.isshow);
        },
      },
    },
    home: {
      template: `<div>home</div>`,
    },
    my: {
      template: `<div>my</div>`,
    },
    MoPaging
  },
  // props:['myname','myshow']
  props: {
    //验证父传子时传递数据类型的正确性
    myname: String,
    myshow: Boolean,
  },
};
</script>
<style lang="scss" scoped>
$app-background: rgb(26, 221, 0);
.red {
  background-color: $app-background;
}
.yellow {
  background-color: yellow;
}
.a {
  font-size: 26px;
}
.c {
  font-family: "微软雅黑";
  font-size: 1rem;
}
</style>