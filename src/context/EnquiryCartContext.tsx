"use client";

import React, { createContext, useContext, useState } from "react";
import { ProductItem } from "@/lib/content/types";

interface EnquiryCartContextType {
  cartItems: ProductItem[];
  addToCart: (product: ProductItem) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  activeEnquiryProduct: ProductItem | null;
  openEnquiryModal: (product: ProductItem) => void;
  closeEnquiryModal: () => void;
}

const EnquiryCartContext = createContext<EnquiryCartContextType | undefined>(undefined);

export function EnquiryCartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<ProductItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeEnquiryProduct, setActiveEnquiryProduct] = useState<ProductItem | null>(null);

  const addToCart = (product: ProductItem) => {
    setCartItems((prev) => {
      if (prev.some((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const openEnquiryModal = (product: ProductItem) => {
    setActiveEnquiryProduct(product);
  };

  const closeEnquiryModal = () => {
    setActiveEnquiryProduct(null);
  };

  return (
    <EnquiryCartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        activeEnquiryProduct,
        openEnquiryModal,
        closeEnquiryModal,
      }}
    >
      {children}
    </EnquiryCartContext.Provider>
  );
}

export function useEnquiryCart() {
  const context = useContext(EnquiryCartContext);
  if (!context) {
    throw new Error("useEnquiryCart must be used within an EnquiryCartProvider");
  }
  return context;
}
