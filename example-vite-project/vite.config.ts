import { defineConfig } from 'vite';
import { generateIconNames } from '../src/index.ts';

export default defineConfig({
    plugins: [
        generateIconNames({
            svgFilePath: './public/sprite.svg',
            typesFilePath: './src/types/icon-names.ts',
            typeName: 'IconName'
        })
    ],
})