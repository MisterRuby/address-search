<script setup lang="ts">
import { VueDaumPostcode } from "vue-daum-postcode";
</script>

<template>
  <div class="post-popup">
    <VueDaumPostcode class="post-box" />
  </div>
</template>

<style scoped>
.post-popup {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
}

.post-box {
  width: 700px;
  max-height: 500px;
  overflow-y: scroll;
}

.post-box * {
  overflow: hidden;
}
</style>
