<template>
  <div class="status-scheduled">
    <span>Scheduled</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class StatusScheduled extends Vue {}
</script>

<style lang="scss" scoped>
.status-scheduled {
  height: 20px;
  width: 80px;
  margin-left: 10px;
  background-color: #fef8ec;
  border: 1px solid #ecbc36;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  span {
    color: #ecbc36;
    font-size: 13px;
    font-weight: 500;
  }
}
</style>
