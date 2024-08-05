// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react-icons/md',
      'react-icons/fa',  
      'react-icons/gi',
     ' react-icons/io',
     'react-icons/gr',
     'react-icons/vsc',
     'react-icons/ci',
     'react-icons/fc',
     'react-icons/go',
     'react-icons/pi',
     'react-icons/hi2',
     'react-icons/fi'
     
    ],
  },
});
