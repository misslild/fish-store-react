import React from "react"
import PropTypes from 'prop-types'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  // constructor() {
  //   super()
  //   this.goToStore = this.goToStore.bind(this)
  // }

  myInput = React.createRef()

  goToStore = (e) => {
  // 1.Stop the form from submitting
    e.preventDefault()
  // 2.Get the text from the input
    const storeName = this.myInput.value.value
  // 3.Change the page to /store/whatever
    this.props.history.push(`/store/${storeName}`)
  }
  
  render() {
    return (
      <form className='store-selector' onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input 
          type='text' 
          ref={this.myInput}
          required 
          placeholder='Store Name'
          defaultValue={getFunName()}  
        />
        <button type='submit'>Visit Store >></button>
      </form>
    )
  }
}


export default StorePicker