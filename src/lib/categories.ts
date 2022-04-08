interface Category {
  icon: string;
  name: string;
  navText: string;
  numberOfPages: number;
  title: string;
  slug: string;
}

/** Returns classnames for a category badge */
export const getCategoryBadgeClasses = (
  categories: Category[],
  categoryName: string
) => {
  if (!categories || !categoryName) {
    return;
  }

  const categoryClassNames = [
    "bg-primary-soft text-white",
    "bg-info-soft text-white",
    "bg-success-soft text-white",
    "bg-warning-soft text-white",
    "bg-danger-soft text-white",
    "bg-dark-soft text-white",
  ];

  const categoryId = categories.findIndex(
    (category) => category.name === categoryName
  );

  if (categoryId < 0) {
    return "bg-dark-soft text-white";
  }

  return categoryClassNames[categoryId % categories.length];
};

/** Returns a category display name when give a category name */
export const getCategoryDisplayName = (
  categories: Category[],
  categoryName: string
) => {
  if (!categories || !categoryName) {
    return;
  }
  const category = categories.find(
    (category) => category.name === categoryName
  );
  if (!category) {
    return null;
  }
  return category.title;
};

/**
 * @name getCategorySlug
 * @description Returns a category slug given the list of categories and a category name
 * @param categories
 * @param categoryName
 * @returns category slug
 */
export const getCategorySlug = (
  categories: Category[],
  categoryName: string
) => {
  if (!categories || !categoryName) {
    throw new Error("categories and categoryName not passed");
  }
  const category = categories.find(
    (category) => category.name === categoryName
  );
  if (!category) {
    throw new Error("Category not found");
  }
  return category.slug;
};
