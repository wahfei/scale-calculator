import './App.css';
import {useState, useEffect} from "react";
import Arrow from './arrow.svg'


function App() {

    const [formData, setFormData] = useState({
        ratioOne: 1, ratioTwo: 1, scaleFrom: '', scaleTo: '', scaleInput: 0
    })

    const [convertedScale, setConvertedScale] = useState(0);


    useEffect(() => (
        calculateScale()
    ));


    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }


    function calculateScale() {

        let convertToDisplay = 0;

        // MM to All

        if (formData.scaleFrom === "mm" && formData.scaleTo === "mm") {
            convertToDisplay = formData.scaleInput * 1;
        }
        if (formData.scaleFrom === "mm" && formData.scaleTo === "cm") {
            convertToDisplay = formData.scaleInput / 10;
        }
        if (formData.scaleFrom === "mm" && formData.scaleTo === "meter") {
            convertToDisplay = formData.scaleInput / 1000;
        }
        if (formData.scaleFrom === "mm" && formData.scaleTo === "km") {
            convertToDisplay = formData.scaleInput / 1000000;
        }
        if (formData.scaleFrom === "mm" && formData.scaleTo === "inches") {
                convertToDisplay = formData.scaleInput / 25.4 ;
        }
        if (formData.scaleFrom === "mm" && formData.scaleTo === "feet") {
            convertToDisplay = formData.scaleInput / 304.8;
        }

        // CM to All

        if (formData.scaleFrom === "cm" && formData.scaleTo === "mm") {
            convertToDisplay = formData.scaleInput * 10;
        }
        if (formData.scaleFrom === "cm" && formData.scaleTo === "cm") {
            convertToDisplay = formData.scaleInput;
        }
        if (formData.scaleFrom === "cm" && formData.scaleTo === "meter") {
            convertToDisplay = formData.scaleInput / 100;
        }
        if (formData.scaleFrom === "cm" && formData.scaleTo === "km") {
            convertToDisplay = formData.scaleInput / 100000;
        }
        if (formData.scaleFrom === "cm" && formData.scaleTo === "inches") {
            convertToDisplay = formData.scaleInput / 2.54;
        }
        if (formData.scaleFrom === "cm" && formData.scaleTo === "feet") {
            convertToDisplay = formData.scaleInput / 30.48;
        }


        // Meter to All
        if (formData.scaleFrom === "meter" && formData.scaleTo === "mm") {
            convertToDisplay = formData.scaleInput * 1000;
        }
        if (formData.scaleFrom === "meter" && formData.scaleTo === "cm") {
            convertToDisplay = formData.scaleInput * 100;
        }
        if (formData.scaleFrom === "meter" && formData.scaleTo === "meter") {
            convertToDisplay = formData.scaleInput;
        }
        if (formData.scaleFrom === "meter" && formData.scaleTo === "km") {
            convertToDisplay = formData.scaleInput / 1000;
        }
        if (formData.scaleFrom === "meter" && formData.scaleTo === "inches") {
            convertToDisplay = formData.scaleInput * 39.3700787;
        }
        if (formData.scaleFrom === "meter" && formData.scaleTo === "feet") {
            convertToDisplay = formData.scaleInput * 3.2808399;
        }

        // KM to All
        if (formData.scaleFrom === "km" && formData.scaleTo === "mm") {
            convertToDisplay = formData.scaleInput * 1000000;
        }
        if (formData.scaleFrom === "km" && formData.scaleTo === "cm") {
            convertToDisplay = formData.scaleInput * 100000;
        }
        if (formData.scaleFrom === "km" && formData.scaleTo === "meter") {
            convertToDisplay = formData.scaleInput * 1000;
        }
        if (formData.scaleFrom === "km" && formData.scaleTo === "km") {
            convertToDisplay = formData.scaleInput;
        }
        if (formData.scaleFrom === "km" && formData.scaleTo === "inches") {
            convertToDisplay = formData.scaleInput * 39370.0787;
        }
        if (formData.scaleFrom === "km" && formData.scaleTo === "feet") {
            convertToDisplay = formData.scaleInput * 3280.8399;
        }

        // Inches to All
        if (formData.scaleFrom === "inches" && formData.scaleTo === "mm") {
            convertToDisplay = formData.scaleInput * 25.4;
        }
        if (formData.scaleFrom === "inches" && formData.scaleTo === "cm") {
            convertToDisplay = formData.scaleInput * 2.54;
        }
        if (formData.scaleFrom === "inches" && formData.scaleTo === "meter") {
            convertToDisplay = formData.scaleInput / 39.3700787;
        }
        if (formData.scaleFrom === "inches" && formData.scaleTo === "km") {
            convertToDisplay = formData.scaleInput / 39370.0787;
        }
        if (formData.scaleFrom === "inches" && formData.scaleTo === "inches") {
            convertToDisplay = formData.scaleInput;
        }
        if (formData.scaleFrom === "inches" && formData.scaleTo === "feet") {
            convertToDisplay = formData.scaleInput / 12;
        }

        // Feet to All
        if (formData.scaleFrom === "feet" && formData.scaleTo === "mm") {
            convertToDisplay = formData.scaleInput * 304.8;
        }
        if (formData.scaleFrom === "feet" && formData.scaleTo === "cm") {
            convertToDisplay = formData.scaleInput * 30.48;
        }
        if (formData.scaleFrom === "feet" && formData.scaleTo === "meter") {
            convertToDisplay = formData.scaleInput * 0.3048;
        }
        if (formData.scaleFrom === "feet" && formData.scaleTo === "km") {
            convertToDisplay = formData.scaleInput / 3280.8399;
        }
        if (formData.scaleFrom === "feet" && formData.scaleTo === "inches") {
            convertToDisplay = formData.scaleInput * 12;
        }
        if (formData.scaleFrom === "feet" && formData.scaleTo === "feet") {
            convertToDisplay = formData.scaleInput;
        }


        if (convertToDisplay !== 0){
            let finalResult
            getRatioScale(convertToDisplay);
            finalResult = convertToDisplay * formData.ratioOne / formData.ratioTwo;
            setConvertedScale(finalResult.toFixed(4));
        }else{
            setConvertedScale(0);
        }

    }


    function getRatioScale(calculated) {

    }


    return (
        <div id="converterContainer">
            <h1>Scale Converter</h1>

            <div className="ratio-container">
                <input type="number" name="ratioOne" onChange={handleChange} value={formData.ratioOne}/>
                <input type="number" name="ratioTwo" onChange={handleChange} value={formData.ratioTwo}/>
            </div>

            <div className="scale-container">
                <div className="selection-container">
                    <select name="scaleFrom" value={formData.scaleFrom} onChange={handleChange}>
                        <option value="">--Measurement--</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                        <option value="meter">meter</option>
                        <option value="km">km</option>
                        <option value="inches">inches</option>
                        <option value="feet">feet</option>
                    </select>
                    <select name="scaleTo" value={formData.scaleTo} onChange={handleChange}>
                        <option value="">--Measurement--</option>
                        <option value="mm">mm</option>
                        <option value="cm">cm</option>
                        <option value="meter">meter</option>
                        <option value="km">km</option>
                        <option value="inches">inches</option>
                        <option value="feet">feet</option>
                    </select>
                    <img src={Arrow} alt="" className="arrow-right-img"/>
                </div>
                <div className="userInput-container">
                    <input type="number" name="scaleInput" onChange={handleChange}/>
                    <p>{formData.scaleFrom}</p>
                    <h6>Real Length</h6>
                </div>
            </div>

            <div className="output-container">
                <p className="output-text">{convertedScale} {formData.scaleTo}</p>
                <h6>Scale Length</h6>
            </div>

        </div>
    );
}

export default App;
