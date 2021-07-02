<template>
  <div class="status-active">
    <span>Active</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class StatusActive extends Vue {}
</script>

<style lang="scss" scoped>
.status-active {
  height: 20px;
  width: 50px;
  margin-left: 10px;
  background-color: #eff9f0;
  border: 1px solid #71b079;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  span {
    color: #71b079;
    font-size: 13px;
    font-weight: 500;
  }
}
</style>
