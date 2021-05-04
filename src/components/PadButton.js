import React from 'react'
import '../Styles/PadButton.css'

class PadButton extends React.Component {
  constructor(props) {
    super(props)

    // set the initial background color from props
    this.state = {
      bgColor: this.props.bgColor
    }
  }

  // set the drag & drop data to the current bgColor
  onDrag = e => {
    e.dataTransfer.setData('bgColor', this.state.bgColor)
  }

  render() {
    return (
      <div
        className='PadButton'
        draggable='true'
        // set background color to state
        style={{ backgroundColor: this.state.bgColor }}
        // event listener for drag & drop
        onDragStart={this.onDrag}>
        <div className='PadButton-text'>{this.props.text}</div>
      </div>
    )
  }
}

export default PadButton