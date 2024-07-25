import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://ashish-armarkar.github.io/365BuildBlogs/',  // Add this line
  plugins: [react()],
})
