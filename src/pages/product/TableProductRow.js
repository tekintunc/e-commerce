import React from 'react'

const TableProductRow = () => {
  return (
    <tr>
        <th>1</th>
        <td>name</td>
        <td>price</td>
        <td>Description</td>
        <td>image</td>
        <td>Category</td>
       <td>
          <i
            className='bi bi-pencil-square text-success fs-4 me-3'
            data-bs-toggle='modal'
            data-bs-target='#updateProduct'          
          ></i>
          <i className='bi bi-trash text-danger fs-4'         
           ></i>
        </td>
      </tr>
  )
}

export default TableProductRow