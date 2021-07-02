<template>
  <div class="status-inactive">
    <span>Inactive</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class StatusInactive extends Vue {}
</script>

<style lang="scss" scoped>
.status-inactive {
  height: 20px;
  width: 60px;
  margin-left: 10px;
  background-color: #fbeeeb;
  border: 1px solid #d3574b;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  span {
    color: #d3574b;
    font-size: 13px;
    font-weight: 500;
  }
}
</style>
