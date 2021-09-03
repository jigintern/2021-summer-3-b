<template>
  <div class="column is-2 is-narrow">
    <div class="box">
      <p class="is-size-6 lineClamp title has-text-primary">
        {{ user.name }}
        <a class="" aria-label="reply" v-on:click="addFriend">
          <span class="icon is-small">
            <i class="icon v-md-custom-icon-user-plus"></i>
          </span>
        </a>
      </p>
      <p v-if="user.now_fitness" class="is-size-6 lineClamp subtitle">
        <span class="icon v-md-custom-icon-fire"></span>
        {{ user.now_fitness }}
      </p>
      <p v-else class="is-size-6 lineClamp subtitle">
        <span class="icon v-md-custom-icon-leaf"></span>
        休息
      </p>
      <!-- v-bind:to="`/user/${user.id}/`" -->
    </div>
  </div>
</template>

<script>
export default {
  name: "UserBox",
  props: {
    user: Object,
  },
  methods: {
    addFriend() {
      this.$emit("add-friend");
    },
  },
};
</script>

<style scoped lang="scss">

.column {
  min-width: 200px;
  .box {
    .icon.v-md-custom-icon-fire:before {
      width: 24px;
      height: 24px;
      border-radius: 50px;
      border: 3px solid #094067;
      background-color: #EF4565;
      color: #EF4565;
      content: "";
    }
    .icon.v-md-custom-icon-leaf:before{
      width: 24px;
      height: 24px;
      border-radius: 50px;
      border: 3px solid #094067;
      background-color: white;
      color: white;
      content: "";
    }
    border: 3px solid #094067;
    p {
      font-size: 30px;
      color: #094067 !important;
    }
  }
}

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
  display: flex;
  justify-content: space-between;
}
</style>
