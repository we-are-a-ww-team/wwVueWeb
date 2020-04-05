<template>
  <div class="productShow">
    <section class="met_section">
      <div class="container">
        <!-- 左侧导航栏 -->
        <aside>
          <section class="met_aside">
            <h2>PRODUCTS<span class="sidebaran glyphicon glyphicon-th-list"></span></h2>
            <div class="met_aside_list">
              <dl class="list-none navnow">
                <dt id="part2_88"
                    :class="tableNow=='Gun'? 'on':''">
                  <div @click="changeTab('Gun')"
                       class="zm">
                    <span>Massage Gun</span></div>
                </dt>
              </dl>
              <dl class="list-none navnow">
                <dt :class="tableNow=='hairRemove'? 'on':''"
                    id="part2_89">
                  <div @click="changeTab('hairRemove')"
                       class="zm">
                    <span>IPL Hair Removal </span></div>
                </dt>
              </dl>
              <dl class="list-none navnow">
                <dt :class="tableNow=='toothBrush'? 'on':''"
                    id="part2_90">
                  <div @click="changeTab('toothBrush')"
                       class="zm">
                    <span>Electronic Toothbrush</span></div>
                </dt>
              </dl>
              <dl class="list-none navnow">

                <dt :class="tableNow=='blackHead'? 'on':''"
                    id="part2_104">
                  <div @click="changeTab('blackHead')"
                       class="zm">
                    <span>Blackhead Remover</span></div>
                </dt>
              </dl>
              <dl class="list-none navnow">
                <dt :class="tableNow=='faceCleaning'? 'on':''"
                    id="part2_118">
                  <div @click="changeTab('faceCleaning')"
                       class="zm">
                    <span>Facial Cleansing Brush</span></div>
                </dt>
              </dl>
              <dl class="list-none navnow">
                <dt id="part2_118">
                  <div @click="toRouter"
                       class="zm">
                    <span>Accessories</span></div>
                </dt>
              </dl>
              <div class="met_clear"></div>
            </div>
          </section>

        </aside>
        <!-- 右侧详情 -->
        <Gun v-if="tableNow == 'Gun'" />
        <hairRemove v-if="tableNow == 'hairRemove'" />
        <toothBrush v-if="tableNow == 'toothBrush'" />
        <blackHead v-if="tableNow == 'blackHead'" />
        <faceCleaning v-if="tableNow == 'faceCleaning'" />

        <div class="met_clear"></div>
      </div>
    </section>

  </div>
</template>
<script>
import Gun from './tableProduct/GunShowList'
import hairRemove from './tableProduct/hairRemove'
import toothBrush from './tableProduct/toothBrush'
import blackHead from './tableProduct/blackHead'
import faceCleaning from './tableProduct/faceCleaning'
import bus from '../bus.js'
export default {
  components: {
    Gun,
    hairRemove,
    toothBrush,
    blackHead,
    faceCleaning
  },
  data () {
    return {
      tabPosition: 'left',
      tabIndex: 'user',
      tableNow: 'Gun'
    }
  },
  mounted () {
    bus.$on('changeTab', item => {
      this.changeTab(item)
    })
    var tab = this.$route.params.tableNow
    if (tab) {
      this.tableNow = tab
    } else {
      this.tableNow = 'Gun'
    }
  },
  methods: {
    changeTab (val) {
      this.tableNow = val
    },
    toRouter () {
      this.$router.push('isBuliding')
    }
  }
};
</script>

<style  scoped>
.productShow {
  position: relative;
  padding: 30px 0 50px;
  background-color: #eeeeee;
}
.productShow > div {
  width: 90%;
  margin: 0 auto;
  display: flex;
}
.productShow >>> #tab-0 {
  font-size: 20px;
}
.leftTable {
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-bottom: 20px;
  height: 600px;
  text-align: left;
  width: 228px;
}
.leftTable li:first-child {
  padding: 0 20px;
  height: 80px;
  font-size: 18px;
  line-height: 80px;
  position: relative;
}
.met_aside_list > dl:hover {
  cursor: pointer;
  background: #efefef;
}
.container {
  width: 100%;
  padding: 0 40px;
}
</style>