import { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import { MenuItem } from '../../models/Menu'
import { useAppDispatch } from '../hooks/hooks'
import * as actions from '../actions/menu'

function AddMenuItemForm() {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({} as MenuItem)

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    dispatch(actions.addMenuItemThunk(formData))
  }

  return (
    <>
      <div id="form-container">
        <h2>Add New Menu Item</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="item">Item Name:</label>
          <input id="item" type="text" name="item" onChange={handleChange} />
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            name="price"
            type="number"
            onChange={handleChange}
          />
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            name="description"
            type="text"
            onChange={handleChange}
          />
          <label htmlFor="image">Image:</label>
          <input id="image" name="image" type="text" onChange={handleChange} />
          <input id="submit-btn" type="submit" value="Add Item" />
        </form>
      </div>
    </>
  )
}

export default AddMenuItemForm
