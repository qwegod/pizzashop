import React, { createContext, useContext, useState, JSX } from "react";


interface ShopItem {
  el: JSX.Element;
  count: number; 
}


const ShopListContext = createContext<{
  shopList: ShopItem[];
  addToShopList: (el: JSX.Element) => void;
  removeProduct: (index: number) => void;
  useTotalCost: () => number;
  increaseCount: (index: number) => void;
  decreaseCount: (index: number) => void;
  getCount: (index: number) => number;
}>({
  shopList: [],
  addToShopList: () => {},
  removeProduct: () => {},
  useTotalCost: () => 0,
  increaseCount: () => {},
  decreaseCount: () => {},
  getCount: () => 0,
});


export const useShopList = () => {
  return useContext(ShopListContext);
};


export const ShopListProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [shopList, setShopList] = useState<ShopItem[]>([]);


  const addToShopList = (el: JSX.Element) => {
    const existingItem = shopList.find(
      (item) => item.el.props.index === el.props.index
    );
    if (existingItem) {
      setShopList((prevList) =>
        prevList.map((item) =>
          item.el.props.index === el.props.index
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    } else {
      setShopList((prevList) => [...prevList, { el, count: 1 }]);
    }
  };


  const removeProduct = (indexProps: number) => {
    setShopList((prevList) =>
      prevList.filter((item) => item.el.props.index !== indexProps)
    );
  };


  const increaseCount = (index: number) => {
    setShopList((prevList) =>
      prevList.map((item) => {
        return item.el.props.index === index
          ? { ...item, count: item.count + 1 }
          : item;
      })
    );
  };

  const decreaseCount = (index: number) => {
    setShopList((prevList) => {
      const updatedList = prevList.map((item) => {
        if (item.el.props.index === index) {
          const newCount = item.count - 1;
          console.log(item.el);

          if (newCount > 0) {
            return { ...item, count: newCount };
          } else {
            removeProduct(index);
            return undefined;
          }
        }
        return item;
      });

      return updatedList.filter((item) => item !== undefined) as ShopItem[];
    });
  };

  const getCount = (index: number): number => {
    const item = shopList.find((item) => item.el.props.index === index);
    return item ? item.count : 0;
  };


  const useTotalCost = () => {
    let sum = 0;
    shopList.forEach((item) => {
      sum += Number(item.el.props.cost) * item.count; 
    });
    return sum;
  };

  return (
    <ShopListContext.Provider
      value={{
        shopList,
        addToShopList,
        removeProduct,
        useTotalCost,
        increaseCount,
        decreaseCount,
        getCount,
      }}
    >
      {children}
    </ShopListContext.Provider>
  );
};
