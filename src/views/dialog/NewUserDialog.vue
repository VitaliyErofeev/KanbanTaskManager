<template>
  <div class="dialog">
    <div class="dialog-card">
      <div class="dialog-card__header">
        <h4>New User</h4>
      </div>
      <div class="dialog-card__content">
        <label for="fName">Full Name</label>
        <input
          type="text"
          ref="fName"
          name="fName"
          @keypress.enter="addColumn()"
          v-model="user.fullName"
        />
        <label for="fName">Age</label>
        <input
          type="text"
          name="fName"
          @keypress.enter="addColumn()"
          v-model="user.age"
        />
        <label for="fName">Position</label>
        <input
          type="text"
          name="fName"
          @keypress.enter="addColumn()"
          v-model="user.position"
        />
        <label for="fName">Tel</label>
        <input
          type="text"
          name="fName"
          @keypress.enter="addColumn()"
          v-model="user.tel"
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
  data: () => ({
    user: {
      fullName: "",
      age: 0,
      position: "",
      tel: "",
    },
  }),
  created() {
    this.$nextTick(() => this.$refs.fName.focus());
  },
  methods: {
    ...mapActions({
      newUser: "team/newUser",
    }),
    addCard() {
      if (this.user.fullName == "") {
        alert("Please enter Title for Task");
        return;
      }
      this.newUser(this.user);
      this.$emit("close");
    },
  },
};
</script>
