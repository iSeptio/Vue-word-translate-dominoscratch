<template>
  <div class="container2">
    <clickableletter
      v-on:clickedletter="selectedLetter"
      :revealed="revealed"
      :letter="item"
      :index="index"
      v-for="(item, index) in splitedTranslatedWordArray"
      :key="item.id"
    />
  </div>
</template>
<script>
import clickableletter from "./ClickableLetter.vue";

export default {
  name: "Outputtext",
  props: {
    translatedText: {
      default: "",
      type: String
    },
    revealed: {
      default: []
    }
  },
  components: {
    clickableletter
  },
  computed: {
    splitedTranslatedWordArray: function() {
      return this.translatedText
        .toUpperCase()
        .split("")
        .map(function(a, b) {
          return { index: b, value: a };
        })
        .sort(function(a, b) {
          return 0.5 - Math.random();
        })
        .map(function(a) {
          return [a.value, a.index];
        });
    }
  },
  methods: {
    selectedLetter: function(letter) {
      this.$emit("clickedletter", letter);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container2 {
  background-color: white;
  display: flex;
}
</style>
