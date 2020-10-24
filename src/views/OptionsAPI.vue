<template>
  <section>
    <h1 v-if="isLoadingUsers">Loading Users...</h1>
    <table v-else>
      <tr v-for="u in users" :key="u.id">
        <td>{{ u.id }}</td>
        <td>{{ u.email }}</td>
        <td>{{ u.first_name }}</td>
        <td>{{ u.last_name }}</td>
      </tr>
    </table>

    <h1 v-if="isLoadingThings">Loading Things...</h1>
    <table v-else>
      <tr v-for="t in things" :key="t.id">
        <td>{{ t.id }}</td>
        <td>{{ t.name }}</td>
        <td>{{ t.color }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      usersError: null,
      isLoadingUsers: false,

      things: [],
      thingsError: null,
      isLoadingThings: false
    };
  },

  computed: {
    totalUsers() {
      return `Total: ${this.users.length}`;
    },

    totalThings() {
      return `Total: ${this.things.length}`;
    }
  },

  async created() {
    this.getUsers();
    this.getThings();
  },

  methods: {
    getUsers() {
      this.isLoadingUsers = true;

      setTimeout(async () => {
        const res = await fetch("https://reqres.in/api/users?page=2");
        const { data } = await res.json();
        this.users = data;
        this.isLoadingUsers = false;
      }, 2000);
    },

    getThings() {
      this.isLoadingThings = true;

      setTimeout(async () => {
        const res = await fetch("https://reqres.in/api/unknown");
        const { data } = await res.json();
        this.things = data;
        this.isLoadingThings = false;
      }, 3000);
    }
  }
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-between;
}

table {
  width: 40%;
}
</style>
