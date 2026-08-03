import { useNavigate } from 'react-router-dom';
import './Boutton.css';

function Boutton({ to, onClick, children, type = 'button' }) {
  const navigate = useNavigate();

  function handleClick() {
    if (onClick) {
      onClick();
    } else {
      navigate(to);
    }
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      className="btn">{children}</button>
  );
}

export default Boutton;