import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// Use absolute path for certificates
export default defineConfig({
  base: '/my_chatbot/',  // Set the base path here
  plugins: [react()],
    host: true,
    port: 5173,
});