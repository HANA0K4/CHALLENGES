import React from 'react';
import { useParams,useSearchParams,useNavigate } from 'react-router-dom';

  export const ProductsPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const onLogout = () => {
    navigate('/login', { replace: true });
  };

  return (
    <div>
      <h1>Products Page{id ||1}{searchParams.get('sort')}</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};


