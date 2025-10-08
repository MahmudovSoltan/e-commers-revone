"use client"

import { IProduct } from "@/app/types/product"
import Image from "next/image";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { RiShoppingBasketLine } from "react-icons/ri";

const ProductCard = ({ product }: { product: IProduct }) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [currentColor, setCurrentColor] = useState<string | null>(null);
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const handleColorClick = (item: { color: string; url: string }) => {
        setImageUrl(item.url);
        setCurrentColor(item.color);
        setCurrentImage(item.url);
    }

    return (
        <div className="product-card">
            <div>
                {
                    product?.imag_url && (
                        Array.isArray(product.imag_url) ? (
                            <Image
                                width={300}
                                height={300}
                                onMouseOver={() =>
                                    typeof product.imag_url[1] === "object" && product.imag_url[1] !== null
                                        ? setImageUrl((product.imag_url[1] as { url: string }).url)
                                        : undefined
                                }
                                onMouseOut={() =>
                                    typeof product.imag_url[0] === "object" && product.imag_url[0] !== null
                                        ? setImageUrl(currentImage || "")
                                        : undefined
                                }
                                className="product-card__image"
                                src={
                                    imageUrl ||
                                    (typeof product.imag_url[0] === "object" && product.imag_url[0] !== null
                                        ? (product.imag_url[0] as { url: string }).url
                                        : "")
                                }
                                alt={product.titile} />
                        ) : (
                            <Image
                                src={typeof product.imag_url === "string" ? product.imag_url : ""}
                                alt={product.titile}
                                width={300}
                                height={300}

                            />
                        )
                    )
                }

            </div>
            <div className="product-card__icons">

                <div className="product-card__icon">
                    <div className="icons_tooltip">Add to wishlist</div>
                    <FaRegHeart size={15} />

                </div>
                <div  className="product-card__icon">
                    <div className="icons_tooltip">Quick Add</div>
                    <RiShoppingBasketLine size={15} />
                </div>
                <div className="product-card__icon">
                    <div className="icons_tooltip">Quick View</div>
                    <FiEye size={15} />

                </div>
            </div>
            <h4 className="product-card__title">{product.titile}</h4>
            <p className="product-card__price">Price: ${product.price}</p>
            <div className="product-card__colors">
                {Array.isArray(product.imag_url) && product.imag_url.length > 0 && (
                    product.imag_url.map((item, index) => (
                        <div
                            onClick={() => handleColorClick(item)}
                            className={`product_color ${item.color === currentColor ? "product_color_active" : ""}`}
                            key={index}

                        >
                            <span className="color-tooltip">{item.color}</span>
                            <span

                                className="product_color_dot" style={{ backgroundColor: item.color }}></span>
                        </div>
                    ))

                )}
            </div>
        </div>
    )
}

export default ProductCard
