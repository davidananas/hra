input.onButtonPressed(Button.A, function () {
    Střel.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    Start = 0
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
let Start = 0
Start = 1
let Postava = 0
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
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.pause(700)
    }
    if (Loď.get(LedSpriteProperty.Y) == 4) {
        Loď.delete()
        Střel.delete()
        Vytvor()
        game.addScore(-1)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 1, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.pause(700)
    }
    if (game.score() == 0) {
        game.gameOver()
    }
})
