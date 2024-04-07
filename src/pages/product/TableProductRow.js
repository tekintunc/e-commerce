import React, { useContext } from 'react'
import { CategoryContext } from '../../contexts/CategoryContext'
import { ProductContext } from '../../contexts/ProductContex'

const TableProductRow = ({product}) => {

 const { getCategoryNameById } = useContext(CategoryContext)
 const { deleteProduct } = useContext(ProductContext)
  return (
    <tr>
        <th> {product.id} </th>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.description}</td>
        <td>{product.imageUrl}</td>
        <td>{getCategoryNameById(product.categoryId)}</td>
       <td>
          <i
            className='bi bi-pencil-square text-success fs-4 me-3'
            data-bs-toggle='modal'
            data-bs-target='#updateProduct'
            onClick={() => openUpdateModal(product.id,product.name, product.description,product.imageUrl,product.categoryId)}          
          ></i>
          <i className='bi bi-trash text-danger fs-4'
          onClick={() => deleteProduct(product.id)}         
           ></i>
        </td>
      </tr>
  )
}

export default TableProductRow