import React from 'react'
import { useContext, useState } from 'react'
import { ProductContext } from "../../contexts/ProductContex";
import { CategoryContext } from '../../contexts/CategoryContext';

const AddProductModal = () => {
  const {addProduct} = useContext(ProductContext);
  const {categoryList} = useContext(CategoryContext);
    
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const categorySelectOptions = categoryList.map((category) => {
    return <option key={category.id} value={category.id}> {category.name} </option>
  });

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
          <select class="form-select" 
          value={categoryId}
          onChange={(e)=>setCategoryId(e.target.value)}aria-label="Default select example">
          
            <option value="" selected>Select Category</option>
            {categorySelectOptions}
            
          </select>
          </div>
          <div className='mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Name' 
              value={name}
              onChange={(e)=>setName(e.target.value)}             
            />
          </div>
          <div className='mb-3'>
            <input
              type='number'
              className='form-control'
              placeholder='Price'
              value={price}
              onChange={(e)=>setPrice(e.target.value)}              
            />
          </div>
          <div className='mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Description'
              value={description}
              onChange={(e)=>setDescription(e.target.value)}              
            />
          </div>
          <div className='mb-3'>
            <input
              type='file'
              className='form-control'
              placeholder='Image'
              value={imageUrl}
              onChange={(e)=>setImageUrl(e.target.value)}              
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
            onClick={() => addProduct({name, price, description, imageUrl, categoryId})}
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