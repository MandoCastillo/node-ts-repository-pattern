// // eslint-disable-next-line no-undef
module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:node/recommended',
        "airbnb-base", "prettier",
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 2020,
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint'
    ],
    'rules': {
        'semi': [2, 'always'],
        'max-len': ['error', {
            'code': 120,
        }],
        'object-curly-spacing': [2, 'always'],
        'quotes': [2, 'single', 'avoid-escape'],
        'key-spacing': [2, {
            'singleLine': {
                'beforeColon': false,
                'afterColon': true
            },
            'multiLine': {
                // 'beforeColon' : true,
                'afterColon': true,
                // 'align'       : 'colon'
            }
        }],
        'no-trailing-spaces': [2],
        'node/no-unsupported-features/es-syntax': 0
        // 'node/no-unsupported-features/es-syntax': ['error', {
        //     'version': '>=8.0.0',
        //     'ignores': []
        // }]
    }
};
// {
//     "root": true,
//     "parser": "@typescript-eslint/parser",
//     "plugins": [
//         "@typescript-eslint"
//     ],
//     "extends": [
//         "eslint:recommended",
//         "plugin:@typescript-eslint/eslint-recommended",
//         "plugin:@typescript-eslint/recommended"
//     ],
//     "rules": { 
//         "no-console": 2 // Remember, this means error!
//     }
// }
// {
//     "parser": "@typescript-eslint/parser",
//     "extends": [
//         "plugin:@typescript-eslint/recommended",
//         "prettier/@typescript-eslint",  // agrega las reglas de prettier a eslint
//         "plugin:prettier/recommended" // agregar el plugin que integra eslint con prettier
//     ],
//     "plugins": ["@typescript-eslint"],
//     "parserOptions": {
//         "ecmaVersion": 2018,
//         "sourceType": "module"
//     },
//     "rules": {
//       // Aca puedes modificar alguna regla específica, por ejemplo:
//       // "@typescript-eslint/explicit-function-return-type": "off",
//     }
// }
// {
//     "env": {
//         "es2020": true,
//         "node": true
//     },
//     "extends": [
//         "standard"
//     ],
//     "parser": "@typescript-eslint/parser",
//     "parserOptions": {
//         "ecmaVersion": 11,
//         "sourceType": "module"
//     },
//     "plugins": [
//         "@typescript-eslint"
//     ],
//     "rules": {
//     }
// }