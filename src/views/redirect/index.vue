<template></template>
<script>
export default {
  name: 'Redirect',
  beforeCreate() {
    const {params, query} = this.$route;
    const {path} = params;
    this.$router.replace({path: '/' + path, query});
  }
}
</script>