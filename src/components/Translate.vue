<template>
  <div class="container">
    <form v-on:submit="formSubmit">
      <input v-model="word" placeholder="Write word here" type="text" name="firstname">
      <input type="submit" value="Translate">
    </form>
    <letter v-for="item in splitedwordarray">{{item}}</letter>
  </div>
</template>
<script>
import Letter from "./Letter.vue";

export default {
  name: "Translate",
  components: {
    Letter
  },
  props: {
    msg: String
  },
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
