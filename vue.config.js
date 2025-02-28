const { defineConfig } = require("@vue/cli-service");
const os = require('os');

const getLocalIp = () => {
  const interfaces = os.networkInterfaces();
  for (let iface in interfaces) {
    for (let i = 0; i < interfaces[iface].length; i++) {
      const alias = interfaces[iface][i];
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return 'localhost';
}

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "./dist",
  devServer: {
    port: 8080,
    server: {
      type: 'https',
    },
    proxy: {
      '/api': {
        target: "https://" + getLocalIp() + ":8866",
        changeOrigin: true
      },
    }
  },
});

