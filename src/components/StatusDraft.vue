<template>
  <div class="status-draft">
    <span>Draft</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class StatusDraft extends Vue {}
</script>

<style lang="scss" scoped>
.status-draft {
  height: 20px;
  width: 45px;
  margin-left: 10px;
  background-color: #f6f4f9;
  border: 1px solid #9c94aa;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  span {
    color: #9c94aa;
    font-size: 13px;
    font-weight: 500;
  }
}
</style>
