import { useNavigate } from 'react-router-dom';
import './Boutton.css';

function Boutton({ to, children, type = 'button' }) {
  const navigate = useNavigate();

  return (
    <button
      type={type}
      onClick={() => navigate(to)}
      className="btn">{children}</button>
  );
}

export default Boutton;