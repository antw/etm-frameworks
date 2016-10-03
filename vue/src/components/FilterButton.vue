<template>
  <button :class="[isActive ? 'active' : '']" @click="setVisibility(filter)">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    filter: { type: String, require: true },
  },
  methods: {
    setVisibility(filter) {
      this.$store.commit('SET_VISIBILITY_FILTER', filter);
    },
  },
  computed: {
    isActive() {
      return this.$store.state.visibility.filter === this.filter;
    },
  },
};
</script>
