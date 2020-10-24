<template>
  <div>
    <input
      placeholder="Pronombre"
      :value="pronoun"
      @input="$emit('update:pronoun', $event.target.value)"
      type="text"
      name="pronoun"
    />

    <input
      placeholder="Nombre"
      :value="name"
      @input="$emit('update:name', $event.target.value)"
      type="text"
      name="name"
    />
  </div>
</template>

<script>
export default {
  props: {
    pronoun: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  }
};
</script>
