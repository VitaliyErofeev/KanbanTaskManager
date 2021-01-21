<template>
  <div class="column" :id="colId">
    <div class="column__header">
      <div class="column__title">
        {{ column.name }}
      </div>
      <div class="column__actions">
        <button class="icon" title="Add Card" @click="openAddCardDialog()">
          +
        </button>
      </div>
    </div>
    <div class="column__content">
      <card v-for="item in column.cards" :key="item.description" :card="item">
      </card>
    </div>
    <template v-if="cardDialog">
      <card-dialog :column="column" @close="cardDialog = false"></card-dialog>
    </template>
  </div>
</template>

<script>
import cardDialog from "../views/dialog/NewCardDialog";
import card from "./../components/Card";

export default {
  components: {
    card,
    cardDialog,
  },
  data: () => ({
    cardDialog: false,
  }),
  props: {
    column: { Type: Object, default: () => {} },
    colId: { Type: Number, default: 0 },
  },
  methods: {
    openAddCardDialog() {
      this.cardDialog = true;
    },
  },
};
</script>
