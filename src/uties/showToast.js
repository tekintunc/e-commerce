import { toast } from 'react-toastify';


/**
 * 
 * @param {string} pMassege
 * You can use that options in this function. 
 * options : success, error, info, warn 
 * @param {string} pType 
 */
const showToast =(pMassege, pType= "success") => {
    toast[pType](pMassege, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",          
    });
};
  
export default showToast