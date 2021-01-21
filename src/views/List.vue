<template>
  <div>
    <h2>Task List</h2>
    <button class="button circle" @click="newTask">
      +
    </button>
    <hr />

    <table v-if="tasks && tasks.length">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Priority</th>
          <th>Description</th>
          <th>End Date</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, i) in tasks" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ task.title }}</td>
          <td>{{ task.priority }}</td>
          <td>{{ task.description }}</td>
          <td>{{ new Date(task.date).toLocaleDateString() }}</td>
          <td>
            <button class="button small" @click="openTask(task)">
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
  methods: {
    openTask(item) {
      this.$router.push("/task/" + item.id);
    },
    newTask() {
      this.$router.push("/newtask");
    },
  },
};
</script>
