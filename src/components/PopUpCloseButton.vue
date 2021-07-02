<template>
  <div class="pop-up-close-button">
    <img src="../assets/icons/pop-up-close.svg" width="26" height="26" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PopUpCloseButton extends Vue {}
</script>

<style lang="scss" scoped>
.pop-up-close-button {
  height: 40px;
  width: 40px;
  border: 2px solid #f1eef9;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
}
</style>
