const flowerNames = ['Rose', 'Tulip', 'Sunflower', 'Daisy', 'Lily', 'Orchid', 'Peony', 'Zinnia', 'Hydrangea', 'Carnation', 'ForgetMeNot', 'Dahlia', 'Poppy','Azalea', 'Hyacinth', 'Lavender' ];
const flowerImages = {
  Rose: require('../assets/flower_img/roses_multi.jpg'),
  Tulip: require('../assets/flower_img/tulips.jpg'),
  Daisy: require('../assets/flower_img/daises.jpg'),
  Sunflower: require('../assets/flower_img/sunflower.jpg'),
  Lily: require('../assets/flower_img/lily.jpg'),
  Orchid: require('../assets/flower_img/orchid.jpg'),
  Peony: require('../assets/flower_img/peony.jpg'),
  Zinnia: require('../assets/flower_img/zinnia.jpg'),
  Hydrangea: require('../assets/flower_img/hydrangea.jpg'),
  Carnation: require('../assets/flower_img/carnation.jpg'),
  ForgetMeNot: require('../assets/flower_img/Forget-me-not.jpg'),
  Dahlia: require('../assets/flower_img/dahlia.jpg'),
  Azalea: require('../assets/flower_img/azalea.jpg'),
  Poppy: require('../assets/flower_img/Poppy.jpg'),
  Hyacinth: require('../assets/flower_img/Hyacinth.jpg'),
  Lavender: require('../assets/flower_img/Lavender.jpg'),
};

export const generateRandomFlower = () => {
  const randomIndex = Math.floor(Math.random() * flowerNames.length);
  const name = flowerNames[randomIndex];
  const image = flowerImages[name];
  return { name, image };
};

export const generateRandomBouquet = (colors) => {
  return {
    flowers: colors.map((color) => {
      const { name, image } = generateRandomFlower();
      return { name, image, color };
    }),
  };
};

const flowerData = flowerNames.map(name => ({
  name,
  image: flowerImages[name],
}));

export default flowerData;
