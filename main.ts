let bornin = control.millis()
let previewStateAPressed = input.buttonIsPressed(Button.A)

let makej = function () { 
    if (input.buttonIsPressed(Button.A)) {
        if (!previewStateAPressed) 
        {
            bornin = control.millis()
            previewStateAPressed = true
        }
    } else {
        if (previewStateAPressed) {
            basic.showNumber (control.millis() - bornin)
            previewStateAPressed = false
        }
    }
}

while (true) { 
    makej()
}