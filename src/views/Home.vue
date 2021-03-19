<template>
  <div class="task-page">
    <div class="toolbar">
      <button class="medium" @click="stageAddDialog = true">New Stage</button>
      <button class="medium" @click="stageAddDialog = true">New Task</button>
    </div>
    <div class="column-container">
      <column
        v-for="(item, index) in columns"
        :key="index"
        :column="item"
        :colId="index"
      >
      </column>
    </div>
    <template v-if="stageAddDialog">
      <new-stage-dialog
        @close="stageAddDialog = false"
        @add="addStage($event)"
      />
    </template>
  </div>
</template>

<script>
import column from "./../components/Column";
import newStageDialog from "./dialog/NewColumnDialog";
import { mapGetters } from "vuex";

export default {
  components: {
    newStageDialog,
    column,
  },
  data: () => ({
    stageAddDialog: false,
  }),
  computed: {
    ...mapGetters({
      columns: "task/getColumns",
      tempCard: "task/getTempCard",
    }),
  },
  methods: {
    newTask() {},
  },
};
</script>
