<template>
  <div class="container">
    <div class="wrapper">
      <div class="line"></div>
      <div class="glass"></div>
    </div>
  </div>
</template>
<style scoped>
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: black; */
}
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
.line {
  border-bottom: 1px dotted #ffeb00;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  z-index: 10;
}
.glass {
  position: absolute;
  top: calc(50% - 450px / 2);
  bottom: calc(50% - 450px / 2);
  left: calc(50% - 550px / 2);
  right: calc(50% - 550px / 2);
  z-index: 1;
  border: 2px solid orange;
}
</style>
