<template>
  <div class="mask-wrpper">
    <div class="first-border"></div>
    <div class="secend-border"></div>
    <div class="third-border"></div>
  </div>
</template>
<style lang="css">
.first-border {
  width: 100%;
  height: 33%;
  /* border: 2px solid red; */
  backdrop-filter: blur(2px);
}
.secend-border {
  width: 100%;
  height: 33%;
  border: 2px solid #ffcc00;
  border-radius: 10px;
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
