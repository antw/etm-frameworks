<template>
  <div class="single-photo">
    <photo :post="post" :comments="comments"></photo>
    <comments :comments="comments" :postId="post.code"></comments>
  </div>
</template>

<script>
import Photo from './photo';
import Comments from './comments';

export default {
  name: 'Single',

  computed: {
    post() {
      return this.$store.state.posts.find(post => (
        post.code === this.$route.params.postId
      ));
    },

    comments() {
      return this.$store.state.comments[this.post.code];
    },
  },

  components: {
    Photo,
    Comments,
  },
};
</script>
