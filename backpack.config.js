module.exports = {
  webpack: config => {
    if (config.mode === 'production') {
      config.devtool = 'none'
    }

    return config
  },
}
