<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  // 可以在这里添加微应用加载时的逻辑
  console.log('SubApp mounted')
})

onUnmounted(() => {
  // 可以在这里添加微应用卸载时的逻辑
  console.log('SubApp unmounted')
})
</script>

<template>
  <div class="sub-app-container">
    <!-- 微应用将在这里加载 -->
  </div>
</template>

<style scoped>
.sub-app-container {
  width: 100%;
  height: 100%;
}
</style>
