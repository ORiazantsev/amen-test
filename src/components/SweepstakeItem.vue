<template>
  <div class="sweepstake-item">
    <div class="sweepstake-title">{{ title }}</div>
    <div class="focus">{{ focus }}</div>
    <div class="raised">{{ raised }}</div>
    <div class="entries">{{ entries }}</div>
    <div class="status">
      <Active v-if="status === 'Active'" />
      <Inactive v-if="status === 'Inactive'" />
      <Completed v-if="status === 'Completed'" />
      <Scheduled
        v-if="status === 'Scheduled' || additionalStatus === 'Scheduled'"
      />
      <Draft v-if="additionalStatus === 'Draft'" />
      <WinnerNotified v-if="additionalStatus === 'Winner Notified'" />
    </div>
    <div class="actions">
      <Accept
        v-if="wasButtonClicked == false && status !== 'Inactive'"
        @click.native="onAcceptButtonClick"
      />
      <Decline
        v-if="wasButtonClicked == false && status !== 'Inactive'"
        @click.native="onDeclineButtonClick"
      />
      <Promote
        v-if="wasButtonClicked == true || status === 'Inactive'"
        @click.native="onPromoteButtonClick"
      />
    </div>
    <PromotePopUp
      v-if="isPromotePopUpVisible"
      @closePopUp="closePromotePopUp"
    />
    <div class="start-date">
      {{ moment(startDate).format("L, HH:mm [EST]") }}
    </div>
    <div class="end-date">{{ moment(endDate).format("L, HH:mm [EST]") }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import moment from "moment";
import Active from "@/components/StatusActive.vue";
import Inactive from "@/components/StatusInactive.vue";
import Completed from "@/components/StatusCompleted.vue";
import Scheduled from "@/components/StatusScheduled.vue";
import Draft from "@/components/StatusDraft.vue";
import WinnerNotified from "@/components/StatusWinnerNotified.vue";
import Accept from "@/components/AcceptButton.vue";
import Decline from "@/components/DeclineButton.vue";
import Promote from "@/components/PromoteButton.vue";
import PromotePopUp from "@/components/PromotePopUp.vue";

Vue.prototype.moment = moment;

@Component({
  components: {
    Active,
    Inactive,
    Completed,
    Scheduled,
    Draft,
    WinnerNotified,
    Accept,
    Decline,
    Promote,
    PromotePopUp,
  },
})
export default class SweepstakeItem extends Vue {
  @Prop({ type: String, default: "Sweepstakes Title" }) private title?: string;
  @Prop({ type: String, default: "" }) private focus?: string;
  @Prop({ type: String, default: "" }) private raised?: string;
  @Prop({ type: Number, default: "" }) private entries?: number;
  @Prop({ type: String, default: "" }) private status?: string;
  @Prop({ type: String, default: "" }) private additionalStatus?: string;
  @Prop({ type: String, default: "" }) private startDate?: string;
  @Prop({ type: String, default: "" }) private endDate?: string;

  private wasButtonClicked = false;
  private isPromotePopUpVisible = false;

  private onAcceptButtonClick() {
    this.wasButtonClicked = true;
  }

  private onDeclineButtonClick() {
    this.$emit("onDeclineButtonClick");
  }

  private onPromoteButtonClick() {
    this.isPromotePopUpVisible = true;
  }

  private closePromotePopUp() {
    this.isPromotePopUpVisible = false;
  }
}
</script>

<style lang="scss" scoped>
* {
  color: #63507b;
}

.sweepstake-item {
  height: 55px;
  border: 1px solid #f2eff9;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;

  .sweepstake-title {
    height: 55px;
    width: 220px;
    margin-left: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .focus {
    height: 55px;
    width: 200px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .raised {
    height: 55px;
    width: 120px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .entries {
    height: 55px;
    width: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .status {
    height: 55px;
    width: 220px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .actions {
    height: 55px;
    width: 270px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .start-date {
    height: 55px;
    width: 190px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .end-date {
    height: 55px;
    width: 190px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
