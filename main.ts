input.onButtonPressed(Button.A, function () {
    Střel.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    Střel.move(1)
})
function Vytvor () {
    Střel = game.createSprite(2, 4)
    Loď = game.createSprite(randint(0, 4), 0)
    Loď.turn(Direction.Left, 90)
}
let Loď: game.LedSprite = null
let Střel: game.LedSprite = null
game.setScore(5)
Vytvor()
basic.forever(function () {
    Loď.move(-1)
    basic.pause(500)
})
basic.forever(function () {
    if (Střel.isTouching(Loď)) {
        Střel.delete()
        Loď.delete()
        Vytvor()
        game.addScore(1)
        basic.showString("" + (game.score()))
        basic.pause(700)
    }
    if (Loď.get(LedSpriteProperty.Y) == 4) {
        Loď.delete()
        Střel.delete()
        Vytvor()
        game.addScore(-1)
        basic.showString("" + (game.score()))
        basic.pause(700)
    }
    if (game.score() == 100) {
        basic.showString("WINNER")
        basic.pause(500)
        game.gameOver()
    }
    if (game.score() == 0) {
        basic.showString("LOSER")
        basic.pause(500)
        game.gameOver()
    }
})
