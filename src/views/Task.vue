<template>
  <div>
    <div v-if="task">
      <h2>{{ task.title }}</h2>
      <hr />
      <form @submit.prevent="submitHandler" class="form">
        <label for="lname">Priority</label>
        <select v-model="priority">
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <label for="lname">Description</label>
        <textarea
          v-model="description"
          placeholder="Write something.."
        ></textarea>

        <label for="lname">Date</label>
        <input v-model="date" type="date" />

        <label for="lname">Status</label>
        <select v-model="status">
          <option></option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <br />
        <button type="submit" value="Save">Save</button>
        <button value="Complete Task">Complete Task</button>
      </form>
    </div>
    <p v-else>
      Task not found
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    priority: "",
    description: "",
    date: "",
    status: "",
  }),
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id);
    },
  },
  mounted() {
    this.priority = this.task.priority;
    this.description = this.task.description;
    this.date = this.task.date;
    this.status = this.task.status;
  },
  methods: {
    submitHandler() {
      this.$store.dispatch("updateTask", {
        id: this.task.id,
        priority: this.priority,
        description: this.description,
        date: this.date,
        status: this.status,
      });
      this.$router.push("/list");
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  button:nth-child(2) {
    margin-left: 8px;
  }
}
</style>
