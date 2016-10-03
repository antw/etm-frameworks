<template>
  <div>
    <h1>
      <router-link to="/" exact>Vuestagram</router-link>
    </h1>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
