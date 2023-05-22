<script setup>

const props = defineProps({
  msg: String
})
const emit = defineEmits(['response'])

function OnClick() {
  emit('response', 'ChildMsg changed')

}
</script>

<template>
  <h2>{{ msg || 'No props passed yet' }}</h2>
  <button @click="OnClick()">{{ 'click to change ChildMsg' }}</button>
  <!-- slot:displayed if the parent did not pass down any slot content -->
  <slot>Fallback content</slot>
</template>