<template>
  <div class="pop-up-wrapper">
    <div class="promote-pop-up">
      <Close class="close-pop-up" @click.native="closePopUp" />
      <span class="pop-up-title">Public shareable link</span>
      <div class="link-box">
        {{ inputValue }}
      </div>
      <div class="buttons-box">
        <Cancel @click.native="closePopUp" />
        <Copy
          v-if="isClicked == false"
          :inputValue="this.inputValue"
          @click.native="pressCopyButton(true)"
        />
        <Saved v-if="isClicked == true" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Close from "@/components/PopUpCloseButton.vue";
import Cancel from "@/components/CancelButton.vue";
import Copy from "@/components/CopyLinkButton.vue";
import Saved from "@/components/SavedButton.vue";

@Component({
  components: {
    Close,
    Cancel,
    Copy,
    Saved,
  },
})
export default class PromotePopUp extends Vue {
  private isClicked = false;
  public inputValue = "uncommongood.com/sweepstakes";

  private pressCopyButton(status: boolean) {
    this.isClicked = status;
  }
  private closePopUp() {
    this.$emit("closePopUp");
  }
}
</script>

<style lang="scss" scoped>
.pop-up-wrapper {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #0e0c134f;
  display: flex;
  justify-content: center;
  align-items: center;

  .promote-pop-up {
    top: 100px;
    height: 270px;
    width: 520px;
    color: #635274;
    background-color: #fffbfa;
    box-shadow: 0em 0em 10px rgba(156, 156, 156, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .close-pop-up {
      position: absolute;
      margin-left: 460px;
      margin-bottom: 210px;
    }

    .pop-up-title {
      position: absolute;
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 150px;
      user-select: none;
    }

    .link-box {
      height: 45px;
      width: 300px;
      font-size: 14px;
      font-weight: 600;
      background-color: #ffffff;
      border: 1px solid #e4e4e4ad;
      border-radius: 30px;
      margin: 30px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .buttons-box {
      width: 300px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
