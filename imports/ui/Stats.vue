<template>
  <div>
    <h2>Twitch Stream Delay Checker</h2>
    <div id="twitch-player"></div>
    <p id="delay">{{ delayText }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {Meteor} from "meteor/meteor";

const YOUR_TWITCH_CHANNEL = "gustawdaniel"; // Replace with your Twitch channel
const delayText = ref("Calculating...");
let player: any;

declare global {
  interface Window {
    Twitch: any;
  }
}

function checkDelay() {
  if (!player || !player.getPlaybackStats) return;
  const stats = player.getPlaybackStats();
  console.log("Playback stats:", stats);
  const latency = stats.hlsLatencyBroadcaster ?? "N/A";
  delayText.value = `Stream Delay: ${typeof latency === 'number' ? latency.toFixed(2) : latency}s`;

  Meteor.callAsync("saveLog", stats).catch(console.error);
}

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://player.twitch.tv/js/embed/v1.js";
  script.onload = () => {
    player = new window.Twitch.Player("twitch-player", {
      width: 800,
      height: 450,
      channel: YOUR_TWITCH_CHANNEL,
    });
    player.addEventListener(window.Twitch.Player.READY, () => {
      setInterval(checkDelay, 2000);
    });
  };
  document.body.appendChild(script);
});
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}
#delay {
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
}
</style>