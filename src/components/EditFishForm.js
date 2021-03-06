import React from 'react'
import PropTypes from 'prop-types'

class EditFishForm extends React.Component {

  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }),
    index: PropTypes.string.isRequired,
    updateFish: PropTypes.func.isRequired
  }

  handleChange = (e) => {    
    // update that fish
    // 1.copy the current fish
    const updatedFish = { 
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    }
    this.props.updateFish(this.props.index, updatedFish)
  }

  render() {
    return (
      <div className='fish-edit'>
        <input 
          name='name' 
          type='text' 
          onChange={this.handleChange}
          value={this.props.fish.name} 
        />
        <input 
          name='price' 
          type='text' 
          onChange={this.handleChange}
          value={this.props.fish.price} 
        />
        <select name='status' type='text' onChange={this.handleChange} value={this.props.fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea 
          name='desc' 
          onChange={this.handleChange} 
          value={this.props.fish.desc}>
        </textarea>
        <input 
          name='image' 
          type='text' 
          onChange={this.handleChange}
          value={this.props.fish.image} 
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>
    )
  }
}

export default EditFishForm