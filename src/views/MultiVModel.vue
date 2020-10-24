<template>
  <h1>Multiple v-model</h1>
  <p>Nombre: {{ name }}</p>
  <p>Pronombre: {{ pronoun }}</p>
</template>

<script>
export default {
  data() {
    return {
      pronoun: "El",
      name: "Nacho"
    };
  }
};
</script>
