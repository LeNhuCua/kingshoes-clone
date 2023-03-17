import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MenusProvider from "./hook/MenusContext";
import SidebarProvider from "./hook/SidebarContext";
import ProductsProvider from "./hook/ProductsContext";
import SlideProvider from "./hook/SlideContext";
import CartsProvider from "./hook/CartsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsProvider>
    <CartsProvider>
    <SidebarProvider>
      <MenusProvider>
        <SlideProvider>
          <App />
        </SlideProvider>
      </MenusProvider>
    </SidebarProvider>
    </CartsProvider>

  </ProductsProvider>
);
