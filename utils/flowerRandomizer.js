const flowers = [
  { name: "Roses", colors: ["red", "pink", "yellow", "white"], image: "flower_img/roses_multi.jpg" },
  { name: "Tulips", colors: ["red", "yellow", "purple"], image: "flower_img/tulips.jpg" },
  { name: "Daises", colors: ["white", "yellow"], image: "flower_img/daises.jpg" },
];

export const generateRandomBouquet = (selectedColors) => {
  return flowers.filter(flower => 
    flower.colors.some(color => selectedColors.includes(color))
  );
};
