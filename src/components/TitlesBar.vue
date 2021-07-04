<template>
  <div class="titles-bar">
    <div
      v-for="(column, index) in columnsList"
      :key="index"
      class="box"
      :class="column.sectionClass"
    >
      <span class="titles">{{ column.title }}</span>
      <div v-if="column.sortable" class="arrows-box">
        <img
          src="../assets/icons/up-arrow.svg"
          width="15"
          height="15"
          @click="decreasingSortByPickedField(column.id)"
        />
        <img
          src="../assets/icons/down-arrow.svg"
          width="15"
          height="15"
          @click="increasingSortByPickedField(column.id)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class TitlesBar extends Vue {
  private columnsList = [
    { id: "title", title: "Title", sectionClass: "title", sortable: true },
    { id: "focus", title: "Focus", sectionClass: "focus", sortable: true },
    { id: "raised", title: "Raised", sectionClass: "raised", sortable: true },
    {
      id: "entries",
      title: "Entries",
      sectionClass: "entries",
      sortable: true,
    },
    { id: "status", title: "Status", sectionClass: "status", sortable: true },
    {
      id: "actions",
      title: "Actions",
      sectionClass: "actions",
      sortable: false,
    },
    {
      id: "startDate",
      title: "Start date, time",
      sectionClass: "start-date",
      sortable: true,
    },
    {
      id: "endDate",
      title: "End date, time",
      sectionClass: "end-date",
      sortable: true,
    },
  ];

  private decreasingSortByPickedField(fieldName: string) {
    this.$emit("decreasingSortByPickedField", fieldName);
  }

  private increasingSortByPickedField(fieldName: string) {
    this.$emit("increasingSortByPickedField", fieldName);
  }
}
</script>

<style lang="scss" scoped>
.titles-bar {
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #a79fb2;

  .box {
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &.title {
      margin-left: 15px;
    }

    &.focus {
      margin-left: 170px;
    }

    &.raised {
      margin-left: 135px;
    }

    &.entries {
      margin-left: 55px;
    }

    &.status {
      margin-left: 50px;
    }

    &.actions {
      margin-left: 155px;
    }

    &.start-date {
      margin-left: 190px;
    }

    &.end-date {
      margin-left: 70px;
    }

    .titles {
      margin-right: 5px;
      user-select: none;
    }

    .arrows-box {
      height: 22px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      user-select: none;
      align-items: center;

      img {
        margin: -3px;
        cursor: pointer;
      }
    }
  }
}
</style>
