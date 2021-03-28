<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links22</h2>
    <ul>
      <li>
        <!-- <a href="#/a">Myyyyyyyyyyyyyyy</a> -->
        <router-link to="/HelloWorld/a" tag="li" activeClass="active"
          >myyyyyyyyy</router-link
        >
        <router-link to="/HelloWorld/mycomponent" tag="li" activeClass="active"
          >mycomponent</router-link
        >
        <router-link to="/HelloWorld/b" tag="li" activeClass="active"
          >b</router-link
        >
        <router-link to="/HelloWorld/map" tag="li" activeClass="active"
          >map</router-link
        >
        <router-link to="/HelloWorld/cesium" tag="li" activeClass="active"
          >cesium</router-link
        >
        <router-link to="/HelloWorld/c" tag="li" activeClass="active"
          >c</router-link
        >
        <div>
          <ul>
            <li v-for="data in datalist" :key="data" @click="changePage(data)">
              {{ data }}
            </li>
          </ul>
        </div>
        <router-view />
      </li>
    </ul>
  </div>
</template>

<script>
import bus from "@/components/bus";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      datalist: [111, 222, 333],
    };
  },
  methods: {
    changePage(id) {
      console.log(id);
      localStorage.setItem("iddd", id);
      sessionStorage.setItem("id", id);
      // this.$router.push(`/b/${id}`)//动态路径跳转
      this.$router.push({ name: "bbb", params: { iddd: 234 } }); //命名路由
    },
  },
  beforeMount() {
    bus.$on('abc',function(e){//事件总线 （全局的vue对象）(监听者)、订阅者
      alert(e);
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active {
  background-color: red;
}
</style>

