<template>
  <h1>Multiple v-model</h1>
  <NameInput v-model:name="name" v-model:pronoun="pronoun" />
  <p>Nombre: {{ name }}</p>
  <p>Pronombre: {{ pronoun }}</p>
</template>

<script>
import NameInput from "@/components/NameInput";
export default {
  components: { NameInput },
  data() {
    return {
      pronoun: "El",
      name: "Nacho"
    };
  }
};
</script>
