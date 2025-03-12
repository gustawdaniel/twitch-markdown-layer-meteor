<script setup>
import { autorun, subscribe } from "vue-meteor-tracker";
import { TextCollection } from "../api/text";
import { Meteor } from "meteor/meteor";
import { ref, watch } from "vue";

subscribe('text');

const texts = ref([]);
const content = ref('');

// Use autorun inside a function to track reactivity
autorun(() => {
  texts.value = TextCollection.find({}).fetch();
  if (texts.value.length > 0) {
    content.value = texts.value[0].content;
  }
});

async function save() {
  try {
    const res = await Meteor.callAsync('saveText', content.value);
    console.log('Response:', res);
  } catch (err) {
    console.error('Error saving text:', err);
  }
}
</script>

<template>
  <p>Edit</p>

  <textarea
      :style="{ fontSize: '1em' }"
      :rows="10"
      :cols="80"
      v-model="content"
  />

  <button @click="save">Save</button>
</template>

<style scoped>

</style>
