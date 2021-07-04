<template>
  <div class="promote-button">
    <span>Promote</span>
    <img src="../assets/icons/promote.svg" width="16" height="16" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PromoteButton extends Vue {}
</script>

<style lang="scss" scoped>
.promote-button {
  height: 30px;
  width: 100px;
  margin-left: 10px;
  background-color: #6eb6cf;
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

.promote-button:hover {
  background-color: #72bed8;
  box-shadow: 0em 0.1em 5px rgba(110, 183, 207, 0.3);
  transition: all 0.4s ease;
}
</style>
