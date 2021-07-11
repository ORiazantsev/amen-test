<template>
  <div class="main">
    <div class="sweepstakes-table">
      <span class="main-title">Sweepstakes</span>
      <FiltersBar
        :amountOfActiveItems="amountOfActiveItems.length"
        :amountOfInactiveItems="amountOfInactiveItems.length"
        :amountOfCompletedItems="amountOfCompletedItems.length"
        :amountOfShowingitems="currentPageList.length"
        :generalAmoutOfItems="processedItems.length"
        :itemsPerPage="itemsPerPage"
        :currentPage="currentPage"
        @selectFilter="selectFilter"
        @chooseAmountOfRows="chooseAmountOfRows"
        @onPreviousPageButtonClick="onPreviousPageButtonClick"
        @onNextPageButtonClick="onNextPageButtonClick"
      />
      <div class="main-section">
        <TitlesBar
          @decreasingSortByPickedField="decreasingSortByPickedField"
          @increasingSortByPickedField="increasingSortByPickedField"
        />
        <div class="sweepstakes-list">
          <SweepstakeItem
            v-for="(item, index) in currentPageList"
            :key="index"
            :title="item.title"
            :focus="item.focus"
            :raised="item.raised"
            :entries="item.entries"
            :status="item.status"
            :additionalStatus="item.additionalStatus"
            :startDate="item.startDate"
            :endDate="item.endDate"
            @onDeclineButtonClick="onDeclineButtonClick(item.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { sweepstakeItem } from "@/interfaces/sweepstakeItem.interface";
import FiltersBar from "@/components/FiltersBar.vue";
import SweepstakeItem from "@/components/SweepstakeItem.vue";
import TitlesBar from "@/components/TitlesBar.vue";

@Component({
  components: {
    FiltersBar,
    SweepstakeItem,
    TitlesBar,
  },
})
export default class Main extends Vue {
  //API EMULATION
  private sweepstakesList: sweepstakeItem[] = [
    {
      id: 0,
      title: "Sweepstakes Title",
      focus: "Contraceptive Health",
      raised: "$5,000",
      entries: 11,
      status: "Active",
      additionalStatus: "Winner Notified",
      startDate: "2021-05-21T10:58:51",
      endDate: "2021-06-01T18:03:27",
    },
    {
      id: 1,
      title: "Sweepstakes Title",
      focus: "Childcare",
      raised: "$4,000",
      entries: 10,
      status: "Active",
      startDate: "2021-03-06T08:41:36",
      endDate: "2021-07-13T19:32:47",
    },
    {
      id: 2,
      title: "Sweepstakes Title",
      focus: "Education",
      raised: "$3,000",
      entries: 12,
      status: "Inactive",
      additionalStatus: "Scheduled",
      startDate: "2020-01-12T14:11:33",
      endDate: "2020-03-27T11:47:16",
    },
    {
      id: 3,
      title: "Sweepstakes Title",
      focus: "Medical Infrastructure",
      raised: "$6,000",
      entries: 14,
      status: "Completed",
      startDate: "2021-05-21T10:58:51",
      endDate: "2021-06-01T18:03:27",
    },
    {
      id: 4,
      title: "Sweepstakes Title",
      focus: "Food Access",
      raised: "$2,000",
      entries: 10,
      status: "Inactive",
      additionalStatus: "Draft",
      startDate: "2021-03-06T08:41:36",
      endDate: "2021-07-13T19:32:47",
    },
    {
      id: 5,
      title: "Sweepstakes Title",
      focus: "Clothing Drive",
      raised: "$6,000",
      entries: 16,
      status: "Inactive",
      additionalStatus: "Scheduled",
      startDate: "2020-01-12T14:11:33",
      endDate: "2020-03-27T11:47:16",
    },
    {
      id: 6,
      title: "Sweepstakes Title",
      focus: "Child protection",
      raised: "$5,000",
      entries: 18,
      status: "Active",
      startDate: "2021-05-21T10:58:51",
      endDate: "2021-06-01T18:03:27",
    },
    {
      id: 7,
      title: "Sweepstakes Title",
      focus: "Vaccines",
      raised: "$8,000",
      entries: 14,
      status: "Completed",
      startDate: "2021-03-06T08:41:36",
      endDate: "2021-07-13T19:32:47",
    },
    {
      id: 8,
      title: "Sweepstakes Title",
      focus: "Clothing Drive",
      raised: "$6,000",
      entries: 16,
      status: "Inactive",
      startDate: "2020-01-12T14:11:33",
      endDate: "2020-03-27T11:47:16",
    },
    {
      id: 9,
      title: "Sweepstakes Title",
      focus: "Water Independence",
      raised: "$5,000",
      entries: 13,
      status: "Active",
      additionalStatus: "Winner Notified",
      startDate: "2021-03-06T08:41:36",
      endDate: "2021-07-13T19:32:47",
    },
    {
      id: 10,
      title: "Sweepstakes Title",
      focus: "Prenatal Health",
      raised: "$3,000",
      entries: 11,
      status: "Scheduled",
      startDate: "2021-03-06T08:41:36",
      endDate: "2021-07-13T19:32:47",
    },
    {
      id: 11,
      title: "Sweepstakes Title",
      focus: "Medical Infrastructure",
      raised: "$7,000",
      entries: 13,
      status: "Completed",
      startDate: "2021-05-21T10:58:51",
      endDate: "2021-06-01T18:03:27",
    },
    {
      id: 12,
      title: "Sweepstakes Title",
      focus: "Food Access",
      raised: "$5,000",
      entries: 14,
      status: "Inactive",
      additionalStatus: "Draft",
      startDate: "2021-03-06T08:41:36",
      endDate: "2021-07-13T19:32:47",
    },
    {
      id: 13,
      title: "Sweepstakes Title",
      focus: "Clothing Drive",
      raised: "$9,000",
      entries: 10,
      status: "Inactive",
      additionalStatus: "Scheduled",
      startDate: "2020-01-12T14:11:33",
      endDate: "2020-03-27T11:47:16",
    },
    {
      id: 14,
      title: "Sweepstakes Title",
      focus: "Vaccines",
      raised: "$3,000",
      entries: 10,
      status: "Completed",
      startDate: "2021-05-21T10:58:51",
      endDate: "2021-06-01T18:03:27",
    },
    {
      id: 15,
      title: "Sweepstakes Title",
      focus: "Water Independence",
      raised: "$2,000",
      entries: 16,
      status: "Active",
      startDate: "2021-05-21T10:58:51",
      endDate: "2021-06-01T18:03:27",
    },
    {
      id: 16,
      title: "Sweepstakes Title",
      focus: "Clothing Drive",
      raised: "$6,000",
      entries: 16,
      status: "Inactive",
      startDate: "2020-01-12T14:11:33",
      endDate: "2020-03-27T11:47:16",
    },
    {
      id: 17,
      title: "Sweepstakes Title",
      focus: "Prenatal Health",
      raised: "$5,000",
      entries: 18,
      status: "Scheduled",
      startDate: "2021-05-21T10:58:51",
      endDate: "2021-06-01T18:03:27",
    },
    {
      id: 18,
      title: "Sweepstakes Title",
      focus: "Childcare",
      raised: "$4,000",
      entries: 17,
      status: "Completed",
      startDate: "2021-03-06T08:41:36",
      endDate: "2021-07-13T19:32:47",
    },
    {
      id: 19,
      title: "Sweepstakes Title",
      focus: "Prenatal Health",
      raised: "$3,000",
      entries: 11,
      status: "Scheduled",
      startDate: "2021-03-06T08:41:36",
      endDate: "2021-07-13T19:32:47",
    },
    {
      id: 20,
      title: "Sweepstakes Title",
      focus: "Childcare",
      raised: "$5,000",
      entries: 10,
      status: "Completed",
      startDate: "2020-01-12T14:11:33",
      endDate: "2020-03-27T11:47:16",
    },
    {
      id: 21,
      title: "Sweepstakes Title",
      focus: "Medical Infrastructure",
      raised: "$7,000",
      entries: 13,
      status: "Completed",
      startDate: "2021-05-21T10:58:51",
      endDate: "2021-06-01T18:03:27",
    },
    {
      id: 22,
      title: "Sweepstakes Title",
      focus: "Food Access",
      raised: "$5,000",
      entries: 14,
      status: "Inactive",
      additionalStatus: "Draft",
      startDate: "2021-03-06T08:41:36",
      endDate: "2021-07-13T19:32:47",
    },
  ];

  private itemsPerPage = 5;
  private currentPage = 1;
  private sortByField: string | null = null;
  private sortType = "increasingSort";
  private processedItems = this.sweepstakesList;

  private get currentPageList() {
    if (this.filterByStatus) {
      this.processedItems = this.sweepstakesList.filter(
        (item) => item.status === this.filterByStatus
      );
    } else {
      this.processedItems = this.sweepstakesList;
    }

    if (this.sortByField) {
      if (this.sortType === "increasingSort") {
        this.increasingSort();
      } else {
        this.decreasingSort();
      }
    }

    let result = this.processedItems.slice(
      this.firstPageItemIndex,
      this.lastPageItemIndex
    );
    return result;
  }

  private get filterByStatus() {
    return this.$store.state.sweepstakes.status.status;
  }

  private get firstPageItemIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  private get lastPageItemIndex() {
    return this.firstPageItemIndex + this.itemsPerPage;
  }

  private get amountOfPages() {
    return Math.ceil(this.processedItems.length / this.itemsPerPage);
  }

  private get amountOfActiveItems() {
    return this.sweepstakesList.filter((item) => item.status === "Active");
  }

  private get amountOfInactiveItems() {
    return this.sweepstakesList.filter((item) => item.status === "Inactive");
  }

  private get amountOfCompletedItems() {
    return this.sweepstakesList.filter((item) => item.status === "Completed");
  }

  private selectFilter(status: string | null) {
    this.$store.dispatch("sweepstakes/getStatusOfItem", status);
    this.currentPage = 1;
  }

  private decreasingSort() {
    this.processedItems = this.processedItems.sort((a, b) => {
      // @ts-expect-error: Type 'null' can be used as an index type
      if (a[this.sortByField] < b[this.sortByField]) {
        return 1;
      }
      // @ts-expect-error: Type 'null' can be used as an index type
      if (a[this.sortByField] > b[this.sortByField]) {
        return -1;
      }
      return 0;
    });
  }

  private increasingSort() {
    this.processedItems = this.processedItems.sort((a, b) => {
      // @ts-expect-error: Type 'null' can be used as an index type
      if (a[this.sortByField] > b[this.sortByField]) {
        return 1;
      }
      // @ts-expect-error: Type 'null' can be used as an index type
      if (a[this.sortByField] < b[this.sortByField]) {
        return -1;
      }
      return 0;
    });
  }

  private chooseAmountOfRows(itemsPerPage: number) {
    this.itemsPerPage = itemsPerPage;
  }

  private decreasingSortByPickedField(field: string) {
    this.sortType = "decreasingSort";
    this.sortByField = field;
    this.currentPage = 1;
  }

  private increasingSortByPickedField(field: string) {
    this.sortType = "increasingSort";
    this.sortByField = field;
    this.currentPage = 1;
  }

  private onPreviousPageButtonClick() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  private onNextPageButtonClick() {
    if (this.currentPage < this.amountOfPages) {
      this.currentPage++;
    }
  }

  private onDeclineButtonClick(itemId: number) {
    // API DELETE REQUEST EMULATION
    let sweepstakesListCopy = [...this.sweepstakesList];

    let indexOfDiclinedItem = sweepstakesListCopy.findIndex(
      function checkNumber(element) {
        return element.id === itemId;
      }
    );

    sweepstakesListCopy.splice(indexOfDiclinedItem, 1);
    this.sweepstakesList = [...sweepstakesListCopy];
  }
}
</script>

<style lang="scss" scoped>
.sweepstakes-table {
  display: flex;
  flex-direction: column;

  .main-title {
    height: 90px;
    font-size: 26px;
    font-weight: 700;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
    user-select: none;
  }

  .main-section {
    border: 1px solid #f2eff9;
    border-radius: 10px;
    font-size: 14px;
    margin: 20px;
    padding: 0px 20px;
  }
}
</style>
