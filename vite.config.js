import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

// Use absolute path for certificates
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync(path.resolve('/root/certs/private.key')),
      cert: fs.readFileSync(path.resolve('/root/certs/cert.crt')),
    },
    host: true,
    port: 5173,
  },
});