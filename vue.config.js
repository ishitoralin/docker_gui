const { defineConfig } = require("@vue/cli-service");
const os = require('os');

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "./dist",
  devServer: {
    port: 8080,
    server: true,
    proxy: {
      '/api': {
        target: "https://" + getLocalIp() + ":8866",
        changeOrigin: true
      },
    }
  },
});

function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (let iface in interfaces) {
    for (let i = 0; i < interfaces[iface].length; i++) {
      const alias = interfaces[iface][i];
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return '127.0.0.1';
}
