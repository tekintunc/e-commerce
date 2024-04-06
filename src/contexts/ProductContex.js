import { createContext, useEffect, useState } from 'react';
import { swalToDelete } from '../uties/swalToDelete';
import { toast } from 'react-toastify';
import showToast from '../uties/showToast';

const ProductContextProvider = ({ children }) => { // Contex yapısı oluşturuldu.
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  const API_URL = process.env.REACT_APP_API_ULR

  useEffect(() => {  // useEffect ile database den API uRL ile dataları elde ettik. Defaul methot ='GET'
    const getProductList = async () => {
      setLoading(true);
      try {
      const response = await fetch(`${API_URL}/products`); //
      const data = await response.json();
      setProductList(data);
      } catch (error) {
        setError(' Error! data can not downloaded.')
        showToast(' Error! data can not downloaded.','error')             
       }
       setLoading(false);
    };
    getProductList(); // Fonksiyon en sonunda çağırılır.
  }, []); // Burdaki boş dizi ULR ile Data alma işlemini yalnızca bir defa yap demektir.
  const addProduct = async (pProduct) => { // CRUD operasyonlarından Read yani 'POST' HTTP Methots.
    try {
      const response = await fetch(`${API_URL}/products`,{
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
      },
      body: JSON.stringify(pProduct),
    });   
    const data = await response.json();   
    setProductList([...productList,data]);
    showToast(' Product successfuly added!');   
    } catch (error) {
      showToast(' Error! data can not added.', 'error');       
    }    
  };
  const deleteProduct = async (pProductId) => { // CRUD operasyonlarından Delete yani 'DELETE' HTTP Methots. 
   try {
    const status = await swalToDelete();
    if(status) {
      await fetch(`${API_URL}/products/${pProductId}`,{
      method:'DELETE'
    });    
    const filteredProduct = productList.filter((product) => product.id !== pProductId);
    setProductList(filteredProduct);
    showToast(' Product successfuly deleted!');
  };
   } catch (error) {
    showToast(' Error! data can not deleted.', 'error');
    }
  };

  const updateProduct = async(pProduct) =>{ // CRUD operasyonlarından Update yani 'PUT' HTTP Methots.
    const {id, name, description} = pProduct;
    try {
      const response = await fetch(`${API_URL}/products/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type': 'application/json',
      },
      body: JSON.stringify({name,description}),
    });   
    const data = await response.json();
    const filteredProductList = productList.filter((product) => product.id !==id);
    setProductList([...filteredProductList,data]);  
    showToast('Product successfuly updated!');   
    } catch (error) {
      showToast('Error! data can not updated.', 'error');          
    }
  };
// Bu Contex te oluşturulan ve diger componentlerde kullanılmak istenen her element aşağıda export edilir.
  return <ProductContext.Provider value={{ productList, addProduct, deleteProduct, updateProduct, loading, error}}>{children}</ProductContext.Provider>;
};

export default ProductContextProvider;
export const ProductContext = createContext();

 