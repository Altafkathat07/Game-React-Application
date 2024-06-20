import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const alertMessage = (options) => {
    const {
      title = 'Alert',
      text = '',
      icon = 'info',
      showCancelButton = false,
      confirmButtonText = 'OK',
      cancelButtonText = 'Cancel',
      customClass = {},
      buttonsStyling = false,
      callback = () => {},
    } = options;
  
    MySwal.fire({
      title,
      text,
      icon,
      showCancelButton,
      confirmButtonText,
      cancelButtonText,
      customClass: {
        popup: 'custom-popup',
        title: 'custom-title',
        icon: 'custom-icon',
        htmlContainer: 'custom-html-container',
        confirmButton: 'btn btn-success custom-confirm-button',
        cancelButton: 'btn btn-danger custom-cancel-button',
        ...customClass,
      },
      buttonsStyling,
    }).then((result) => {
      callback(result);
      window.location.reload();
    });
  };
  
  export default alertMessage;
