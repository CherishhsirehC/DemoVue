<template>
  <div>
    <p id="results"><b>Results:</b></p>
    <form id="ff">
      <select name="single">
        <option>Single</option>
        <option>Single2</option>
      </select>
      <select name="multiple" multiple="multiple">
        <option selected="selected">Multiple</option>
        <option>Multiple2</option>
        <option selected="selected">Multiple3</option>
      </select>
      <br />
      <input type="checkbox" name="check" value="check1" /> 
      check1
      <input type="checkbox" name="check" value="check2" checked="checked" />
      check2
      <input type="radio" name="radio" value="radio1" checked="checked" />
      radio1
      <input type="radio" name="radio" value="radio2" />
      radio2
      <input type="submit" value="上传" />
    </form>
    <br />
    <form
      id="upload"
      method="post"
      enctype="multipart/form-data"
      action="http://localhost:8090/upload"
      onsubmit="return true"
    >
      <p>
        <input type="file" name="file" />
      </p>
      <p>
        <input type="file" name="file" />
      </p>
      <p>
        <input type="file" name="file" />
      </p>
      <p>
        <input type="submit" value="上传" />
      </p>
    </form>
    <div class="save">
      key:<input name="id" type="text" /> value:<input
        type="text"
        name="name"
      />
      <button @click="save">Save</button>
    </div>
    <br />
    <div class="query">
      key:<input type="text" name="param" />
      <button class="btn" @click="query">query</button>
      <div class="content"></div>
    </div>
    <div class="delete">
      key:<input type="text" name="id" />
      <button class="del" @click="del">Delete</button>
    </div>
    <div class="update">
      key:<input name="id" type="text" /> value:<input
        type="text"
        name="name"
      />
      <button @click="update">Update</button>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "queryMySql",
  data() {
    return {};
  },
  mounted() {
    // var that = this;
    // $("#upload").bind("submit", function () {
    //   that.ajaxSubmit(this, function (data) {
    //     alert(data);
    //   });
    //   return false;
    // });
  },
  methods: {
    submitForm() {
      //   var fields = $("select, input[name=radio]").serializeArray();
      //   console.log( $("select, input[name=radio]"),fields,$("form").eq(0))
      //   $.each(fields, function (i, field) {
      //     $("#results").append(field.value + " ");
      //   });
      // $("#results").append( "<tt>" + $("form").eq(0).serialize() + "</tt>" );
      return false; // 必须返回false，否则表单会自己再做一次提交操作，并且页面跳转
    },
    //将form转为AJAX提交
    ajaxSubmit(frm, fn) {
      //   var dataPara = this.getFormJson(frm);
      console.log($(frm), $(frm)[0]);
      var dataPara = new FormData($("#upload")[0]);
      $.ajax({
        url: frm.action,
        type: frm.method,
        data: dataPara,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: fn,
      });
    },

    //将form中的值转换为键值对。
    getFormJson(frm) {
      var o = {};
      var a = $(frm).serializeArray();
      $.each(a, function () {
        if (o[this.name] !== undefined) {
          if (!o[this.name].push) {
            o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || "");
        } else {
          o[this.name] = this.value || "";
        }
      });

      return o;
    },
    update() {
      this.axios
        .post("/A/update", {
          id: $(".update").find("input[name=id]").val(),
          name: $(".update").find("input[name=name]").val(),
        })
        .then((result) => {
          console.info(result);
          $(".query>div").html(JSON.stringify(result.data));
        });
    },
    del() {
      this.axios
        .post("/A/delete", { id: $(".delete").find("input[name=id]").val() })
        .then((result) => {
          console.info(result);
          $(".query>div").html(JSON.stringify(result.data));
        });
    },
    query() {
      this.axios
        .post("/A/query", {
          id: $(".query").find("input[name=param]").val(),
        })
        .then((result) => {
          console.info(result);
          $(".query>div").html(JSON.stringify(result.data));
        });
      //   $.ajax({
      //     type: "post",
      //     url: "http://localhost:8090/query",
      //     // processData: false,
      //     contentType: false, //'application/json;charset=UTF-8',
      //     data: JSON.stringify({
      //       id: $(".query").find("input[name=param]").val(),
      //     }),
      //     dataType: "json",
      //     // withCredentials: false,
      //     success: function (result) {
      //       console.info(result);
      //       $(".query>div").html(JSON.stringify(result));
      //     },
      //   });
    },
    save() {
      this.axios
        .post("/A/world", {
          id: $(".save").find("input[name=id]").val(),
          name: $(".save").find("input[name=name]").val(),
        })
        .then((result) => {
          console.info(result);
          $(".query>div").html(JSON.stringify(result.data));
        });

      let json = {
        id: $(".save").find("input[name=id]").val(),
        name: $(".save").find("input[name=name]").val(),
      };
    },
  },
};
</script>
<style scoped>
.content {
  height: 200px;
  width: 100%;
  border: dashed red 1px;
  overflow: auto;
}
</style>