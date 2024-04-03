import Swal from 'sweetalert2'


const swalToDelete = async () => {
    const result = await Swal.fire({
        title: "Are you sure?",
       
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });
      if (result.isConfirmed){
        return true;
      } else{
        return false;
      }
};

export {swalToDelete};