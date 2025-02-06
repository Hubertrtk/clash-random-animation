<template>
  <button class="buttonr">
    <div class="line oner">
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
    </div>
    <div class="line twor">
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
    </div>
    <div class="line threer">
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
    </div>
    <div class="line fourr">
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
    </div>
    <div class="line fiver">
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
    </div>
    <div class="line sixr">
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
      <div class="round"></div>
    </div>
    <div class="line sevenr">
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
  margin-right: -15px;
}

.button:hover {
  animation: move 2s infinite ease;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(20px);
  }

  100% {
    transform: translateX(0);
  }
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

.twor {
  transform: translateX(-10px);
}

.threer {
  transform: translateX(-20px);
}

.fourr {
  transform: translateX(-30px);
}

.fiver {
  transform: translateX(-20px);
}

.sixr {
  transform: translateX(-10px);
}
</style>
