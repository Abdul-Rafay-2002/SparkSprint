import { CartProductType } from '@/app/product/[productId]/ProductDetails';
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
import { toast } from 'react-hot-toast';

type CartContextType = {
	cartTotalQty: number;
	cartTotalAmount: number;
	cartProducts: CartProductType[] | null;
	handleAddProductToCart: (product: CartProductType) => void;
	handleRemoveProductFromCart: (product: CartProductType) => void;
	handleQtyIncrease: (product: CartProductType) => void;
	handleQtyDecrease: (product: CartProductType) => void;
	HandleClearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);
interface Props {
	[propName: string]: any;
}
export const CartContextProvider = (props: Props) => {
	const [cartTotalQty, setCartTotalQty] = useState(0);
	const [cartTotalAmount, setCartTotalAmount] = useState(0);
	const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
		null
	);
		// console.log('qty', cartTotalQty);
		// console.log('amount', cartTotalAmount);
	useEffect(() => {
		const cartItems: any = localStorage.getItem('eCartItems');
		const cProducts: CartProductType[] | null = JSON.parse(cartItems);

		setCartProducts(cProducts);
	}, []);

	//Calcualte the total number of Item and its updated Price.
	useEffect(() => {
	  const getTotals = () =>{
		if(cartProducts){
			const { total, qty } = cartProducts?.reduce(
				(acc, item) => {
					const ItemTotal = item.price * item.quantity;
					acc.total += ItemTotal;
					acc.qty += item.quantity;

					return acc;
				},
				{
					total: 0,
					qty: 0,
				}
			);

			setCartTotalQty(qty);
			setCartTotalAmount(total);
		}
		}
	
	getTotals();
	}, [cartProducts])
	
	//Add Cart Items Form cart Table
	const handleAddProductToCart = useCallback((product: CartProductType) => {
		setCartProducts((prev) => {
			let updatedCart;
			if (prev) {
				updatedCart = [...prev, product];
			} else {
				updatedCart = [product];
			}
			toast.success('Product added to Cart!');
			localStorage.setItem('eCartItems', JSON.stringify(updatedCart));
			return updatedCart;
		});
	}, []);

	//Remove Cart Items Form cart Table
	const handleRemoveProductFromCart = useCallback(
		(product: CartProductType) => {
			if (cartProducts) {
				const filteredProducts = cartProducts.filter((item) => {
					return item.id !== product.id;
				});
				setCartProducts(filteredProducts);
				toast.success('Product Removed from the Cart!');
				localStorage.setItem('eCartItems', JSON.stringify(filteredProducts));
			}
		},
		[cartProducts]
	);

	//Increase Quantity for Cart Items Form cart Table
	const handleQtyIncrease = useCallback(
		(product: CartProductType) => {
			let UpdatedCart;

			if (product.quantity === 99) {
				return toast.error('Oopps! Maximum Reached');
			}
			if (cartProducts) {
				UpdatedCart = [...cartProducts];

				const existingIndex = cartProducts.findIndex(
					(item) => item.id === product.id
				);

				if (existingIndex > -1) {
					UpdatedCart[existingIndex].quantity = ++UpdatedCart[existingIndex]
						.quantity;
				}

				setCartProducts(UpdatedCart);
				localStorage.setItem('eCartItems', JSON.stringify(UpdatedCart));
			}
		},
		[cartProducts]
	);
	//Decrease Quantity for Cart Items Form cart Table
	const handleQtyDecrease = useCallback(
		(product: CartProductType) => {
			let UpdatedCart;

			if (product.quantity === 1) {
				return toast.error('Oopps! Minimum Reached..');
			}
			if (cartProducts) {
				UpdatedCart = [...cartProducts];

				const existingIndex = cartProducts.findIndex(
					(item) => item.id === product.id
				);

				if (existingIndex > -1) {
					UpdatedCart[existingIndex].quantity = --UpdatedCart[existingIndex]
						.quantity;
				}

				setCartProducts(UpdatedCart);
				localStorage.setItem('eCartItems', JSON.stringify(UpdatedCart));
			}
		},
		[cartProducts]
	);
	//Reset All Cart Items Form cart Table
	const HandleClearCart = useCallback(() => {
		setCartProducts(null);
		setCartTotalQty(0);
		localStorage.setItem('eCartItems', JSON.stringify(null));
	}, []);

	const value = {
		cartTotalQty,
		cartProducts,
		setCartTotalQty,
		handleAddProductToCart,
		handleRemoveProductFromCart,
		handleQtyIncrease,
		handleQtyDecrease,
		cartTotalAmount,
		HandleClearCart,
	};
	return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (context === null) {
		throw new Error('useCart must be used within a CartContextProvider');
	}
	return context;
};
