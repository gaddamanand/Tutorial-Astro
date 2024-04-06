import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://tutorial-astro-9w78yh7a9-gaddamanand.vercel.app",
  integrations: [preact()]
});