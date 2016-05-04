module.exports = {
  entry: [
    'react-hot-loader/patch',
    './main.js',
  ],
  node: {
    // Enable dirname and filename so we can link back to the GitHub source
    __filename: true,
    __dirname: true
  },
  resolve: {
    // Because we load devboard from a parent folder on the filesystem
    // we'd end up bundling its React devDependencies as well without this
    // In normal usage, this isn't a problem
    'alias': {
      'react$': require.resolve('react'),
      'react-dom$': require.resolve('react-dom'),
    }
  }
};
