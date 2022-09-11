import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './style.css'


type Props = {
  saleId: number;
}

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
      toast.info("SMS enviado com sucesso :P")
    });
  
}

function NotificationButton({saleId}: Props) {

  return (
    <>
      <div className="dsmeta-red-btn-container" onClick={() => handleClick(saleId)}>
        <div className="dsmeta-red-btn">
          <img src={icon} alt="Notificar" />
        </div>
      </div>
    </>
  )
}

export default NotificationButton;
