module.exports = (env) => {
    const { mode } = env;
    console.log(env) // can change config according to env
    return {
        mode,
        output: {
            filename: "bundle.js"
        }
    }
}