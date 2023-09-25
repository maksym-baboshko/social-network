declare module '*.module.css'
declare module '*.module.scss'

declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.gif'

declare module '*.svg' {
  const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default SVG
}

declare const _IS_DEV_: boolean