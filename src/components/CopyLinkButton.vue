<template>
  <div class="copy-link-button" v-clipboard="inputValue">
    <img src="../assets/icons/link.svg" width="18" height="18" />
    <span>Copy link</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CopyLinkButton extends Vue {
  @Prop({ type: String, default: "" }) private inputValue?: string;
}
</script>

<style lang="scss" scoped>
.copy-link-button {
  height: 45px;
  width: 140px;
  background-color: #edbc33;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -0.3em 0.3em 10px rgba(241, 219, 158, 0.9);
  user-select: none;
  cursor: pointer;

  img {
    transform: rotate(-45deg);
    margin-right: 10px;
  }

  span {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
  }
}

.copy-link-button:hover {
  background-color: #fac635;
  box-shadow: 0em 0.3em 10px rgba(241, 219, 158, 0.7);
  transition: all 0.4s ease;
}
</style>
