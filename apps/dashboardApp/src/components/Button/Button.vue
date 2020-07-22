<template>
  <div
    :class="{
      [$style.buttonWrapper]: true,
      [$style.pending]: pending === true,
      [$style.disabled]: disabled === true,
      [$style.primary]: color === 'primary',
      [$style.secondary]: color === 'secondary',
      [$style.secondaryGrey]: color === 'secondaryGrey',
      [$style.primaryTextOnly]: color === 'primaryText',
      [$style.secondaryTextOnly]: color === 'secondaryText',
      [$style.textOnly]: color === 'secondaryText' || color === 'primaryText',
      [$style.warning]: color === 'warning',
      [$style.danger]: color === 'danger',
      [$style.success]: color === 'success',
      [$style.form]: size === 'form'
    }"
    @click="clicked"
    @keyup.enter="clicked"
    @blur="blurred"
    @keyup.space="clicked"
    tabindex="0"
  >
    <div v-if="showslot('iconLeft')" :class="$style.iconWrapLeft">
      <slot name="iconLeft" />
    </div>
    <div
      :class="{
        [$style.buttonInner]: true,
        [$style.buttonInnerTextOnly]:
          color === 'primaryText' || color === 'secondaryText',
        [$style.large]: size === 'large'
      }"
    >
      <slot :class="$style.buttonText" name="buttonText">I am Button</slot>
    </div>
    <div :class="$style.altText">
      <slot name="altText" />
    </div>
    <div v-if="showslot('icon')" :class="$style.iconWrap">
      <slot name="icon" />
    </div>
    <div v-if="pending === true" :class="$style.spinnerWrap">
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from './Spinner'

export default {
  name: 'Button',
  components: {
    Spinner
  },
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    level: {
      type: String,
      default: 'primary'
    },
    pending: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'small'
    },
    underline: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clicked() {
      if (this.disabled) {
        return
      }
      this.$emit('clicked')
    },
    blurred() {
      this.$emit('blurred')
    },
    showslot(slotName) {
      return this.$slots[slotName]
    }
  }
}
</script>

<style module src="./Button.css" />
