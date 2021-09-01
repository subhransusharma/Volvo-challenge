import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import { carItemProps } from "../ProductItem/ProductItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface carItemsProps {
  carItems: carItemProps[];
}

const CustomButtonGroupAsArrows = ({ next, previous }: any) => {
  return (
    <div
      className="d-md-block d-none d-lg-block d-xl-block mt-4 pull-right">
      <button
        type="button"
        className="btn btn-outline-dark rounded-circle"
        onClick={previous}
      >
        <i className="fa fa-angle-left fa-lg" aria-hidden="true"></i>
      </button>
      <button
        type="button"
        className="btn btn-outline-dark rounded-circle m-2"
        onClick={next}
      >
        <i className="fa fa-angle-right fa-lg" aria-hidden="true"></i>
      </button>
    </div>
  );
};

const ProductList = ({ carItems }: carItemsProps) => {
  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      centerMode={false}
      slidesToSlide={1}
      partialVisible
      keyBoardControl
      customButtonGroup={<CustomButtonGroupAsArrows />}
      renderButtonGroupOutside={true}
      showDots={true}
      renderDotsOutside={false}
      dotListClass="d-md-none d-lg-none d-xl-none"
    >
      {carItems.map((carItem) => {
        return (
          <ProductItem
            key={carItem.id}
            id={carItem.id}
            modelName={carItem.modelName}
            modelType={carItem.modelType}
            bodyType={carItem.bodyType}
            imageUrl={carItem.imageUrl}
          />
        );
      })}
    </Carousel>
  );
};

export default ProductList;
