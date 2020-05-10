<template src='./Detail.html' lang='html'>
</template>

<script>
  import http from 'axios'

  export default {
    name: 'detail',
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        recipe: {}
      }
    },
    mounted () {
      this.getRecipe()
    },
    methods: {
      getRecipe () {
        return http({
          method: 'GET',
          url: `${process.env.API}recipes/${this.id}`,
          headers: {
            'Authorization': localStorage.getItem('token')
          }
        })
          .then(response => response.data)
          .then(data => {
            this.recipe = data
          })
          .catch(() => this.$router.push({ name: 'login' }))
      }
    }
  }
</script>

<style>
  .divider {
    margin: 4rem 0;
  }
</style>
