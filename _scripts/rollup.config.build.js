import json from '@rollup/plugin-json';
import {
    nodeResolve
} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss-modules';
import typescript from 'rollup-plugin-typescript2';
import path from 'path';
import clear from 'rollup-plugin-clear';
import babel from "rollup-plugin-babel";
import uglify from 'rollup-plugin-uglify';
export default [{
    input: path.resolve(__dirname, `../packages/t-ui/index.tsx`),
    output: {
        file: 'lib/index.esm.js',
        // 编译目标，es module
        format: 'es'
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        json(),
        babel({
            exclude: "**/node_modules/**",
            runtimeHelpers: true
        }),
        postcss({
            extract: true, // extracts to `${basename(dest)}.css`
            plugins: [],
            writeDefinitions: false,
            // modules: { ... }
        }),
        clear({
            targets: ['es']
        }),
        typescript({
            tsconfigOverride: {
                compilerOptions: { // 打包单个组件的时候不生成ts声明文件
                    declaration: false,
                },
                exclude: [
                    'node_modules',
                    "docs"
                ],
            }
        }),
        // uglify()
    ],
    // 第三方模块不会强行打包到输出中
    external: (id) => /^(qs|react|react-dom|axios|\/icons|core-js)/.test(id),
}];