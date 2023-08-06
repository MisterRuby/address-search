<script setup lang="ts">
import { ref } from "vue";
import AddressPopup from "@/components/AddressPopup.vue";

const showPost = ref(false);
const showPostPopup = () => {
  showPost.value = true;
};
</script>

<template>
  <div class="container">
    <div>주소 검색</div>
    <input class="address-search" type="text" @click="showPostPopup" readonly />
  </div>
  <AddressPopup v-if="showPost" />
</template>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.address-search {
  width: 200px;
  height: 30px;
}
</style>
