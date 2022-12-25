input.onButtonPressed(Button.A, function () {
    Střel.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    sprite = 0
})
input.onButtonPressed(Button.B, function () {
    Střel.move(1)
})
function Vytvor () {
    Střel = game.createSprite(2, 4)
    Loď = game.createSprite(randint(0, 4), 0)
    Loď.turn(Direction.Left, 90)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    sprite = 1
    Loď.delete()
    Střel.delete()
    game.gameOver()
})
let Loď: game.LedSprite = null
let Střel: game.LedSprite = null
let sprite = 0
sprite = 1
game.setScore(0)
Vytvor()
basic.forever(function () {
    while (sprite == 0) {
        Loď.move(-1)
        basic.pause(500)
    }
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
})
