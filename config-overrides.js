module.exports = function override(config, env) {
  config.optimization.splitChunks = {
    chunks: 'all',
    maxSize: 350000,
  };

  config.output.chunkFilename = pathData => {
    const { runtime, name } = pathData.chunk;

    if (runtime || name) {
      return name ? `static/js/${name}-[id].chunk.js` : `static/js/main-[id].chunk.js`;
    } else {
      return 'static/js/main-[id].chunk.js';
    }
  };

  console.log('Output path:', config.output.path);

  return config;
};
