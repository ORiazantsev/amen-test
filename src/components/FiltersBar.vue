<template>
  <div class="filters-bar">
    <div class="filtering-by-status">
      <span>Filters:</span>
      <div
        @click="selectFilter(item.id, item.status)"
        class="status-filter-button"
        :class="{ selected: selectedElement == item.id }"
        v-for="(item, index) in filtersList"
        :key="index"
      >
        {{ item.amount }}
        {{ item.title }}
      </div>
    </div>
    <div class="page-options">
      <div>Showing {{ amountOfShowingitems }} of {{ generalAmoutOfItems }}</div>
      <div class="rows-anount">
        <span>Rows per page:</span>
        <select id="amount-of-items-box" @change="chooseAmountOfRows">
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <img
            src="../assets/icons/down-arrow-rounded.svg"
            width="22"
            height="22"
          />
        </select>
      </div>
      <div class="page-shifter">
        <div
          class="page-shift-button previous"
          @click="onPreviousPageButtonClick"
        >
          <img
            src="../assets/icons/left-arrow-rounded.svg"
            width="16"
            height="16"
          />
        </div>
        {{ currentPage }}
        <div class="page-shift-button next" @click="onNextPageButtonClick">
          <img
            src="../assets/icons/right-arrow-rounded.svg"
            width="16"
            height="16"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class FiltersBar extends Vue {
  @Prop({ type: Number, default: "0" }) private amountOfActiveItems?: number;
  @Prop({ type: Number, default: "0" }) private amountOfInactiveItems?: number;
  @Prop({ type: Number, default: "0" }) private amountOfCompletedItems?: number;
  @Prop({ type: Number, default: "" }) private amountOfShowingitems?: number;
  @Prop({ type: Number, default: "" }) private generalAmoutOfItems?: number;
  @Prop({ type: Number, default: "" }) private itemsPerPage?: number;
  @Prop({ type: Number, default: "" }) private currentPage?: number;

  private selectedElement = 1;

  private filtersList = [
    { id: "1", title: "All", status: null },
    {
      id: "2",
      amount: this.amountOfActiveItems,
      title: "Active",
      status: "Active",
    },
    {
      id: "3",
      amount: this.amountOfInactiveItems,
      title: "Inactive",
      status: "Inactive",
    },
    {
      id: "4",
      amount: this.amountOfCompletedItems,
      title: "Completed",
      status: "Completed",
    },
  ];

  private selectFilter(itemId: number, status: string | null) {
    this.$emit("selectFilter", status);
    this.selectedElement = itemId;
  }

  private chooseAmountOfRows() {
    let amount = (
      document.getElementById("amount-of-items-box") as HTMLInputElement
    ).value;
    this.$emit("chooseAmountOfRows", Number(amount));
  }

  private onPreviousPageButtonClick() {
    this.$emit("onPreviousPageButtonClick");
  }

  private onNextPageButtonClick() {
    this.$emit("onNextPageButtonClick");
  }
}
</script>

<style lang="scss" scoped>
.filters-bar {
  height: 50px;
  font-size: 14px;
  color: #2c3551;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 25px;

  .filtering-by-status {
    span {
      margin-right: 15px;
    }

    height: 50px;
    width: 420px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .status-filter-button {
      padding: 0px 15px;
      cursor: pointer;
    }

    .selected {
      height: 40px;
      border-radius: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0em 0.6em 12px #0000003f;
      user-select: none;
      cursor: pointer;
    }
  }

  .page-options {
    height: 50px;
    width: 420px;
    font-size: 12px;
    font-weight: 100;
    color: #a79fb2;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 240px;

    .rows-anount {
      height: 20px;
      width: 180px;
      display: flex;
      flex-direction: row;
      align-items: center;

      #amount-of-items-box {
        height: 20px;
        width: 50px;
        color: #a79fb2;
        font-size: 14px;
        font-weight: 700;
        margin-left: 8px;
        padding-left: 5px;
        border: 1px solid #a79fb2;
        border-radius: 30px;
        cursor: pointer;
        user-select: none;
      }
    }

    .page-shifter {
      height: 25px;
      width: 80px;
      font-size: 14px;
      font-weight: 700;
      margin-right: 10px;
      color: #635274;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      .page-shift-button {
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background-color: #f2eff9;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
      }
    }
  }
}
</style>
