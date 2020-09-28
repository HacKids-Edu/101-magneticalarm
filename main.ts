let intensidade = input.magneticForce(Dimension.Strength)
basic.clearScreen()
basic.forever(function () {
    if (Math.abs(input.magneticForce(Dimension.Strength) - intensidade) > 20) {
        basic.showIcon(IconNames.Skull)
        music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
    } else {
        basic.clearScreen()
    }
})
