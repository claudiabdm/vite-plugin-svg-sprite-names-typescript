import './style.css'
import { IconNameList } from './types/icon-names'

const icons = IconNameList;
const svgs = icons.map((icon) => {
  return `
    <h2 style="text-transform: capitalize"> 
      <span>${icon} Logo</span>
      <svg style="width: 100%; height:100%">
        <use href="sprite.svg#${icon}"></use>
      </svg>
    </h2>
  `
}).join('\n');
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 300px)); justify-content: center; width: 100%; height: 100%;">
    ${svgs}
  </div>
`
