<template>
  <nav class="flex items-center">
    <router-link :to="{ name: 'todo' }" class="mr-4 text-green-700 hover:underline">Todo</router-link>
    <router-link :to="{ name: 'edit' }" class="mr-4 text-green-700 hover:underline">Edit</router-link>
    <router-link :to="{ name: 'stats' }" class="mr-4 text-green-700 hover:underline">Stats</router-link>
  </nav>
</template>
