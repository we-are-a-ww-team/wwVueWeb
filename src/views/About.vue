<template>
  <div class="about">
    <h1>{{returnValue}}</h1>
  </div>
</template>


<script>

import axios from "axios";
export default {
  data(){
    return{
      returnValue:''
    }
  },
  methods: {
      init: function() {
          axios.get("/tayue/userController/index").then(res => {
            debugger;
            console.log("====>",res);
            this.returnValue = res.data.name;
          });
      }
  },
  created:function(){
    this.init();
  }
}


</script>
