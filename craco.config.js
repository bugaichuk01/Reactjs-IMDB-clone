const path = require('path');

module.exports = {
    webpack:
        {
            alias:
                {
                    '@': path.resolve(__dirname, 'src/components'),
                    '_': [path.resolve(__dirname, 'src/_helpers'), path.resolve(__dirname, 'src/_hooks'), path.resolve(__dirname, 'src/_services')]
                },
        },
};