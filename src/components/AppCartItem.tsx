import useCartStore from '@/stores/cartStore';
import useCatalogStore from '@/stores/catalogStore';
import IconMinus from '@/icons/IconMinus';
import IconPlus from '@/icons/IconPlus';
import IconClose from '@/icons/IconClose';

interface CartItem {
  id: number;
  dough: string;
  size: number;
  quant: number;
}

interface AppCartItemProps {
  item: CartItem;
  index: number;
  controls?: boolean;
}

export default function AppCartItem({ item, index, controls = true }: AppCartItemProps) {
  const cartStore = useCartStore();
  const {getItem} = useCatalogStore();
  const doughText = (dough: string) => (dough === 'standart' ? 'Традиционное' : 'Тонкое');

  const catalogItem = getItem(item.id);
  if (!catalogItem) return null;

  function minusClick(item: CartItem, index: number) {
    if (item.quant <= 1) {
      cartStore.deleteItem(index);
    } else {
      cartStore.setQuant(index, item.quant - 1);
    }
  }

  function plusClick(item: CartItem, index: number) {
    cartStore.setQuant(index, item.quant + 1);
  }

  return (
    <>
      <div className="cart-item">
        <div className="cart-item__content">
          <img className="cart-item__img" src={catalogItem.image} alt={catalogItem.title} />
          <div>
            <h3 className="cart-item__title">{catalogItem.title}</h3>
            <p className="cart-item__descr">
              {doughText(item.dough)} тесто, {item.size} см
            </p>
          </div>
        </div>
        <div className="cart-item__inner-grid">
          <div className="cart-item__quant">
            {controls && (
              <button className="cart-item__quant-btn" onClick={() => minusClick(item, index)}>
                <IconMinus color="#fe5f1e" />
              </button>
            )}
            <span className="cart-item__quant-value">{item.quant}</span>
            {controls && (
              <button className="cart-item__quant-btn" onClick={() => plusClick(item, index)}>
                <IconPlus color="#fe5f1e" />
              </button>
            )}
          </div>
          <div className="cart-item__price">{catalogItem.price * item.quant} ₸</div>
          {controls && (
            <button className="cart-item__remove" onClick={() => cartStore.deleteItem(index)}>
              <IconClose />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
