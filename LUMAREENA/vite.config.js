import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// LUMORA — Modern Kitchen
// Vanilla HTML/CSS/JS site. The single-file plugin inlines the CSS and JS
// into one self-contained index.html for simple static (Netlify) deployment.
export default defineConfig({
  plugins: [viteSingleFile()],
});
