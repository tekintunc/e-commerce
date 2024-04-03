import React, { useContext } from 'react'
import { CategoryContext } from '../../contexts/CategoryContext'

const UpdateCategoryModal = ({id,name,description,setName,setDescription} ) => {

  const {updateCategory} = useContext(CategoryContext);
  return (
    <div
    className='modal fade'
    id='updateCategory'
  >
    <div className='modal-dialog'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h1 className='modal-title fs-5'>Update Category</h1>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='modal'
            aria-label='Close'
          ></button>
        </div>
        <div className='modal-body'>
          <div className='mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Name'
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Description'
              value={description}
              onChange={(e)=> setDescription(e.target.value)}

            />
          </div>
        </div>
        <div className='modal-footer'>
          <button
            type='button'
            className='btn btn-secondary'
            data-bs-dismiss='modal'
          >
            Close
          </button>
          <button
            type='button'
            className='btn btn-primary'
            onClick={() => updateCategory({id, name, description})}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UpdateCategoryModal