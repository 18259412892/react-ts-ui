import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
import { getPackagesSync } from '@lerna/project';
const inputs = getPackagesSync().map(pck => pck.name).filter(name => name.includes('@t-ui'));
export default inputs.map(name => {
    const pckName = name.split('@t-ui')[1]
    return {
        input: path.resolve(__dirname, `../packages/${pckName}/index.ts`),
        output: {
            format: 'es',
            file: `lib/${pckName}/index.js`,
        },
        plugins: [
            nodeResolve(),
          
            typescript({
                tsconfigOverride: {
                    compilerOptions: { // 打包单个组件的时候不生成ts声明文件
                        declaration: false,
                    },
                    exclude: [
                        'node_modules'
                    ],
                }
            })
        ],
        external(id) { // 对vue本身 和 自己写的包 都排除掉不打包
            return /^(qs|react|react-dom|axios|\/icons|core-js)/.test(id)
        },
    }
})