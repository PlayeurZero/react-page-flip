declare module '*.css' {
  const content: { [className: string]: string } | any
  export default content
}
