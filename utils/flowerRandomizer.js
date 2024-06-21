export const generateRandomFlowers = (colors) => {
  // Logic to generate random flowers based on colors
  return colors.map((color, index) => ({
    id: index,
    color,
    type: `Flower ${index + 1}`
  }));
};
