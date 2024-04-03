import React, { useContext } from 'react';
import { CategoryContext } from '../../contexts/CategoryContext';

const TableCategoryRow = ({ category,  openUpdateModal }) => {

  const {deleteCategory,} = useContext(CategoryContext);
  return (
    <>
      <tr>
        <th>{category.id}</th>
        <td>{category.name}</td>
        <td>{category.description}</td>
        <td>
          <i
            className='bi bi-pencil-square text-success fs-4 me-3'
            data-bs-toggle='modal'
            data-bs-target='#updateCategory'
            onClick={() => openUpdateModal(category.id,category.name, category.description)}
          ></i>
          <i className='bi bi-trash text-danger fs-4'
           onClick={() => deleteCategory(category.id)}
           ></i>
        </td>
      </tr>
    </>
  );
};

export default TableCategoryRow;
