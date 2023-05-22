<script setup>
import { ref } from 'vue'
import TuChild from './TuChild.vue'

const childMsg = ref('No child msg yet')
const ParentMsg = ref('Parent msg')
</script>

<template>
  <p>{{ childMsg }}</p>
  <TuChild :msg="ParentMsg" @response="(msg) => childMsg = msg"></TuChild>
  <TuChild :msg="ParentMsg" @response="(msg) => childMsg = msg">{{ 'pass msg to slot' }}</TuChild>
</template>