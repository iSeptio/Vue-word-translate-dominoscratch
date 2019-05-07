<template>
  <div class="container">
    <form v-on:submit="formSubmit">
      <input v-model="word" placeholder="Write word here" type="text" name="firstname">
      <input type="submit" value="Translate">
      {{word}}
    </form>
  </div>
</template>
<script>
export default {
  name: "Translate",
  components: {},

  data: function() {
    return {
      translation: 0,
      word: ""
    };
  },
  methods: {
    formSubmit(e) {
      this.$emit("formSubmit", this.word);
      e.preventDefault();
    }
  },
  computed: {
    splitedwordarray: function() {
      return this.word.toUpperCase().split("");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  position: relative;
  display: flex;
  flex-direction: row;
}
.translateparagraphTriger {
  border: 5px grey solid;
  min-height: 40px;

  width: 20%;

  &:hover + #secound {
    background-color: lightgrey;
  }
}
.rightcontent {
  width: 80%;
}
</style>
