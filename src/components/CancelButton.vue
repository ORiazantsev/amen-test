<template>
  <div class="cancel-button">
    <span>Cancel</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CancelButton extends Vue {}
</script>

<style lang="scss" scoped>
.cancel-button {
  height: 45px;
  width: 140px;
  background-color: #f1eef9;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -0.3em 0.3em 10px rgb(241, 238, 249, 0.5);
  user-select: none;
  cursor: pointer;

  span {
    color: #635274;
    font-size: 14px;
    font-weight: 600;
  }
}

.cancel-button:hover {
  background-color: #f5f2fd;
  box-shadow: 0em 0.3em 10px rgba(241, 219, 158, 0.3);
  transition: all 0.4s ease;
}
</style>
