<template>
  <div class="decline-button">
    <span>Decline</span>
    <img src="../assets/icons/decline.svg" width="16" height="16" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DeclineButton extends Vue {}
</script>

<style lang="scss" scoped>
.decline-button {
  height: 30px;
  width: 95px;
  margin-left: 10px;
  background-color: #d3574b;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;

  img {
    margin-left: 5px;
  }

  span {
    color: #ffffff;
    font-size: 13px;
    font-weight: 500;
  }
}

.decline-button:hover {
  background-color: #e25b4f;
  box-shadow: 0em 0.1em 5px rgba(211, 86, 75, 0.3);
  transition: all 0.4s ease;
}
</style>
