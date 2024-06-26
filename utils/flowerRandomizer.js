export const generateRandomBouquet = (colors) => {
  return {
    flowers: colors.map((color, index) => ({
      id: index,
      name: `Flower ${index + 1}`,
      color: color,
    })),
  };
};
