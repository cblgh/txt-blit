var blit = require('.')
var neatLog = require('neat-log')
var chalk = require('chalk')

var app = neatLog(view)
app.use(countTheSeconds)

function view (state) {
  var screen = []

  blit(screen, renderHelloBox(), Math.floor(Math.sin(state.seconds / 5.0) * 10 + process.stdout.columns/2), 3)
  blit(screen, renderTimer(state), 10, 10)

  return screen.join('\n')
}

function renderHelloBox (state) {
  return [
    '|-----------------------|',
    '|                       |',
    '|      HELLO THERE      |',
    '|    ~~~~~~~~~~~~~~~    |',
    '|                       |',
    '|-----------------------|',
  ]
}

function countTheSeconds (state, bus) {
  state.seconds = 0
  setInterval(function () {
    state.seconds++
    bus.emit('render')
  }, 200)
}

function renderTimer (state) {
  var colours = [
    chalk.black,
    chalk.red,
    chalk.green,
    chalk.yellow,
    chalk.blue,
    chalk.magenta,
    chalk.cyan,
    chalk.white,
    chalk.gray,
    chalk.redBright,
    chalk.greenBright,
    chalk.yellowBright,
    chalk.blueBright,
    chalk.magentaBright,
    chalk.cyanBright,
    chalk.whiteBright
  ]

  var colourize = colours[Math.floor(Math.random() * colours.length)]

  return [
    colours[7]('|TIME: ') + colourize(state.seconds) + colours[7](' |')
  ]
}

function renderHelloBox () {
  return [
    '|-----------------------|',
    '|                       |',
    '|      HELLO THERE      |',
    '|    ~~~~~~~~~~~~~~~    |',
    '|                       |',
    '|-----------------------|',
  ]
}

