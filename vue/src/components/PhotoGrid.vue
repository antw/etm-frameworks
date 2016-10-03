<template>
  <div class="photo-grid">
    <photo v-for="post in posts" :post="post" :comments="comments[post.code]"></photo>
  </div>
</template>

<script>
import Photo from './Photo';

export default {
  name: 'PhotoGrid',
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    comments() {
      return this.$store.state.comments;
    },
  },
  components: {
    Photo,
  },
};
</script>
