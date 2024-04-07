import { useContext, useState } from 'react';
import TableCategoryRow from './TableCategoryRow';
import { CategoryContext } from '../../contexts/CategoryContext';  // sol taraftaki bölüm gerekli import işlemlerinin yapıldığı kısımdır.
import AddCategoryModal from './AddCategoryModal';
import UpdateCategoryModal from './UpdateCategoryModal';
import Alert from '../../components/Alert';

const Category = () => { //Category adında bir RAFCE oluşturduk. Category sayfasındaki bütün operasyon bu componentten Yönetilecek.
  const { categoryList, loading ,error } = useContext(CategoryContext); // CategoryContex'te oluşturduğumuz CategoryList Objesini useContex kullanarak import ettik.
  const [id,setId] = useState('') // id yi manipüle edebileceğimiz id state.
  const [name,setName] = useState('') // name yi manipüle edebileceğimiz name state.
  const [description,setDescription] = useState('') // description u manipüle ettiğimiz state


  const openUpdateModal = (pId, pName, pDescription) => {
   setId(pId);
   setName(pName);
   setDescription(pDescription);

  };
// hallo
  const categoryListTemplate = categoryList.map((category) => { // CategoryList i render edecek template. 
    return (
      <TableCategoryRow
        key={category.id}
        category={category}
        openUpdateModal= {openUpdateModal}
      />
    );
  });
  
  if(error) {
    return <div className='container'>
    <div className='row mt-5'>
    <div 
    className="alert alert-danger" 
    role="alert">
  {error}
  </div>
      </div>
    </div>

  };

  return (
    <>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col'>
            <button
              className='btn btn-primary'
              data-bs-toggle='modal'
              data-bs-target='#addCategory'
            >
              Add Category
            </button>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col'>
            {categoryList.length === 0 ? (<Alert message=' Not found category!'/>) : (<table className='table table-bordered table-hover table-striped'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{categoryListTemplate}</tbody>
            </table>)}            
          </div>
        </div>
      </div>

      {/* Add Modal */}
      <AddCategoryModal />

      {/* Update Modal */}
     <UpdateCategoryModal  
     id={id}      
     name={name} 
     description={description} 
     setName={setName}
     setDescription={setDescription}

     
     />
    </>
  );
};

export default Category;
