import React from 'react'

import styles from "./ProductCard.module.css"

interface Props {
}

const ProductCard: React.FC<Props> = (props) => {


    return (
        <div>
            {/* <div>
                <div data-aos="fade-up" className="item aos-init">
                    <div className="main-wrapper-card relative">
                        <div
                            className={`${styles["product-card-one"]} w-full h-[445px] bg-white relative group overflow-hidden`}
                            style={{
                                boxShadow: "rgba(0, 0, 0, 0.05) 0px 15px 64px 0px",
                            }}>
                            <div className="product-card-img w-full h-[300px] -mt-2">
                                <div className="w-full h-full relative flex justify-center items-center transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out">
                                    <span
                                        style={{
                                            boxSizing: "border-box",
                                            display: "block",
                                            overflow: "hidden",
                                            width: "initial",
                                            height: "initial",
                                            background: "none",
                                            opacity: 1,
                                            border: 0,
                                            margin: 0,
                                            padding: 0,
                                            position: "absolute",
                                            inset: 0,
                                        }}>
                                        <picture>
                                            {product && product?.imageURL?.length > 0 && (
                                                <img
                                                    alt=""
                                                    src={product?.imageURL[0]}
                                                    decoding="async"
                                                    data-nimg="fill"
                                                    className="w-full h-full object-contain"
                                                    style={{
                                                        position: "absolute",
                                                        inset: 0,
                                                        boxSizing: "border-box",
                                                        padding: 0,
                                                        border: "none",
                                                        margin: "auto",
                                                        display: "block",
                                                        width: 0,
                                                        height: 0,
                                                        minWidth: "100%",
                                                        maxWidth: "100%",
                                                        minHeight: "100%",
                                                        maxHeight: "100%",
                                                        objectFit: "scale-down",
                                                    }}
                                                    sizes="100vw"
                                                />
                                            )}
                                        </picture>
                                    </span>
                                </div>
                            </div>
                            <div className="product-card-details px-[30px] pb-[30px] relative pt-2">
                                <div className="absolute w-full h-10 px-[30px] left-0 top-40 group-hover:top-[85px] transition-all duration-300 ease-in-out">
                                    <button
                                        type="button"
                                        className={`${styles["yellow-btn"]} group relative w-full h-full flex shadow justify-center items-center overflow-hidden`}>
                                        <div
                                            className={`${styles["btn-content"]} flex items-center space-x-3 relative z-10`}
                                            onClick={() => handleCartlist()}>
                                            <span>
                                                <svg
                                                    width="14"
                                                    height="16"
                                                    viewBox="0 0 14 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="fill-current">
                                                    <path d="M12.5664 4.14176C12.4665 3.87701 12.2378 3.85413 11.1135 3.85413H10.1792V3.43576C10.1792 2.78532 10.089 2.33099 9.86993 1.86359C9.47367 1.01704 8.81003 0.425438 7.94986 0.150881C7.53106 0.0201398 6.90607 -0.0354253 6.52592 0.0234083C5.47246 0.193372 4.57364 0.876496 4.11617 1.85052C3.89389 2.32772 3.80368 2.78532 3.80368 3.43576V3.8574H2.8662C1.74187 3.8574 1.51313 3.88028 1.41326 4.15483C1.36172 4.32807 0.878481 8.05093 0.6723 9.65578C0.491891 11.0547 0.324369 12.3752 0.201948 13.3688C-0.0106763 15.0815 -0.00423318 15.1077 0.00220999 15.1371V15.1404C0.0312043 15.2515 0.317925 15.5424 0.404908 15.6274L0.781834 16H13.1785L13.4588 15.7483C13.5844 15.6339 14 15.245 14 15.0521C14 14.9214 12.5922 4.21694 12.5664 4.14176ZM12.982 14.8037C12.9788 14.8266 12.953 14.8952 12.9079 14.9443L12.8435 15.0162H1.13943L0.971907 14.8331L1.63233 9.82901C1.86429 8.04766 2.07047 6.4951 2.19289 5.56684C2.24766 5.16154 2.27343 4.95563 2.28631 4.8543C2.72123 4.85103 4.62196 4.84776 6.98661 4.84776H11.6901L11.6966 4.88372C11.7481 5.1452 12.9594 14.5128 12.982 14.8037ZM4.77338 3.8574V3.48479C4.77338 3.23311 4.80559 2.88664 4.84103 2.72649C5.03111 1.90935 5.67864 1.24584 6.48726 1.03339C6.82553 0.948403 7.37964 0.97782 7.71791 1.10202H7.72113C8.0755 1.22296 8.36545 1.41907 8.63284 1.71978C9.06453 2.19698 9.2095 2.62516 9.2095 3.41615V3.8574H4.77338Z"></path>
                                                </svg>
                                            </span>

                                            {isInCartlist(product.slug) ? (
                                                <span>Remove from Cart</span>
                                            ) : (
                                                <span>Add to Cart</span>
                                            )}
                                        </div>
                                        <div
                                            className={`${styles["bg-shape"]} w-full h-full absolute bg-qblack`}></div>
                                    </button>
                                </div>
                                <div className="reviews flex space-x-[1px] mb-3">
                                    <span className="text-gray-500">
                                        <SvgIconRenderer
                                            width={"18"}
                                            height={"17"}
                                            viewBox={"0 0 18 17"}
                                            fill={"none"}
                                            xmlns={"http://www.w3.org/2000/svg"}
                                            path={SvgPaths.ratingIcon}
                                            pathFill={"#D2D8E1"}
                                        />
                                    </span>
                                    <span className="text-gray-500">
                                        <SvgIconRenderer
                                            width={"18"}
                                            height={"17"}
                                            viewBox={"0 0 18 17"}
                                            fill={"none"}
                                            xmlns={"http://www.w3.org/2000/svg"}
                                            path={SvgPaths.ratingIcon}
                                            pathFill={"#D2D8E1"}
                                        />
                                    </span>
                                    <span className="text-gray-500">
                                        <SvgIconRenderer
                                            width={"18"}
                                            height={"17"}
                                            viewBox={"0 0 18 17"}
                                            fill={"none"}
                                            xmlns={"http://www.w3.org/2000/svg"}
                                            path={SvgPaths.ratingIcon}
                                            pathFill={"#D2D8E1"}
                                        />
                                    </span>
                                    <span className="text-gray-500">
                                        <SvgIconRenderer
                                            width={"18"}
                                            height={"17"}
                                            viewBox={"0 0 18 17"}
                                            fill={"none"}
                                            xmlns={"http://www.w3.org/2000/svg"}
                                            path={SvgPaths.ratingIcon}
                                            pathFill={"#D2D8E1"}
                                        />
                                    </span>
                                    <span className="text-gray-500">
                                        <SvgIconRenderer
                                            width={"18"}
                                            height={"17"}
                                            viewBox={"0 0 18 17"}
                                            fill={"none"}
                                            xmlns={"http://www.w3.org/2000/svg"}
                                            path={SvgPaths.ratingIcon}
                                            pathFill={"#D2D8E1"}
                                        />
                                    </span>
                                </div>
                                <Link
                                    rel="noopener noreferrer"
                                    href={`/single_product?slug=${product.slug}`}>
                                    <p className="title mb-2 text-[15px] font-semibold text-qblack leading-[24px] line-clamp-2 hover:text-blue-600 cursor-pointer">
                                        {product.productName}
                                    </p>
                                </Link>
                                <p className="price">
                                    <span className="main-price  font-semibold text-[18px] line-through text-qgray">
                                        <span>${product.price}</span>
                                    </span>
                                    <span className="offer-price text-qred font-semibold text-[18px] ml-2">
                                        <span>${product.offerPrice}</span>
                                    </span>
                                </p>
                            </div>
                            <div className="quick-access-btns flex flex-col space-y-2">
                                <button
                                    className=" absolute group-hover:right-4 -right-10 top-20 transition-all ease-in-out"
                                    type="button">
                                    <span className="w-10 h-10 flex justify-center text-black hover:text-white items-center transition-all duration-300 ease-in-out hover:bg-qyellow bg-primarygray rounded">
                                        <SvgIconRenderer
                                            width={"20"}
                                            height={"20"}
                                            viewBox={"0 0 20 20"}
                                            fill={"none"}
                                            className={"fill-current"}
                                            xmlns={"http://www.w3.org/2000/svg"}
                                            path={SvgPaths.zoomImage}
                                            pathFill={"black"}
                                        />
                                    </span>
                                </button>
                                <button
                                    className="absolute group-hover:right-4 -right-10 top-[120px] transition-all duration-300 ease-in-out"
                                    type="button"
                                    onClick={handleWishlist}>
                                    <span className="w-10 h-10 flex text-black hover:text-black justify-center items-center transition-all duration-300 ease-in-out hover:bg-qyellow bg-primarygray rounded">
                                        {isInWishlist(product.slug) ? (
                                            <BsHeartFill
                                                style={{
                                                    width: "25px",
                                                    height: "21px",
                                                    color: "#EF272D",
                                                }}
                                            />
                                        ) : (
                                            <BsHeart style={{ width: "25px", height: "21px" }} />
                                        )}
                                    </span>
                                </button>
                                <button
                                    className="absolute group-hover:right-4 -right-10 top-[168px] transition-all duration-500 ease-in-out"
                                    type="button">
                                    <span className="w-10 h-10 flex justify-center text-black hover:text-white transition-all duration-300 ease-in-out items-center hover:bg-qyellow bg-primarygray rounded">
                                        <SvgIconRenderer
                                            width={"20"}
                                            height={"22"}
                                            viewBox={"0 0 20 22"}
                                            fill={"none"}
                                            xmlns={"http://www.w3.org/2000/svg"}
                                            path={SvgPaths.compare}
                                            pathFill={"black"}
                                        />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <span className={`${styles["anim"]} ${styles["bottom"]} `}></span>
                        <span className={`${styles["anim"]} ${styles["right"]} `}></span>
                        <span className={`${styles["anim"]} ${styles["top"]} `}></span>
                        <span className={`${styles["anim"]} ${styles["left"]} `}></span>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default ProductCard