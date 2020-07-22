<template>
    <div :class="$style.pageWrap">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'PageLayout',
}
</script>

<style module src="./PageLayout.css" />
