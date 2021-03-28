<template>
  <div>
    <div class="blue"></div>
  </div>
</template>
<script>
export default {
  methods: {
    objDeepClone(obj) {
      //数组深复制
      let type = Object.prototype.toString.call(obj); //首先判断参数类型
      let newObj;
      if (type === "[object Array") {
        //当类型为数组的时候
        newObj = new Array();
        for (const k in obj) {
          newObj.push(this.objDeepClone(obj[k])); //递归查找保存到数组
        }
      } else if (type === "[object Object]") {
        //当类型为对象的时候
        newObj = new Object();
        for (const k in obj) {
          newObj[k] = this.objDeepClone(obj[k]); //递归查找保存到数组
        }
      } else {
        //当为基本类型的时候
        newObj = obj;
      }
      return newObj;
    },
  },
};
</script>
<style lang="scss" scoped>
@import url();
</style>