<template>
  <div class="container2">
    <letter
      v-on:scratchedletter="deleteLetter"
      :letter="item"
      :index="index"
      :revealed="revealed"
      v-for="(item, index) in splitedTranslatedWordArray"
      :key="item.id"
    />
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
    },
    revealed: {
      default: []
    }
  },
  components: {
    Letter
  },
  computed: {
    splitedTranslatedWordArray: function() {
      return this.translatedText.toUpperCase().split("");
    }
  },
  methods: {
    deleteLetter: function(letter) {
      this.$emit("scratchletter", letter);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container2 {
  display: flex;
      justify-content: center;
}
</style>
