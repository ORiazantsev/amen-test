<template>
  <div class="status-winner-notified">
    <span>Winner notified</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class StatusWinnerNotified extends Vue {}
</script>

<style lang="scss" scoped>
.status-winner-notified {
  height: 20px;
  width: 100px;
  margin-left: 10px;
  background-color: #edf8f9;
  border: 1px solid #6eb6cf;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  span {
    color: #6eb6cf;
    font-size: 13px;
    font-weight: 500;
  }
}
</style>
