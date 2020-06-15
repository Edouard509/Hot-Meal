import React, { Component } from 'react'
import './EditDish.css'
import { getOneDish } from '../services/dish'

export default class EditDish extends Component {
  state = {
    name: "",
    image: ""
  }
  async componentDidMount() {
    let id = this.props.match.params.id
    let recipe = await getOneDish(id)
    let { name, image } = recipe
    this.setState({ name, image })
    console.log(this.props)
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value

    })
  }


  render() {
    const { name, image } = this.state;
    const { editDish, history } = this.props;
    return (
      <div className="form-container">
        <form onSubmit={(e) => {
          e.preventDefault();
          editDish(this.props.match.params.id, this.state);
          history.push('/dishes');
          this.setState({
            name: "",
            image: ""
          })
        }}>
          <hr />
          <h3>Edit Dish</h3>
          <label htmlFor="name">Name:</label>
          <input
            className="edit-name"
            id="id"
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />

          <label htmlFor="image">image:</label>
          <input
            className="edit-image"
            id="id"
            name="image"
            type="text"
            value={image}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div >
    )
  }
}
