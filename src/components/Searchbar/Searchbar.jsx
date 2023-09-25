import { useState, useEffect, useRef } from 'react';


import './Searchbar.css'

import {Multiselect} from 'multiselect-react-dropdown'

function Searchbar() {
  const data = [
    {Symptom: 'Fever',id:1},
    {Symptom: 'Headache',id:2},
    {Symptom: 'Angina',id:3},
    {Symptom: 'Nausea',id:4},
    {Symptom: 'Weakness',id:5},
    {Symptom: 'Palpitation',id:6},
  ];

  const [options] = useState(data);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [submittedOptions, setSubmittedOptions] = useState([]);
  const recognition = useRef(null);
  const [isRecognitionActive, setIsRecognitionActive] = useState(false);

  const handleSelect = (selectedList) => {
    setSelectedOptions(selectedList);
  };

  const handleRemove = (selectedList) => {
    setSelectedOptions(selectedList);
  };

  const handleSubmit = () => {
    setSubmittedOptions(selectedOptions);
    console.log('Submitted Options:', selectedOptions);
  };

  const toggleRecognition = () => {
    if (isRecognitionActive) {
      recognition.current.stop();
    } else {
      recognition.current = new window.webkitSpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        
        // Split the transcript by commas to get individual options
        const spokenOptions = transcript.toLowerCase().split(' ').map((option) => option.trim());
        console.log(spokenOptions)

        // Match spoken options with available options
        const recognizedOptions = options.filter((option) =>
          spokenOptions.includes(option.Symptom.toLowerCase())
        );

        // Get the IDs of recognized options
        const recognizedIds = recognizedOptions.map((option) => option.id);

        // Filter out the options that are already selected
        const newSelectedOptions = recognizedOptions.filter(
          (option) => !selectedOptions.some((selectedOption) => selectedOption.id === option.id)
        );

        // Update selected options by adding the new options
        setSelectedOptions([...selectedOptions, ...newSelectedOptions]);

        // Programmatically select the recognized options in the Multiselect
        const multiselectContainer = document.querySelector('.multiselect-container');
        if (multiselectContainer) {
          recognizedIds.forEach((id) => {
            const optionElement = multiselectContainer.querySelector(`li[data-id="${id}"]`);
            if (optionElement) {
              optionElement.click(); // Simulate a click to select the option
            }
          });
        }
      };
      recognition.current.start();
    }
    setIsRecognitionActive(!isRecognitionActive);
  };
  
  useEffect(() => {
    return () => {
      if (recognition.current) {
        recognition.current.stop();
      }
    };
  }, []);


  return (
    <div className='symptom-search-card'>
        <div className="symptom-search">
          <Multiselect 
            className='symptom-multiselect'
            options={options} 
            selectedValues={selectedOptions}
            displayValue='Symptom'
            onSelect={handleSelect}
            onRemove={handleRemove}
            placeholder='Enter your symptoms' />
          
          <div className="diagnose-buttons">
          <button className="voice-input" onClick={toggleRecognition}>
            {isRecognitionActive? "Stop":"Voice"}
          </button>
            <button className="symptom-submit" onClick={handleSubmit}>Diagnose</button>
          </div>
        </div>

        <ul>
          {
            submittedOptions.map((option) => (
              <li key={option.id}>{option.Symptom}</li>
            ))
          }
        </ul>
        
    </div>
  )
}


export default Searchbar