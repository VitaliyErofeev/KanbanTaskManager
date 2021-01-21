<template>
  <div class="dialog">
    <div class="dialog-card">
      <div class="dialog-card__header">
        <h4>New Stage</h4>
      </div>
      <div class="dialog-card__content">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          @keypress.enter="addStage()"
          v-model="column.name"
        />
      </div>
      <div class="dialog-card__actions">
        <button class="medium" @click="addStage()">
          Add
        </button>
        <button class="medium" @click="$emit('close')">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    column: {
      name: "",
      cards: [],
    },
  }),
  methods: {
    ...mapActions({
      newColumn: "task/newColumn",
    }),
    addStage() {
      if (this.column.name == "") {
        alert("Please enter name for column");
        return;
      }
      this.newColumn(this.column);
      this.$emit("close");
    },
  },
};
</script>
