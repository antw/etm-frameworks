<template>
  <div>
    <div class="visibility-filters">
      <filter-button filter="ALL">All</filter-button>
      <filter-button filter="LIKED">Liked</filter-button>
      <filter-button filter="ACTIVE">Active</filter-button>
    </div>
    <div class="photo-grid">
      <photo v-for="post in posts" :key="post.code" :post="post" :comments="comments[post.code]"></photo>
    </div>
  </div>
</template>

<script>
import Photo from './Photo';
import FilterButton from './FilterButton';

export default {
  name: 'PhotoGrid',
  computed: {
    posts() {
      return this.$store.getters.visiblePosts;
    },
    comments() {
      return this.$store.state.comments;
    },
  },
  components: {
    FilterButton,
    Photo,
  },
};
</script>
