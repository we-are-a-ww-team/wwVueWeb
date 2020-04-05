<template>
  <div>
    <div>
      <!-- 导航栏 -->
      <navigation></navigation>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navigation from './navigation'
export default {
  components: {
    navigation,
  }
}
</script>