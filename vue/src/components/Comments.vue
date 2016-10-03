<template>
  <div class="comments">
    <div v-for="(comment, index) in comments" class="comment">
      <p>
        <strong>{{ comment.user }}</strong>
        {{ comment.text }}
        <button class="remove-comment" @click.prevent="handleDeleteComment(index)">&times;</button>
      </p>
    </div>

    <form class="comment-form" @submit.prevent="handleAddComment">
      <input type="text" v-model="newAuthor" placeholder="author" />
      <input type="text" v-model="newComment" placeholder="comment" />
      <input type="submit" hidden />
    </form>
  </div>
</template>

<script>
export default {
  props: ['comments', 'postId'],

  data() {
    return {
      newAuthor: '',
      newComment: '',
    };
  },

  methods: {
    handleAddComment() {
      this.$store.commit('ADD_COMMENT', {
        postId: this.postId,
        user: this.newAuthor,
        text: this.newComment,
      });

      this.newAuthor = '';
      this.newComment = '';
    },

    handleDeleteComment(index) {
      this.$store.commit('DELETE_COMMENT', {
        postId: this.postId,
        i: index,
      });
    },
  },
};
</script>
