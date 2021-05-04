
import React, {useState} from 'react'
import PadButton from './PadButton'
import '../Styles/PadInput.css'

// list of colors for rendering
const colors = ['red', 'green', 'grey', 'purple', 'pink', 'lime']

const PadInput = () => {
  const [edit, setEdit] = useState(true)

  function isEdit() {
    if (edit){
      setEdit(false)
    } else {
      setEdit(true)
    }
  }

  if (edit){
    return (
      <div className="PadInput-Container">
        <div className='PadInput'>
          {/* map over the list of colors and render them */}
          {colors.map((color, idx) => (
            <PadButton text={idx + 1} bgColor={color} />
          ))}
        </div>
        <button onClick={isEdit} style={{width:"100px"}}>Edit</button>
      </div>
    )
  } else{
    return (
      <div>
      <button onClick={isEdit} style={{width:"100px"}}>Edit</button>
      <h3>Not Editable</h3>
      </div>
    )
  }
    

}
export default PadInput;