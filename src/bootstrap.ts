import { mount as productsMFE } from "products/ProductsIndex";
import { mount as cartMFE } from "cart/CartIndex";
productsMFE(document.querySelector("#dev-products"));
cartMFE(document.querySelector("#dev-cart"));
