<template>
  <div>
    <router-link to="/">
      <button>Kembali</button>
    </router-link>
      <h1>{{ this.$store.state.todos[$route.params.id] }}</h1>
      <input type="text" required />
      <button>Simpan</button>
  </div>
</template>

<script>
export default {
  name: "Detail",
}
</script>
