import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items, onImageClick }) => (
  <ul className={css["image-gallery"]}>
    {items.map(({ id, urls, slug }) => (
      <li key={id} className={css["image-gallery-item"]}>
        <ImageCard
          className={css["image-card"]}
          imgUrl={urls.small}
          imgDescr={slug}
          onClick={() => onImageClick(urls.small)} // Передаем URL изображения в onClick
        />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
