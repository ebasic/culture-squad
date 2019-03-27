const defaultConfig = {
  googleMapsAPiKey: 'AIzaSyCJggRm-4pW6IItY8QNXQRkFu2_xKuByC8',
  edgerydersUrl: 'https://edgeryders.eu',
  discourseApiKey: '42ac7bdbf33fe4290e69c4a747947df363b42402294dc296cbd23ecfc758feaf',
  websiteName: 'Culture Squad'
};

const config = {
  dev: {
    ...defaultConfig
  },
  staging: {
    ...defaultConfig
  },
  production: {
    ...defaultConfig
  }
};

module.exports = config[process.env.RELEASE_STAGE];
