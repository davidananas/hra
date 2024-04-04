input.onPinPressed(TouchPin.P0, function () {
    if (P0 == 0) {
        Start = 1
        P0 = 1
        sprite = 1
    } else if (P0 == 1) {
        Start = 0
        P0 = 0
        sprite = 0
    }
})
input.onButtonPressed(Button.A, function () {
    Klik += 1
    Střel.move(-1)
})
function Konec () {
    basic.showString("KLIKNUTI ")
    basic.showNumber(Klik)
    sprite = 1
    Loď.delete()
    Střel.delete()
    basic.showString("SCORE")
    basic.showNumber(game.score())
    control.reset()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Konec()
})
input.onPinPressed(TouchPin.P2, function () {
    music.setBuiltInSpeakerEnabled(false)
})
input.onButtonPressed(Button.AB, function () {
    Start = 0
    sprite = 0
})
input.onButtonPressed(Button.B, function () {
    Klik += 1
    Střel.move(1)
})
input.onPinPressed(TouchPin.P1, function () {
    music.setBuiltInSpeakerEnabled(true)
})
function Vytvor () {
    Střel = game.createSprite(2, 4)
    Loď = game.createSprite(randint(0, 4), 0)
    Loď.turn(Direction.Left, 90)
}
let Loď: game.LedSprite = null
let Střel: game.LedSprite = null
let sprite = 0
let Start = 0
let P0 = 0
let Klik = 0
music.setBuiltInSpeakerEnabled(false)
Klik = 0
let Cekej = 500
P0 = 0
Start = 1
let Postava = 0
sprite = 1
game.setScore(1)
Vytvor()
basic.forever(function () {
    Cekej += -1
    basic.pause(1000)
})
basic.forever(function () {
    if (Start == 0) {
        Postava = 1
        while (sprite == 0) {
            Loď.move(-1)
            basic.pause(Cekej)
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
        Konec()
    }
})
