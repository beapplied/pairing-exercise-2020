<template>
  <div :class="$style.wrapper" :style="style">
    <div :class="$style.inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    fullWidth: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style() {
      return this.fullWidth ? "width: 100%" : "";
    }
  }
};
</script>

<style module src="./Card.css" />
