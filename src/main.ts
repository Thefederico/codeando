import '@/style.css'

const $ = (selector: string) => document.querySelector(selector)

const $js = $('#js')
const $css = $('#css')
const $html = $('#html')

const update = () => {
  const html = createHtml()

  $('iframe')?.setAttribute('srcdoc', html)
}

$js?.addEventListener('input',  update)
$css?.addEventListener('input', update)
$html?.addEventListener('input', update)


const createHtml = () => {
  const html = ($html as HTMLInputElement).value
  const css = ($css as HTMLInputElement).value
  const js = ($js as HTMLInputElement).value

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `
}