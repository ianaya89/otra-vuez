<template>
  <h1>Compositions Functions</h1>
  <section>
    <h1 v-if="users.isLoading.value">Loading Users...</h1>
    <table v-else>
      <tr v-for="u in users.data.value" :key="u.id">
        <td>{{ u.id }}</td>
        <td>{{ u.email }}</td>
        <td>{{ u.first_name }}</td>
        <td>{{ u.last_name }}</td>
      </tr>
    </table>

    <h1 v-if="things.isLoading.value">Loading Things...</h1>
    <table v-else>
      <tr v-for="t in things.data.value" :key="t.id">
        <td>{{ t.id }}</td>
        <td>{{ t.name }}</td>
        <td>{{ t.color }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
import useFetch from "@/use-fetch";

export default {
  setup() {
    const users = useFetch("https://reqres.in/api/users?page=2");
    users.fetchData();

    const things = useFetch("https://reqres.in/api/unknown");
    things.fetchData();

    return {
      users,
      things
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
