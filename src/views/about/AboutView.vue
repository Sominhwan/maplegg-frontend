<template>
  <v-sheet class="fill-height pb-15" color="#F4F7FA">
    <div>about</div>
  <div class="item-grade-container">
    <div class="item-grade-octagon">
    </div>
    <div class="item-grade-small-octagon">
      <div class="text">ㅋ</div>
    </div>
  </div>
  </v-sheet>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .item-grade-container {
      position: relative;
    }
    .item-grade-octagon {
      width: 50px;
      height: 50px;
      background-color: #3498db;
      position: relative;
      clip-path: polygon(29% 0%, 71% 0%, 100% 29%, 100% 71%, 71% 100%, 29% 100%, 0% 71%, 0% 29%);
    }
    .item-grade-small-octagon {
      position: absolute;
      background: black;
      width: 44px;
      height: 44px;
      left: 3px;
      top: 2.5px;
      clip-path: polygon(29% 0%, 71% 0%, 100% 29%, 100% 71%, 71% 100%, 29% 100%, 0% 71%, 0% 29%);
    }
    .item-grade-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 16px;
    }
</style>