<template>
  <div class="column is-2 is-narrow" v-if="fitness.tag == 'start'">
    <div class="box">
      <button class="button is-success is-rounded">
        {{ fitness.fitness }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserBox",
  props: {
    fitness: Object,
  },
};
</script>

<style scoped>
.image {
  margin-top: -1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}
.lineClamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  /*IE対策*/
  line-height: 1.5em;
  max-height: 4.5em;
}
</style>
