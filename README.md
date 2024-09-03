# vite-plugin-svg-sprite-names-typescript

A plugin for extracting symbols' IDs from an SVG sprite and using them to generate an IconName type and an array of strings with the IDs.

> [!NOTE]
> This plugin does not generate the SVG sprite, you will need to provide one. 
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

If you need to create an svg sprite first, you can do it by using [svg-sprite CLI](https://github.com/svg-sprite/svg-sprite/blob/main/docs/command-line.md):

```bash
npm run svg-sprite -s --symbol-dest [destination folder] --symbol-sprite [sprite filename] [svg icons folder]
```

For example, to create a svg sprite in `public` folder with the name `sprite.svg` from the icons found in `src/assets/icons/*.svg`, you need to run the following command:

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
