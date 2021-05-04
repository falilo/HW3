import React from 'react'
import '../Styles/DesignPad.css'

class DesignPad extends React.Component {
  constructor(props) {
    super(props)

    // set default background color
    this.state = {
      bgColor: 'grey'
    }
  }

  allowDrop = e => {
    e.preventDefault()
  }

  // set the state with the new background color
  // state will rerender with the new color
  drop = e => {
    e.preventDefault()
    const newColor = e.dataTransfer.getData('bgColor')
    this.setState({ bgColor: newColor })
  }

  render() {
    return (
      <div
        className='designpad-button'
        style={{ backgroundColor: this.state.bgColor }}
        // listen for activity when something is dragged and dropped over this element
        onDragOver={this.allowDrop}
        onDrop={this.drop}></div>
    )
  }
}

export default DesignPad