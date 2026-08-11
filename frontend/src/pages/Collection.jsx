import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { assets } from "../assets/frontend_assets/assets.js";
import Title from "../components/Title.jsx";
import ProductItem from "../components/ProductItem.jsx";

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState("relevant");
    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory((prev) =>
                prev.filter((item) => item !== e.target.value),
            );
        } else {
            setCategory((prev) => [...prev, e.target.value]);
        }
    };
    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory((prev) =>
                prev.filter((item) => item !== e.target.value),
            );
        } else {
            setSubCategory((prev) => [...prev, e.target.value]);
        }
    };
    const applyFilter = () => {
        let productsCopy = products.slice();
        if (showSearch && search) {
            productsCopy = productsCopy.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase()),
            );
        }
        if (category.length > 0) {
            productsCopy = productsCopy.filter((item) =>
                category.includes(item.category),
            );
        }
        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter((item) =>
                subCategory.includes(item.subCategory),
            );
        }
        setFilterProducts(productsCopy);
    };
    const applySort = () => {
        let filterProductsCopy = filterProducts.slice();
        switch (sortType) {
            case "low-high":
                setFilterProducts(
                    filterProductsCopy.sort((a, b) => a.price - b.price),
                );
                break;
            case "high-low":
                setFilterProducts(
                    filterProductsCopy.sort((a, b) => b.price - a.price),
                );
                break;

            default:
                applyFilter();
                break;
        }
    };
    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch, products]);

    useEffect(() => {
        applySort();
    }, [sortType]);

    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 border-t border-gray-400 pt-10">
            {/* Filter Section */}
            <div className="min-w-60">
                <p
                    onClick={() => setShowFilter(!showFilter)}
                    className="my-2 flex items-center text-xl gap-2 cursor-pointer"
                >
                    FILTERS{" "}
                    <img
                        src={assets.dropdown_icon}
                        className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
                        alt=""
                    />
                </p>

                <div
                    className={`border border-gray-400 bg-gray-50 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
                >
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className="flex flex-col gap-2 font-light text-sm text-gray-700">
                        <p className="flex gap-2">
                            <input
                                type="checkbox"
                                className="w-3 cursor-pointer"
                                value={"Men"}
                                onChange={toggleCategory}
                            />
                            Men
                        </p>
                        <p className="flex gap-2">
                            <input
                                type="checkbox"
                                className="w-3 cursor-pointer"
                                value={"Women"}
                                onChange={toggleCategory}
                            />
                            Women
                        </p>
                        <p className="flex gap-2">
                            <input
                                type="checkbox"
                                className="w-3 cursor-pointer"
                                value={"Kids"}
                                onChange={toggleCategory}
                            />
                            Kids
                        </p>
                    </div>
                </div>
                <div
                    className={`border border-gray-400 bg-gray-50 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}
                >
                    <p className="mb-3 text-sm font-medium">TYPES</p>
                    <div className="flex flex-col gap-2 font-light text-sm text-gray-700">
                        <p className="flex gap-2">
                            <input
                                type="checkbox"
                                className="w-3 cursor-pointer"
                                value={"Topwear"}
                                onChange={toggleSubCategory}
                            />
                            Topwear
                        </p>
                        <p className="flex gap-2">
                            <input
                                type="checkbox"
                                className="w-3 cursor-pointer"
                                value={"Bottomwear"}
                                onChange={toggleSubCategory}
                            />
                            Bottomwear
                        </p>
                        <p className="flex gap-2">
                            <input
                                type="checkbox"
                                className="w-3 cursor-pointer"
                                value={"Winterwear"}
                                onChange={toggleSubCategory}
                            />
                            Winterwear
                        </p>
                    </div>
                </div>
            </div>
            {/* Collections */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1={"ALL"} text2={"COLLECTIONS"} />
                    {/* Sort Products */}
                    <select
                        onChange={(e) => setSortType(e.target.value)}
                        className="border bg-gray-100 text-sm px-2 cursor-pointer"
                    >
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {filterProducts.map((item) => (
                        <ProductItem
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
