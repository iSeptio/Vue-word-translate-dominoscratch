<template>
  <div class="container2">
    <letter v-for="item in splitedTranslatedWordArray" :key="item.id">{{item}}</letter>
  </div>
</template>
<script>
import Letter from "./Letter.vue";

export default {
  name: "Outputtext",
  props: {
    translatedText: {
      default: "",
      type: String
    }
  },
  components: {
    Letter
  },
  computed: {
    splitedTranslatedWordArray: function() {
      print(this.translatedText.toUpperCase().split(""));
      return this.translatedText.toUpperCase().split("");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container2 {
  background-color: white;
}
</style>
