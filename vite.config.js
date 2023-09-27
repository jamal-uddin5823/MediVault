// import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
// export default defineConfig({
//   base: "/MediVault/",
//   plugins: [react()],
// });

export default {
  build: {
    base: "/MediVault/",
    plugins: [react()],
    outDir: 'dist/assets', // Output directory for built files
    rollupOptions: {
      // Modify the output file names
      output: {
        entryFileNames: `assets/[name]` // Set the desired name for the entry file
        // chunkFileNames: 'index-[hash].js', // Keep this to include a hash
        // assetFileNames: 'index-[hash][extname]', // Keep this to include a hash
      },
    },
  },
};
