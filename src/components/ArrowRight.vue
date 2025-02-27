<template>
  <button class="buttonr">
    <div class="line one">
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
    </div>
    <div class="line two">
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
    </div>
    <div class="line three">
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
    </div>
    <div class="line four">
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
    </div>
    <div class="line five">
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
    </div>
    <div class="line six">
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
    </div>
    <div class="line seven">
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
    </div>
  </button>
</template>
<style scoped>
.buttonr {
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  width: 70px;
  gap: 4px;
  transform: rotate(180deg);
  margin-right: 2px;
  position: absolute;
  right: 0;
}

.round {
  width: 6px;
  height: 6px;
  background: #3da9fc;
  border-radius: 50%;
}

.line {
  display: flex;
  gap: 4px;
}

.two {
  transform: translateX(10px);
}

.three {
  transform: translateX(20px);
}

.four {
  transform: translateX(30px);
}

.five {
  transform: translateX(20px);
}

.six {
  transform: translateX(10px);
}
</style>
