let number1 = 4
let previewStateAPressedA = input.buttonIsPressed(Button.A)
let previewStateAPressedB = input.buttonIsPressed(Button.B)

let makej2A = () => {
    number1 -= 1
    whaleysans.showNumber(number1)
}

let makej2B = () => {
    number1 += 1
    whaleysans.showNumber(number1)
}

let makej = function () { 
    if (input.buttonIsPressed(Button.A)) {
        //let actualStateA = true
       //if (previewStateAPressed ==  false && actualStateA == true)
        if (!previewStateAPressedA) 
        {
            number1 -= 1
            previewStateAPressedA = true
        }
    } else {
        previewStateAPressedA = false
    }

    if (input.buttonIsPressed(Button.B))
        
        if (!previewStateAPressedB)
    {
        number1 += 1
        previewStateAPressedB = true 
    } 
    else {
        previewStateAPressedB = false
    }
    whaleysans.showNumber(number1)
}


input.onButtonPressed(Button.A, makej2A) //registrace k události
input.onButtonPressed(Button.B, makej2B)

