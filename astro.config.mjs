import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site:"https://Gaya3Sreekumar.github.io"
  base:"/iedcdesign"
  integrations: [tailwind()]
});