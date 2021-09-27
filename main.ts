if (true) {
    basic.showIcon(IconNames.Asleep)
    basic.showString("¿tengo AGUA?")
    basic.pause(500)
    basic.showIcon(IconNames.Meh)
    basic.showString("¿tengo LUZ?")
    basic.pause(500)
    basic.showIcon(IconNames.Tortoise)
    basic.showString("¿tengo AIRE?")
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(200)
    basic.showIcon(IconNames.Happy)
    basic.pause(200)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showIcon(IconNames.Happy)
    basic.pause(200)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(200)
    basic.showIcon(IconNames.Happy)
    basic.pause(200)
}
