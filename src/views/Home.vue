<template>
  <div class="home">
    <a-layout>
      <a-layout-header>
        <!-- <headerCom /> -->
        <img src="../assets/img/logo4.png"
             style="margin-left:100px;height:50px;weight:50px;">
      </a-layout-header>
      <a-layout-content>
        <mainCompon></mainCompon>
      </a-layout-content>
      <a-layout-footer>
        <footerCompon />
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import mainCompon from './mainCompon'
import footerCompon from './footerCompon'
export default {
  name: 'home',
  components: {
    mainCompon,
    footerCompon
  }
}
</script>

<style scoped>
body,
.home {
  height: 100%;
}
.ant-layout-header {
  height: 100px;
  background: black;
  padding: 0;
  display: flex;
  align-items: center;
}
.ant-layout-footer {
  padding: 0;
}
.ant-layout-content {
  background: white;
  /* padding: 0 40px; */
}
</style>
