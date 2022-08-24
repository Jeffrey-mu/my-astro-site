import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// import preact from '@astrojs/preact';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
// import solid from '@astrojs/solid-js';
// import lit from '@astrojs/lit';
// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte(), vue()],
  // integrations: [react(), preact(), svelte(), vue(), solid(), lit()],
});
