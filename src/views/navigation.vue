<template>
  <div class="navigation">
    <a-menu :subMenuOpenDelay='0'
            v-model="defaultMenu"
            mode="horizontal">
      <a-menu-item @click="jumpHome"
                   key="mail">
        HOME </a-menu-item>
      <a-sub-menu key="app">
        <span slot="title"
              class="submenu-title-wrapper">
          PRODUCTS</span>
        <a-menu-item @click="jumpProductShow('Gun')"
                     key="setting:3">Massage Gun</a-menu-item>
        <a-menu-item @click="jumpProductShow('toothBrush')"
                     key="setting:4">Electronic Toothbrush</a-menu-item>
        <a-menu-item @click="jumpProductShow('blackHead')"
                     key="setting:5">Blackhead Remover</a-menu-item>
        <a-menu-item @click="jumpProductShow('faceCleaning')"
                     key="setting:6">Facial Cleansing Brush</a-menu-item>
        <a-menu-item @click="jumpProductShow('Accessories')"
                     key="setting:7">Accessories</a-menu-item>

      </a-sub-menu>
      <a-sub-menu>
        <span slot="title"
              class="submenu-title-wrapper">
          SERVICE</span>
        <a-menu-item key="setting:1">Customization</a-menu-item>
        <a-menu-item key="setting:2">Support</a-menu-item>
        <a-menu-item key="setting:11">Service Terms</a-menu-item>
      </a-sub-menu>
      <a-sub-menu>
        <span slot="title"
              class="submenu-title-wrapper">
          STORIES</span>
        <a-menu-item key="setting:8">Stories on Key Finder</a-menu-item>
        <a-menu-item key="setting:9">Stories on Luggage</a-menu-item>
        <a-menu-item key="setting:10">Stories on Motion Alert</a-menu-item>
      </a-sub-menu>
      <a-sub-menu>
        <span slot="title"
              class="submenu-title-wrapper">
          ABOUT US</span>
        <a-menu-item key="setting:8">Vision and Mission</a-menu-item>
        <a-menu-item key="setting:9">Contact Us</a-menu-item>
        <a-menu-item key="setting:10">Online Message</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="NEWS">
        NEWS
      </a-menu-item>
    </a-menu>
  </div>

</template>

<script>
import bus from '../bus.js';
export default {
  data () {
    return {
      defaultMenu: ['mail'],
    };
  },
  methods: {
    jumpHome () {
      this.$router.replace('/productMain')
    },
    jumpProductShow (val) {
      if (this.$route.fullPath == '/productShow') {
        bus.$emit('changeTab', val)
      } else {
        this.$router.replace('/productShow')
        this.$route.params.nowTable = val
      }
    }
  }
}
</script>

<style  scoped>
.ant-menu {
  height: 80px;
  display: flex;
}
.ant-menu > li {
  height: 80px;
  line-height: 80px;
  font-size: 24px;
  flex: 1;
  /* margin-right: 70px; */
}
.navigation {
  padding: 0 40px;
}
</style>