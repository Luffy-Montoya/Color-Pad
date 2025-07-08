import { useState } from "react"
import clsx from "clsx"
import { colors } from "./colors"

export default function App(){

    const [redButton, setRedButton] = useState(colors[0])
    const [blueButton, setBlueButton] = useState(colors[1])
    const [yellowButton, setYellowButton] = useState(colors[2])
    const [greenButton, setGreenButton] = useState(colors[3])
    const [purpleButton, setPurpleButton] = useState(colors[4])
    const [orangeButton, setOrangeButton] = useState(colors[5])
    const [brownButton, setBrownButton] = useState(colors[6])
    
    const buttonsArray = [redButton, blueButton, yellowButton, purpleButton, greenButton, orangeButton, brownButton]

    const buttonSetters = {
        Red: setRedButton,
        Blue: setBlueButton,
        Yellow: setYellowButton,
        Green: setGreenButton,
        Purple: setPurpleButton,
        Orange: setOrangeButton,
        Brown: setBrownButton,
    }

    function toggleButton(button) {
        const setter = buttonSetters[button.name]
        setter({ ...button, on: !button.on })  
    }

     const buttonFunctions = {
        Red: toggleRed,
        Blue: toggleBlue,
        Yellow: toggleYellow,
        Green: toggleGreen,
        Purple: togglePurple,
        Orange: toggleOrange,
        Brown: toggleBrown
    }

    function toggleFunction(color){
        const toggleSetter = buttonFunctions[color.name]
        toggleSetter(color)
    }

    function allButtonsOff(){
        for (let i = 0; i < buttonsArray.length; i++){
            const setter = buttonSetters[buttonsArray[i].name]
            setter({...buttonsArray[i], on: false})
        }
    }

    function allButtonsOn(){
        for (let i = 0; i < buttonsArray.length; i++){
            const setter = buttonSetters[buttonsArray[i].name]
            setter({...buttonsArray[i], on: true})
        }
    }

    function toggleRed(color){
        if (redButton.on === false) {
            if (blueButton.on === true) {
                setPurpleButton({...purpleButton, on: true})
            } else {
                setPurpleButton({...purpleButton, on: false})
            }

            if (yellowButton.on === true) {
                setOrangeButton({...orangeButton, on: true})
            } else {
                setOrangeButton({...orangeButton, on: false})
            }

            if (blueButton.on === true && yellowButton.on === true ){
                setBrownButton({...brownButton, on: true})
            } 

        } else {
            setPurpleButton({...purpleButton, on: false})
            setOrangeButton({...orangeButton, on: false})
            setBrownButton({...brownButton, on: false})
        }

        toggleButton(color)
    }

    function toggleBlue(color){
        if (blueButton.on === false) {
            if (redButton.on === true) {
                setPurpleButton({...purpleButton, on: true})
            } else {
                setPurpleButton({...purpleButton, on: false})
            }

            if (yellowButton.on === true) {
                setGreenButton({...greenButton, on: true})
            } else {
                setGreenButton({...greenButton, on: false})
            }

            if (redButton.on === true && yellowButton.on === true ){
                setBrownButton({...brownButton, on: true})
            } 

        } else {
            setPurpleButton({...purpleButton, on: false})
            setGreenButton({...greenButton, on: false})
            setBrownButton({...brownButton, on: false})
        }

        toggleButton(color)
    }

    function toggleYellow(color){
        if (yellowButton.on === false) {
            if (redButton.on === true) {
                setOrangeButton({...orangeButton, on: true})
            } else {
                setOrangeButton({...orangeButton, on: false})
            }

            if (blueButton.on === true) {
                setGreenButton({...greenButton, on: true})
            } else {
                setGreenButton({...greenButton, on: false})
            }

            if (redButton.on === true && blueButton.on === true ){
                setBrownButton({...brownButton, on: true})
            } 

        } else {
            setOrangeButton({...orangeButton, on: false})
            setGreenButton({...greenButton, on: false})
            setBrownButton({...brownButton, on: false})
        }

        toggleButton(color)
    }

    function toggleGreen(color){
        if (greenButton.on === false) {
            setBlueButton({...blueButton, on: true})
            setYellowButton({...yellowButton, on: true})
        } else {
            setBlueButton({...blueButton, on: false})
            setYellowButton({...yellowButton, on: false})
        }

        if (redButton.on === true) {
            allButtonsOn()
        } 

        if (brownButton.on === true) {
            allButtonsOff()
            setRedButton({...redButton, on: true})
        }

        toggleButton(color)
    }

    function togglePurple(color){
        if (purpleButton.on === false) {
            setBlueButton({...blueButton, on: true})
            setRedButton({...redButton, on: true})
        } else {
            setBlueButton({...blueButton, on: false})
            setRedButton({...redButton, on: false})
        }

        if (yellowButton.on === true) {
            allButtonsOn()
        } 

        if (brownButton.on === true) {
            allButtonsOff()
            setYellowButton({...yellowButton, on: true})
        }

        toggleButton(color)
    }

    function toggleOrange(color){
        if (orangeButton.on === false) {
            setYellowButton({...yellowButton, on: true})
            setRedButton({...redButton, on: true})
        } else {
            setYellowButton({...yellowButton, on: false})
            setRedButton({...redButton, on: false})
        }

        if (blueButton.on === true) {
            allButtonsOn()
        } 

        if (brownButton.on === true) {
            allButtonsOff()
            setBlueButton({...blueButton, on: true})
        }

        toggleButton(color)
    }

    function toggleBrown(color){
        if (brownButton.on === false) {
            allButtonsOn()
        } else {
            allButtonsOff()
        }

        toggleButton(color)
    }

    const buttonsMap = buttonsArray.map((button, index) => {
        return (
            <div 
                key={index} 
                className={`${clsx({gray: !button.on})} ${button.name} `}
                onClick={() => {
                    console.log(button.name + " clicked!")
                    toggleFunction(button)
                }}
            >
                {button.name}
            </div>
        )
    })

    return (
        <main>
            <section>
                <header>Color Pad</header>
                <h1>Select the Colors to see their Relationships</h1>
                <div className="buttonsContainer">
                    {buttonsMap}
                </div>
            </section>
        </main>
    )
}