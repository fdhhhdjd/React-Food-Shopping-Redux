import React, { useRef, useState } from "react";
import ButtonCartCount from "../../components/common/ButtonCartCount";
import Footer from "../../components/common/Footer";
import Banner from "../../components/Home/Banner";
import Menu from "../../components/common/Menu";
import { menuItemsData } from "../../components/common/Menu/data";
const allCategories = [
  "all",
  ...new Set(menuItemsData.map((item) => item.type)),
];
const Home = () => {
  const menuRef = useRef();

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [menuItem, setMenuItem] = useState(menuItemsData);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItem(menuItemsData);
      return;
    }
    const menuItems = menuItemsData.filter((item) => item.type === category);
    setMenuItem(menuItems);
  };

  return (
    <div>
      <Banner
        handleScrollMenu={handleScrollMenu}
        categories={categories}
        activeCategory={activeCategory}
        filterItems={filterItems}
      />
      <Menu list={menuItem} ref={menuRef} />
      <Footer />
      <ButtonCartCount />
    </div>
  );
};

export default Home;
