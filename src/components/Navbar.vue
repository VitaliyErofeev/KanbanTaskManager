<template>
  <nav>
    <ul>
      <router-link
        v-for="link in links"
        :key="link.text"
        active-class="active"
        tag="li"
        :to="link.to"
        :exact="link.exact"
      >
        {{ link.text }}
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: [
      { text: "Home", to: "/", exact: true },
      { text: "Team", to: "/team" },
    ],
  }),
};
</script>
