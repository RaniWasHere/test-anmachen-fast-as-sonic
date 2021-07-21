def Frame_2():
    led.plot_brightness(0, 0, _4)
    led.plot_brightness(1, 0, _6)
    led.plot_brightness(0, 1, _6)
    led.plot_brightness(0, 2, _8)
    led.plot_brightness(1, 1, _8)
    led.plot_brightness(2, 0, _8)
    led.plot_brightness(0, 3, _10)
    led.plot_brightness(1, 2, _10)
    led.plot_brightness(2, 1, _10)
    led.plot_brightness(3, 0, _10)
    led.plot_brightness(4, 0, _8)
    led.plot_brightness(3, 1, _8)
    led.plot_brightness(2, 2, _8)
    led.plot_brightness(1, 3, _8)
    led.plot_brightness(0, 4, _8)
    led.plot_brightness(4, 1, _6)
    led.plot_brightness(3, 2, _6)
    led.plot_brightness(2, 3, _6)
    led.plot_brightness(1, 4, _6)
    led.plot_brightness(4, 2, _4)
    led.plot_brightness(3, 3, _4)
    led.plot_brightness(2, 4, _4)
    led.plot_brightness(3, 4, _6)
    led.plot_brightness(4, 3, _6)
    led.plot_brightness(4, 4, _8)
def Frame_1():
    led.plot_brightness(0, 0, _2)
    led.plot_brightness(0, 1, _4)
    led.plot_brightness(1, 0, _4)
    led.plot_brightness(2, 0, _6)
    led.plot_brightness(1, 1, _6)
    led.plot_brightness(0, 2, _6)
    led.plot_brightness(3, 0, _8)
    led.plot_brightness(1, 2, _8)
    led.plot_brightness(2, 1, _8)
    led.plot_brightness(0, 3, _8)
    led.plot_brightness(0, 4, _10)
    led.plot_brightness(1, 3, _10)
    led.plot_brightness(2, 2, _10)
    led.plot_brightness(3, 1, _10)
    led.plot_brightness(4, 0, _10)
    led.plot_brightness(1, 4, _8)
    led.plot_brightness(2, 3, _8)
    led.plot_brightness(3, 2, _8)
    led.plot_brightness(4, 1, _8)
    led.plot_brightness(2, 4, _6)
    led.plot_brightness(3, 3, _6)
    led.plot_brightness(4, 2, _6)
    led.plot_brightness(3, 4, _4)
    led.plot_brightness(4, 3, _4)
    led.plot_brightness(4, 4, _2)
_10 = 0
_8 = 0
_6 = 0
_4 = 0
_2 = 0
_1 = 25.5
_2 = 51
_3 = 76.5
_4 = 102
_5 = 127.5
_6 = 153
_7 = 178.5
_8 = 274
_9 = 229.5
_10 = 255
Frame_1()
basic.pause(100)
Frame_2()

def on_forever():
    pass
basic.forever(on_forever)
