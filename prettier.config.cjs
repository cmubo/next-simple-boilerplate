const styleguide = require('@vercel/style-guide/prettier');

const config = {
    endOfLine: 'auto',
    tabWidth: 4,
};

module.exports = {
    ...styleguide,
    ...config,
    plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
