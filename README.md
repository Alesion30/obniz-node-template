# Node.ts + obniz

#### 参考記事:
https://qiita.com/chibi929/items/57eb843a5653a12df8f2
https://qiita.com/mangano-ito/items/75e65071c9c482ddc335


## プロジェクト作成手順
1. yarn init
2. yarn add obniz
3. yarn add -D typescript @types/node ts-node dotenv
4. touch tsconfig.json
```tsconfig.json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "target": "es6",
    "module": "commonjs",
    "moduleResolution": "node",
    "lib": ["es2018", "dom"]
  }
}
```
5. touch .env
```.env
OBNIZ_ID=(obniz上に表示されているID)
```
6. yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier
7. touch tsconfig.eslint.json
```
{
  "extends": "./tsconfig.json",
  "include": [
    "src/**/*.ts",
    ".eslintrc.js"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```
8. touch .eslintrc.js
```
module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json']
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
  },
};
```
9. touch .eslintignore
```.eslintignore
.eslintrc.js
```
10. echo "{}"> .prettierrc.json
11. touch .prettierignore
```.prettierignore
node_modules
```
12. npmスクリプトの設定
```package.json
"scripts": {
  "start": "ts-node src/main.ts",
  "lint": "eslint --ext .js,.ts .",
  "format": "prettier --write \"*.{js,ts,json}\" && prettier --write \"src/**/*.{js,ts,json}\""
},
```