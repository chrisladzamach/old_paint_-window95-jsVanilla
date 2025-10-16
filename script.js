const MODES = {
  DRAW: 'draw',
  ERASE: 'erase',
  RECTANGLE: 'rectangle',
  ELLIPSE: 'ellipse',
  PICKER: 'picker'
}

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const $canvas = $('#canvas')

const ctx = $canvas.getContext('2d');

let isDrawing = false
let startX, startY
let lastX = 0
let lastY = 0
let mode = MODES.DRAW

$canvas.addEventListener('mousedown', startDrawing)
$canvas.addEventListener('mousemove', draw)
$canvas.addEventListener('mouseup', stopDrawing)
$canvas.addEventListener('mouseleave', stopDrawing)

function startDrawing (e) {
  isDrawing = true

  const {offsetX, offsetY} = e;

  ;[startX, startY] = [offsetX, offsetY]
  ;[lastX, lastY] = [offsetX, offsetY]
}

function draw (e) {
  if (!isDrawing) return

  const { offsetX, offsetY } = e;

  ctx.beginPath()
  ctx.moveTo(lastX, lastY)
  ctx.lineTo(offsetX, offsetY)
  ctx.stroke()
  ;[lastX, lastY] = [offsetX, offsetY]

}

function stopDrawing (e) { isDrawing = false }

