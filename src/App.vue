<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <translate v-on:formSubmit="translateText"/>
    <outputtext :translated-text="translatedText"/>
  </div>
</template>

<script>
import translate from "./components/Translate";
import outputtext from "./components/Outputtext";

export default {
  name: "App",
  components: {
    translate,
    outputtext
  },
  data: function() {
    return {
      translatedText: ""
    };
  },
  methods: {
    translateText: function(text) {
      this.$http
        .get(
          "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190411T104042Z.5b35200f74382d8c.9c1a3d11208245c8d78bffdfe24c49dac6fd7450&lang=pl-de&text=" +
            text
        )
        .then(response => {
          this.translatedText = response.body.text[0];
        });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
