<script setup lang="ts">
import {autorun, subscribe} from "vue-meteor-tracker";
import {TextCollection} from "../api/text";
import VueMarkdown from 'vue-markdown-render'
import {tasklist} from "@mdit/plugin-tasklist";

subscribe('text');
const texts = autorun(() => TextCollection.find({}).fetch()).result

import {onMounted, onUnmounted} from "vue";

import {router} from './router'

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 's') {
    router.push('/stats')
  }
  if (event.key === 'e') {
    router.push('/edit')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div v-if="texts.length"
       :style="{
      backgroundColor: 'hsla(0, 0%, 0%, 0.9)',
      padding: '10px',
      fontFamily: 'sans-serif',
      color: 'white',
      height: '100vh',
      width: '100vw',
      fontSize: '5em',

  }"
  >
    <vue-markdown :source="texts[0].content" :plugins="[tasklist]"/>
  </div>
</template>
