<template>
  <div>
    <form @submit.prevent="submitHandler" class="form">
      <label for="fname">Title</label>
      <input v-model="title" type="text" placeholder="Title.." />

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

      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    title: "",
    priority: "",
    description: "",
    date: new Date().toLocaleString(),
    status: "active",
  }),
  methods: {
    submitHandler() {
      var task = {
        id: Date.now(),
        title: this.title,
        priority: this.priority,
        description: this.description,
        date: this.date,
        status: this.status,
      };
      this.$store.dispatch("createTask", task);

      this.$router.push("/list");
    },
  },
};
</script>
