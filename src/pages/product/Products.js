import React, { useContext, useState } from 'react'
import TableProductRow from './TableProductRow';
import  Alert from "../../components/Alert";
import AddProductModal from "./AddProductModal";
import UpdateProductModal from './UpdateProductModal';
import { ProductContext } from '../../contexts/ProductContex';

const Products = () => {

  const {productList} = useContext(ProductContext);
  
  const productListTemplate = productList.map((product) => { // ProductList i render edecek template. 
    return <TableProductRow product={product} />;    
  });

  const openUpdateModal = (pId, pName, pPrice, pDescription,pImageUrl, pCategoryId) => {

  }
  return (
    <>
    <div className='container'>
      <div className='row mt-5'>
        <div className='col'>
          <button
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#addProduct'
          >
            Add Product
          </button>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col'>
          {productList.length === 0 ? (<Alert message=' Not found product!'/>) : (<table className='table table-bordered table-hover table-striped'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>image</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{productListTemplate}</tbody>
          </table>)}            
        </div>
      </div>
    </div>

    {/* Add Modal */}
    <AddProductModal />

    {/* Update Modal */}
   <UpdateProductModal />
  </>
  )
}

export default Products