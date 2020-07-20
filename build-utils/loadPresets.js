const { merge } = require("webpack-merge");
module.exports = env => {
    const { presets } = env;

    const mergedPresets = [].concat(...[presets]);
    const mergeConfigs = mergedPresets.map(presetName => require(`./presets/webpack.${presetName}`));

    return merge({}, ...mergeConfigs);
};
