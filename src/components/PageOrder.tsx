import TheOrder from '@/components/TheOrder';
import TheCartEmpty from '@/components/TheCartEmpty';
import useCartStore from '@/stores/cartStore';

export default function PageOrder() {
  const { cart } = useCartStore();
  return <>{cart.length > 0 ? <TheOrder /> : <TheCartEmpty />}</>;
}
