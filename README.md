# vite-plugin-svg-sprite-names-typescript

Add types for svg's id from a SVG sprite file and generates an array of strings with the names. 

> [!NOTE]
> This plugin does not generate the SVG Sprite, you will need to provide one. 
>
> You can create a SVG sprite in the CLI with [svg-sprite](https://github.com/svg-sprite/svg-sprite). See more in [Usage](#create-svg-sprite-with-the-CLI).
>
> Alternatively, you can use [vite-svg-sprite-wrapper](https://github.com/vshepel/vite-svg-sprite-wrapper) to generate the sprite and the types.

## Install

```bash
npm i -D vite-plugin-svg-sprite-names-typescript
```

## Usage

Include into your plugins in `vite.config.ts`

```ts
import { defineConfig } from "vite";
import { generateIconNames } from "vite-plugin-svg-sprite-names-typescript";

export default defineConfig({
  plugins: [
    generateIconNames({
      svgFilePath: "./public/sprite.svg",
      typesFilePath: "./src/types/icon-names.ts",
      typeName: "IconName",
    }),
  ],
});
```

### Create Svg Sprite with the CLI

If you need to create a sprite from svg icon first, you can do it using svg-sprite CLI:

```bash
npm run svg-sprite -s --symbol-dest [destination folder] --symbol-sprite [sprite filename] [svg icons folder]
```

For example, to create a svg sprite in `public` folder with the name `sprite.svg` from the icons found in `src/assets/icons/*.svg`, we need to run the following command:

```bash
svg-sprite -s --symbol-dest public --symbol-sprite sprite.svg src/assets/icons/*.svg
```

### Example

```ts
// main.ts
import { IconNameList } from "./types/icon-names";

const icons = IconNameList;
const svgs = icons
  .map((icon) => {
    return `
    <h2 style="text-transform: capitalize"> 
      <span>${icon} Logo</span>
      <svg style="width: 100%; height:100%">
        <use href="sprite.svg#${icon}"></use>
      </svg>
    </h2>
  `;
  })
  .join("\n");

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    ${svgs}
  </div>
`;
```
