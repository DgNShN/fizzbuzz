let sayi = 0
input.onButtonPressed(Button.A, function () {
    if (0 == sayi % 15) {
        basic.showString("Fizz+Buzz")
    } else if (sayi % 5 == 0) {
        basic.showString("Buzz")
    } else if (sayi % 3 == 0) {
        basic.showString("Fizz")
    }
})
basic.forever(function () {
    for (let index = 0; index <= 30; index++) {
        sayi = index
        basic.showNumber(sayi)
        basic.pause(100)
    }
})
