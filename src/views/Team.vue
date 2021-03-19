<template>
  <div class="team">
    <div class="toolbar">
      <button class="medium" @click="newUserDialog = true">New User</button>
    </div>
    <div class="team-list"></div>
    <table>
      <tr v-for="user in team" :key="user.fullName">
        <td>
          <div class="avatar">
            {{ user.fullName[0] }}
          </div>
        </td>
        <td>
          {{ user.fullName }}
        </td>
        <td>
          {{ user.age }}
        </td>
        <td>
          {{ user.position }}
        </td>
        <td>
          {{ user.tel }}
        </td>
        <td>
          <button class="button circle small red" title="Add Task">
            X
          </button>
        </td>
      </tr>
    </table>

    <template v-if="newUserDialog">
      <user-dialog @close="newUserDialog = false"></user-dialog>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import userDialog from "./dialog/NewUserDialog";

export default {
  components: {
    userDialog,
  },
  data: () => ({
    newUserDialog: false,
  }),
  computed: {
    ...mapGetters({
      team: "team/getTeam",
    }),
  },
};
</script>
