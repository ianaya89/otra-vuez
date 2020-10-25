<template>
  <h1>Composition API</h1>
  <section>
    <h2 v-if="isLoadingUsers">Loading Users...</h2>
    <table v-else>
      <tr v-for="u in users" :key="u.id">
        <td>{{ u.id }}</td>
        <td>{{ u.email }}</td>
        <td>{{ u.first_name }}</td>
        <td>{{ u.last_name }}</td>
      </tr>
    </table>

    <h2 v-if="isLoadingThings">Loading Things...</h2>
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
import { ref } from "vue";
export default {
  setup() {
    const isLoadingUsers = ref(true);
    const users = ref([]);

    fetch("https://reqres.in/api/users?page=2")
      .then(res => res.json())
      .then(({ data }) => {
        users.value = data;
        isLoadingUsers.value = false;
      });

    const isLoadingThings = ref(true);
    const things = ref([]);

    fetch("https://reqres.in/api/unknown")
      .then(res => res.json())
      .then(({ data }) => {
        things.value = data;
        isLoadingThings.value = false;
      });

    return {
      users,
      isLoadingUsers,

      things,
      isLoadingThings
    };
  }
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}

table {
  width: 40%;
}
</style>
