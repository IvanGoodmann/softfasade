<template lang="pug">
    #app
        header-box
        page-box
        footer-box
</template>

<script>
  import headerBox from '@/components/header.vue'
  import pageBox from '@/components/page.vue'
  import footerBox from '@/components/footer.vue'

  export default {
    name: 'App',
    components: {
      headerBox,
      pageBox,
      footerBox
    }
  }
</script>
<style lang="sass">
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
    @import './assets/scss/main'
</style>
