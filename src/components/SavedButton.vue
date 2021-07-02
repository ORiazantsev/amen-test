<template>
  <div class="saved-button">
    <span>Saved!</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SavedButon extends Vue {}
</script>

<style lang="scss" scoped>
.saved-button {
  height: 45px;
  width: 140px;
  background-color: #71b079;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -0.3em 0.3em 10px rgb(113, 176, 121, 0.5);
  user-select: none;
  cursor: pointer;

  span {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
