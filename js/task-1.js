const categories = document.querySelectorAll('#categories .categories-item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const title = category.querySelector('.categories-title').textContent;
  const elementsCount = category.querySelectorAll('.list-item').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
