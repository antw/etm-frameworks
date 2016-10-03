<template>
  <figure class="grid-figure">
    <div class="grid-photo-wrap">
      <router-link :to="`/view/${post.code}`">
        <img
          v-lazy="post.display_src"
          :alt="post.caption"
          class="grid-photo"
        />
      </router-link>
      <transition name="like">
        <span :key="post.likes" class="likes-heart">{{ post.likes }}</span>
      </transition>
    </div>
    <figcaption>
      <p>{{ post.caption }}</p>
      <div class="control-buttons">
        <button
            :class="{ likes: true, liked: post.hasLiked }"
            @click.prevent="handleAddLike"
        >
          &hearts; {{ post.likes }}
        </button>

        <router-link :to="`/view/${post.code}`" class="button">
          <span class="comment-count">
            <span class="speech-bubble"></span>
            {{ comments.length }}
          </span>
        </router-link>
      </div>
    </figcaption>
  </figure>
</template>

<style lang="stylus" scoped>
.button.router-link-active:hover {
  border 2px solid lighten(grey, 90%)
  cursor default
}
</style>

<script>
export default {
  props: {
    post: { type: Object, require: true },
    comments: { type: Array, require: true, default: () => [] },
  },

  methods: {
    handleAddLike(event) {
      this.$store.commit(
        this.post.hasLiked ? 'UNLIKE_POST' : 'LIKE_POST',
        this.post.code
      );

      // Prevents the element from remaining focused with the blue outline.
      event.target.blur();
    },
  },
};
</script>
