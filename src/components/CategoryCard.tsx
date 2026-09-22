import type { CategoryData } from "../data/data";

interface CategoryCardProps {
  data: CategoryData;
}

function CategoryCard({ data }: CategoryCardProps) {
  return (
    <article className="category-card">

      <div className="category-images">

        {data.images.map((image, index) => (
          <div
            className="category-image"
            key={index}
          >
            <img
              src={image}
              alt={`${data.title} artwork ${index + 1}`}
            />
          </div>
        ))}

      </div>

      <div className="category-info">

        <h3>{data.title}</h3>

        <p>{data.items}</p>

      </div>

    </article>
  );
}

export default CategoryCard;