// This component will be used on the front page to link
// to all the tutorials (genomics / transcriptomics / coding / etc)
import './vignette.css';

export type Category = {
    id: string;
    name: string;
    description: string;
    imageUrl?: string;
    linkUrl: string;
}

export function CategoryVignette(category: Category) {
  return (
    <div className="cardVignette">
      <h2>{category.name}</h2>
      <p>{category.description}</p>
      {category.imageUrl && (
        <div className="vignetteImageWrapper">
          <img src={category.imageUrl} alt={category.name} className="vignetteCircleImage" />
        </div>
      )}
      <div className="vignetteButtonWrapper">
        <a href={category.linkUrl}>Learn more</a>
      </div>
    </div>
  );
}

export function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="categoryGridOuter">
      <div className="categoryGrid">
        {categories.map((category) => (
          <CategoryVignette key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
}