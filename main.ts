function Frame_2 () {
    led.plotBrightness(0, 0, _4)
    led.plotBrightness(1, 0, _6)
    led.plotBrightness(0, 1, _6)
    led.plotBrightness(0, 2, _8)
    led.plotBrightness(1, 1, _8)
    led.plotBrightness(2, 0, _8)
    led.plotBrightness(0, 3, _10)
    led.plotBrightness(1, 2, _10)
    led.plotBrightness(2, 1, _10)
    led.plotBrightness(3, 0, _10)
    led.plotBrightness(4, 0, _8)
    led.plotBrightness(3, 1, _8)
    led.plotBrightness(2, 2, _8)
    led.plotBrightness(1, 3, _8)
    led.plotBrightness(0, 4, _8)
    led.plotBrightness(4, 1, _6)
    led.plotBrightness(3, 2, _6)
    led.plotBrightness(2, 3, _6)
    led.plotBrightness(1, 4, _6)
    led.plotBrightness(4, 2, _4)
    led.plotBrightness(3, 3, _4)
    led.plotBrightness(2, 4, _4)
    led.plotBrightness(3, 4, _2)
    led.plotBrightness(4, 3, _2)
    led.plotBrightness(4, 4, _4)
}
function Frame_1 () {
    led.plotBrightness(0, 0, _2)
    led.plotBrightness(0, 1, _4)
    led.plotBrightness(1, 0, _4)
    led.plotBrightness(2, 0, _6)
    led.plotBrightness(1, 1, _6)
    led.plotBrightness(0, 2, _6)
    led.plotBrightness(3, 0, _8)
    led.plotBrightness(1, 2, _8)
    led.plotBrightness(2, 1, _8)
    led.plotBrightness(0, 3, _8)
    led.plotBrightness(0, 4, _10)
    led.plotBrightness(1, 3, _10)
    led.plotBrightness(2, 2, _10)
    led.plotBrightness(3, 1, _10)
    led.plotBrightness(4, 0, _10)
    led.plotBrightness(1, 4, _8)
    led.plotBrightness(2, 3, _8)
    led.plotBrightness(3, 2, _8)
    led.plotBrightness(4, 1, _8)
    led.plotBrightness(2, 4, _6)
    led.plotBrightness(3, 3, _6)
    led.plotBrightness(4, 2, _6)
    led.plotBrightness(3, 4, _4)
    led.plotBrightness(4, 3, _4)
    led.plotBrightness(4, 4, _2)
}
function Frame_3 () {
    led.plotBrightness(0, 0, _6)
    led.plotBrightness(1, 0, _8)
    led.plotBrightness(0, 1, _8)
    led.plotBrightness(1, 1, _10)
    led.plotBrightness(2, 0, _10)
    led.plotBrightness(0, 2, _10)
    led.plotBrightness(3, 0, _8)
    led.plotBrightness(2, 1, _8)
    led.plotBrightness(1, 2, _8)
    led.plotBrightness(0, 3, _8)
    led.plotBrightness(3, 1, _6)
    led.plotBrightness(4, 0, _6)
    led.plotBrightness(2, 2, _6)
    led.plotBrightness(1, 3, _6)
    led.plotBrightness(0, 4, _6)
    led.plotBrightness(4, 1, _4)
    led.plotBrightness(3, 2, _4)
    led.plotBrightness(2, 3, _4)
    led.plotBrightness(1, 4, _4)
    led.plotBrightness(2, 4, _2)
    led.plotBrightness(3, 3, _2)
    led.plotBrightness(4, 2, _2)
    led.plotBrightness(3, 4, _4)
    led.plotBrightness(4, 3, _4)
    led.plotBrightness(4, 4, _6)
}
let _10 = 0
let _8 = 0
let _6 = 0
let _4 = 0
let _2 = 0
let _1 = 25.5
_2 = 51
let _3 = 76.5
_4 = 102
let _5 = 127.5
_6 = 153
let _7 = 178.5
_8 = 274
let _9 = 229.5
_10 = 255
Frame_1()
basic.pause(100)
Frame_2()
basic.pause(100)
Frame_3()
basic.forever(function () {
	
})
