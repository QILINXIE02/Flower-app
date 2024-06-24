const flowerTypes = ['Rose', 'Tulip', 'Lily', 'Daisy', 'Sunflower', 'Orchid', 'Carnation'];

export const generateFlowers = (colors) => {
  return colors.map(color => {
    return {
      type: flowerTypes[Math.floor(Math.random() * flowerTypes.length)],
      color,
    };
  });
};
