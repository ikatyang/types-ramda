const regex = /src\/(?:configs|index).ts|templates\//;

export default () => {
  Object.keys(require.cache)
    .filter(file => regex.test(file))
    .forEach(file => delete require.cache[file]);
};
