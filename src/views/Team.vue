<template>
  <div class="team">
    <div class="toolbar">
      <button class="medium">New User</button>
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
          {{ user.position }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      team: "team/getTeam",
    }),
  },
};
</script>
