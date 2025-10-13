import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    host: true, // Permite conexiones desde cualquier IP
    strictPort: true, // Falla si el puerto está ocupado
    allowedHosts: ["chosen-agreements-bikes-ranging.trycloudflare.com"],
  },
});
