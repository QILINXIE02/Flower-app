// utils/flowerRandomizer.js
export const generateRandomBouquet = (colors) => {
  // Placeholder logic for generating a bouquet based on colors
  return {
    flowers: colors.map((color, index) => ({
      id: index,
      name: `Flower ${index + 1}`,
      color: color,
    })),
  };
};
