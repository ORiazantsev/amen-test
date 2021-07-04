<template>
  <div class="accept-button">
    <span>Accept</span>
    <img src="../assets/icons/accept.svg" width="16" height="16" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AcceptButton extends Vue {}
</script>

<style lang="scss" scoped>
.accept-button {
  height: 30px;
  width: 95px;
  margin-left: 10px;
  background-color: #71b079;
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

.accept-button:hover {
  background-color: #77b880;
  box-shadow: 0em 0.1em 5px rgba(113, 176, 121, 0.3);
  transition: all 0.4s ease;
}
</style>
