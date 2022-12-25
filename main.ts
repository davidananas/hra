input.onButtonPressed(Button.A, function () {
    Střel.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    if (Postava == 0) {
        Start = 0
        sprite = 0
    } else {
        control.reset()
    }
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
    if (sprite == 0) {
        sprite = 1
        Loď.delete()
        Střel.delete()
        game.gameOver()
    }
})
let Loď: game.LedSprite = null
let Střel: game.LedSprite = null
let sprite = 0
let Postava = 0
let Start = 0
Start = 1
Postava = 0
sprite = 1
game.setScore(1)
Vytvor()
basic.forever(function () {
    if (Start == 0) {
        Postava = 1
        while (sprite == 0) {
            Loď.move(-1)
            basic.pause(500)
        }
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
    if (game.score() == 0) {
        game.gameOver()
    }
})
