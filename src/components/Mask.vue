<script setup lang="ts">
import ArrowLeft from './ArrowLeft.vue'
import ArrowRight from './ArrowRight.vue'
</script>

<template>
  <div class="mask-wrpper">
    <div class="first-border"></div>
    <div class="secend-border">
      <!-- <div class="left-cover"></div>
      <div class="right-cover"></div>
      <div class="bottom-cover"></div>
      <div class="top-cover"></div> -->

      <ArrowLeft />
      <ArrowRight />
    </div>
    <div class="third-border"></div>
  </div>
</template>
<style lang="css">
.left-cover .right-cover .bottom-cover .top-cover {
  position: absolute;
  z-index: 999;
}
.left-cover {
  position: absolute;
  background-color: rgb(0, 0, 0);

  top: 0;
  bottom: 0;
  left: 5px;
  width: 88px;
  border-right: 2px solid rgba(250, 250, 250, 0.055);
}
.right-cover {
  position: absolute;
  background-color: rgb(0, 0, 0);

  top: 0;
  bottom: 0;
  right: 5px;
  width: 88px;
  border-left: 2px solid rgba(250, 250, 250, 0.055);
}
.bottom-cover {
  position: absolute;
  background-color: rgb(0, 0, 0);

  top: 0;
  left: 5px;
  right: 5px;
  height: 20px;
  border-bottom: 2px solid rgba(250, 250, 250, 0.055);
}
.top-cover {
  position: absolute;
  background-color: rgb(0, 0, 0);
  bottom: 1px;
  left: 5px;
  right: 5px;
  height: 20px;
  border-top: 2px solid rgba(250, 250, 250, 0.055);
}
.first-border {
  width: 100%;
  height: 33%;
  backdrop-filter: blur(2px);
}
.secend-border {
  width: 103%;
  height: 33%;
  border: 2px solid #fffe00;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: black; */
  z-index: -1;
  position: relative;
}
.third-border {
  width: 100%;
  height: 33%;
  /* border: 2px solid red; */
  backdrop-filter: blur(2px);
}
.mask-wrpper {
  /* border: 2px solid red; */
  height: 432px;
  width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
