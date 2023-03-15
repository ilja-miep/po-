input.onButtonPressed(Button.B, function () {
    if (tijd < 5) {
    	
    } else {
        tijd = 0
        servos.P0.setAngle(180)
        angle_P0 = 180
        servos.P1.setAngle(0)
        angle_P1 = 0
    }
})
let tijd = 0
let angle_P0 = 0
let angle_P1 = 0
servos.P0.setAngle(0)
servos.P1.setAngle(180)
servos.P0.setPulse(2500)
servos.P1.setPulse(2500)
angle_P1 = 180
angle_P0 = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    . # # # #
    `)
loops.everyInterval(1000, function () {
    tijd += 1
})
basic.forever(function () {
    if (angle_P0 == 180) {
        angle_P0 = 0
        basic.pause(2500)
        servos.P0.setAngle(0)
    }
})
basic.forever(function () {
    if (angle_P1 == 0) {
        angle_P1 = 180
        basic.pause(2500)
        servos.P1.setAngle(180)
    }
})
