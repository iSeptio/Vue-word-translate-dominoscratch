<template>
  <div class="container" @mouseover="pokazLitere=true" :style="{backgroundColor: randomColor()}">
    <div v-show="pokazLitere" id="centered">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Letter",
  methods: {
    randomColor() {
      const r = () => Math.floor(256 * Math.random());

      return `rgb(${r()}, ${r()}, ${r()})`;
    }
  },
  data: function() {
    return {
      pokazLitere: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  color: white;
  font-size: 40px;
  width: 50px;
  height: 50px;
}

#centered {
  display: table;
  line-height: 45px;
  margin: 0 auto;
}
</style>
