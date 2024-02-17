// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import path from "path"

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   rollupOptions: {
//     input: 'src/main.js' // Adjust this path as per your project structure
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/main.jsx' // Adjust this path as per your project structure
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
})
