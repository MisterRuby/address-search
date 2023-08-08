<script setup lang="ts">
import { reactive, ref } from "vue";
import AddressPopup from "@/components/AddressPopup.vue";
import { Post } from "@/type/Post";

const showPost = ref(false);
const address = reactive({
  depth1: "",
  depth2: "",
  bcode: "",
  zonecode: "",
});

const showPostPopup = () => {
  showPost.value = true;
};

const completePost = (post: Post) => {
  address.depth1 = post.address;
  address.depth2 = "";
  address.zonecode = post.zonecode;
  address.bcode = post.bcode;

  showPost.value = false;
};

const closePostPopup = () => {
  showPost.value = false;
};

const alertAddress = () => {
  alert(
    `주소 : ${address.depth1} ${address.depth2} / ${address.zonecode} / ${address.bcode}`
  );
};
</script>

<template>
  <div class="container">
    <div>주소 검색</div>
    <input
      type="text"
      class="address-input"
      v-model="address.depth1"
      @click="showPostPopup"
      readonly
    />
    <input type="text" class="address-input" v-model="address.depth2" />
    <button type="submit" @click="alertAddress">주소 확인</button>
  </div>
  <AddressPopup
    v-if="showPost"
    @complete-post="completePost"
    @close-post-popup="closePostPopup"
  />
</template>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container input,
.container button {
  width: 200px;
  height: 30px;
  margin-top: 5px;
}
</style>
