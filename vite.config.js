import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Matiguigue.github.io/react-rickandmorty/",
  plugins: [react()],
})
