import TheCart from '@/components/TheCart';
import TheCartEmpty from '@/components/TheCartEmpty';
import useCartStore from '@/stores/cartStore';

export default function PageCart() {
  const {cart} = useCartStore();

  return <>{cart.length > 0 ? <TheCart /> : <TheCartEmpty />}</>;
}
