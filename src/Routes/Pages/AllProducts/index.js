import React from 'react';
import { Link } from 'react-router-dom';

import { Products } from './style';

// API
import api from 'axios';

const AllProducts = () => {
  const [erro, setErro] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    async function showAllProducts() {
      try {
        setLoading(true);
        const response = await api.get(
          'https://ranekapi.origamid.dev/json/api/produto',
        );
        const product = response.data;
        setProducts(product);
      } catch (error) {
        setErro('Aconteceu um problema de conexão com o servidor', error);
      } finally {
        setLoading(false);
      }
    }
    showAllProducts();
  }, []);

  if (erro) <p>{erro}</p>;
  if (loading) <div className="loading">Carregando..</div>;
  if (products === null) return null;
  return (
    <Products className="animeLeft">
      {products.map((product) => (
        <Link to={`product/${product.id}`} key={product.id}>
          <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
          <h1>{product.nome}</h1>
        </Link>
      ))}
    </Products>
  );
};

export default AllProducts;
