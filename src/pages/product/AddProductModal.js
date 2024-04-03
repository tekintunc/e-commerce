import React from 'react'

const AddProductModal = () => {
  return (
    <div
    className='modal fade'
    id='addProduct'
  >
    <div className='modal-dialog'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h1 className='modal-title fs-5'>Add Product</h1>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='modal'
            aria-label='Close'
          ></button>
        </div>
        <div className='modal-body'>
        <div className='mb-3'>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Category</option>
            <option value="1">Electronic</option>
            <option value="2">home</option>
          </select>
          </div>
          <div className='mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Name'              
            />
          </div>
          <div className='mb-3'>
            <input
              type='number'
              className='form-control'
              placeholder='Price'              
            />
          </div>
          <div className='mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Description'              
            />
          </div>
          <div className='mb-3'>
            <input
              type='file'
              className='form-control'
              placeholder='Image'              
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
            data-bs-dismiss='modal'
          >
            Save
          </button >
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddProductModal