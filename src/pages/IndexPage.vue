<style>
  .center {
    margin: auto;
    width: 60%;
    border: 3px solid #1976D2;
    padding: 10px;
  }
</style>
<template>
  <div class="htmlClass">
    <h1>{{ title }}</h1>
    <form class="center">
      <label>Student ID:</label><br>
      <input type="text" id="stdID" v-model="stdID" /><br>

      <label>Nick name:</label><br>
      <input type="text" id="nickName" v-model="nickName" /><br>

      <label>First name:</label><br>
      <input type="text" id="firstName" v-model="firstName" /><br>

      <label>Last name:</label><br>
      <input type="text" id="lastName" v-model="lastName" /><br><br>
      <button @click="submitForm()" class="submitForm">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: 'Vue is awesome.',
      stdID: '',
      nickName: '',
      firstName: '',
      lastName: '',
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit form')
    },
  }
}
</script>

<style scoped></style>