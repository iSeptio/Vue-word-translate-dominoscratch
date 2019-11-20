<template>
  <div class="container">
    <form v-on:submit="formSubmit">
      <input
        class="inputing"
        v-model="word"
        placeholder="What to generate?"
        type="text"
        name="translator"
      >
      <input class="buttonclass" type="submit" value="Przetłumacz">
    </form>
  </div>
</template>
<script>
export default {
  name: "Translate",
  components: {},

  data: function() {
    return {
      word: ""
    };
  },
  methods: {
    formSubmit(e) {
      this.$emit("formSubmit", this.word);
      this.word = "";
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
.inputing {
  appearance: none;
  background-color: white;
  border: 0;
  cursor: pointer;
  height: 40px;
  outline: none;
  padding: 0 20px;
  transition: all 0.5s ease;
  margin-right: 10px;
}
.container {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
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

.buttonclass {
  appearance: none;
  background-color: white;
  color: #00dbde;
  border: 0;
  cursor: pointer;
  height: 40px;
  outline: none;
  padding: 0 20px;
  transition: all 0.5s ease;
  margin-right: 10px;
}
</style>
