import { createContext, useEffect, useState } from 'react';
import { swalToDelete } from '../uties/swalToDelete';
import { toast } from 'react-toastify';
import showToast from '../uties/showToast';

const CategoryContextProvider = ({ children }) => { // Contex yapısı oluşturuldu.
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  const API_URL = process.env.REACT_APP_API_ULR

  useEffect(() => {  // useEffect ile database den API uRL ile dataları elde ettik. Defaul methot ='GET'
    const getCategoryList = async () => {
      setLoading(true);
      try {
      const response = await fetch(`${API_URL}/categories`); //
      const data = await response.json();
      setCategoryList(data);
      } catch (error) {
        setError(' Error! data can not downloaded.')
        showToast(' Error! data can not downloaded.','error')             
       }
       setLoading(false);
    };
    getCategoryList(); // Fonksiyon en sonunda çağırılır.
  }, []); // Burdaki boş dizi ULR ile Data alma işlemini yalnızca bir defa yap demektir.
  const addCategory = async (pCategory) => { // CRUD operasyonlarından Read yani 'POST' HTTP Methots.
    try {
      const response = await fetch(`${API_URL}/categories`,{
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
      },
      body: JSON.stringify(pCategory),
    });   
    const data = await response.json();   
    setCategoryList([...categoryList,data]);
    showToast(' Category successfuly added!');   
    } catch (error) {
      showToast(' Error! data can not added.', 'error');       
    }    
  };
  const deleteCategory = async (pCategoryId) => { // CRUD operasyonlarından Delete yani 'DELETE' HTTP Methots. 
   try {
    const status = await swalToDelete();
    if(status) {
      await fetch(`${API_URL}/categories/${pCategoryId}`,{
      method:'DELETE'
    });    
    const filteredCategory = categoryList.filter((category) => category.id !== pCategoryId);
    setCategoryList(filteredCategory);
    showToast(' Category successfuly deleted!');
  };
   } catch (error) {
    showToast(' Error! data can not deleted.', 'error');
    }
  };

  const updateCategory = async(pCategory) =>{ // CRUD operasyonlarından Update yani 'PUT' HTTP Methots.
    const {id, name, description} = pCategory;
    try {
      const response = await fetch(`${API_URL}/categories/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type': 'application/json',
      },
      body: JSON.stringify({name,description}),
    });   
    const data = await response.json();
    const filteredCategoryList = categoryList.filter((category) => category.id !==id);
    setCategoryList([...filteredCategoryList,data]);  
    showToast('Category successfuly updated!');   
    } catch (error) {
      showToast('Error! data can not updated.', 'error');          
    }
  };

  const getCategoryNameById = (pCategoryId) => {
    const category = categoryList.find(category => category.id === pCategoryId)
    return category.name
  };
// Bu Contex te oluşturulan ve diger componentlerde kullanılmak istenen her element aşağıda export edilir.
  return <CategoryContext.Provider value={{ categoryList, addCategory, deleteCategory, updateCategory, loading, error,getCategoryNameById }}>{children}</CategoryContext.Provider>;
};

export default CategoryContextProvider;
export const CategoryContext = createContext();

 