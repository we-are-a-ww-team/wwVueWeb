<template>
  <div>
    <div class="footerDiv">
      © 2019 -&nbsp;{{nowDate}}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;Shenzhen Kainuo Technology Co. Ltd. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ICP备案证书号：
      粤ICP备19145588号 </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nowDate: new Date().getFullYear()
    }
  }
}
</script>
<style scoped>
.footerDiv {
  height: 100px;
  background: black;
  color: #eaeaea;
  line-height: 100px;
}
</style>