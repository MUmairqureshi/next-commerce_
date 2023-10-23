import CartPage from 'components/CartPage';
import { getCart } from 'lib/shopify';
import { cookies } from 'next/headers';

export default async function Cart() {
  const cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  return <CartPage cart={cart} />;
}