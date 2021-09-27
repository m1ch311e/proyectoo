function feliz () {
    let Aire = 0
    let Luz = 0
    if (true) {
        basic.showIcon(IconNames.Asleep)
        basic.showString("¿tengo AGUA?")
    } else if (Luz) {
        basic.showIcon(IconNames.Meh)
        basic.showString("¿tengo LUZ?")
    } else if (Aire) {
        basic.showIcon(IconNames.Tortoise)
        basic.showString("¿tengo AIRE?")
    }
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showIcon(IconNames.Happy)
}
basic.forever(function () {
	
})
