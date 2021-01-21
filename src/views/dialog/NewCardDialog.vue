<template>
  <div class="dialog">
    <div class="dialog-card">
      <div class="dialog-card__header">
        <h4>New Task</h4>
      </div>
      <div class="dialog-card__content">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          @keypress.enter="addColumn()"
          v-model="card.title"
        />
      </div>
      <div class="dialog-card__actions">
        <button class="medium" @click="addCard()">
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
  props: {
    column: { type: Object, default: () => {} },
  },
  data: () => ({
    card: {
      title: "",
    },
  }),
  methods: {
    ...mapActions({
      newCard: "task/newCard",
    }),
    addCard() {
      if (this.card.title == "") {
        alert("Please enter Title for Task");
        return;
      }
      this.newCard({ card: this.card, column: this.column });
      this.$emit("close");
    },
  },
};
</script>
