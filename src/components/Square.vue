<template>
  <div @click="$emit('click')" class="square">
    <span v-if="value !== ''">{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: "Square",
  props: {
    value: String
  }
};
</script>

<style scoped>
.square {
  width: 65px;
  height: 65px;
  border: 1px solid rgb(75, 86, 75);
  font-size: 45px;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
