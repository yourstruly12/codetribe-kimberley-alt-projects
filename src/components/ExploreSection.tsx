import CategoryCard from "./CategoryCard";
import { CATEGORIES } from "../data/data";

function ExploreSection() {
  return (
    <section
      className="section"
      id="explore"
    >

      <div className="section-container">

        <h2>Explore Artworks</h2>

        <div className="categories-grid">

          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              data={category}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default ExploreSection;