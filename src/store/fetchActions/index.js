import api from '../../server/api';
import { listProducts } from '../ducks/Produtos';

export const getAllProducts = () => {
  return (dispatch) => {
    api
      .get('/')
      .then((res) => {
        dispatch(listProducts(res.data));
      })
      .catch(console.log);
  };
};
