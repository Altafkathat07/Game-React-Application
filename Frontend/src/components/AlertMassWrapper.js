import Swal from 'sweetalert2';

export const showAlert = (text) => {
  Swal.fire({
    text: text,
    showConfirmButton: false,
    timer: 2000 
  });
};
