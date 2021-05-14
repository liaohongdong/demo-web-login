module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        '@fe-micro/eslint-config-micro'
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        indent: 'off',
    },
};
