<template>
  <div class="status-completed">
    <span>Completed</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class StatusCompleted extends Vue {}
</script>

<style lang="scss" scoped>
.status-completed {
  height: 20px;
  width: 80px;
  margin-left: 10px;
  background-color: #ebf0f5;
  border: 1px solid #99afcf;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  span {
    color: #2d5b9d;
    font-size: 13px;
    font-weight: 500;
  }
}
</style>
