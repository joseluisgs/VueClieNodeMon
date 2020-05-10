<template src='./Login.html' lang='html'>
</template>

<script>
  import http from 'axios'

  export default {
    name: 'Login',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onSubmit () {
        return http({
          method: 'POST',
          url: `${process.env.API}auth/login`,
          data: {
            email: this.email,
            password: this.password
          }
        })
          .then(response => response.data)
          .then(data => {
            localStorage.setItem('token', `JWT ${data}`)
            setTimeout(() => {
              this.$router.push({ name: 'home' })
            }, 1500)
          })
      }
    }
  }
</script>

