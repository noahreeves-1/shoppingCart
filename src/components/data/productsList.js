// import optimumGoldChoco from "../images";
import myproteinStrawberry from "../../images/myprotein-strawberry.jpg";
import optimumGoldChoco from "../../images/optimum-gold-choco.jpeg";
import pureProteinChewy from "../../images/pure-protein-chewy.jpeg";
import blenderBottle from "../../images/blender-bottle.jpg";
import athleticGreens from "../../images/athletic-greens.jpeg";

const ProductsList = [
  {
    id: "PSOP1A1A!",
    imageSrc: optimumGoldChoco,
    category: "Protein Shake",
    company: "Optimum Nutrition",
    name: "100% Gold Standard Whey Protein",
    flavor: "Chocolate",
    description:
      "A solid all-around choice for beginners and advanced athletes",
    weight: 5,
    price: 74.99,
  },
  {
    id: "PSMY1A1A!",
    imageSrc: myproteinStrawberry,
    category: "Protein Shake",
    company: "Myprotein",
    name: "MYPROTEIN Impact Whey Protein",
    flavor: "Strawberry Cream",
    description:
      "Premium whey packed with 21g of protein per serving, for the everyday protein you need from a quality source.",
    weight: 5,
    price: 89.99,
  },
  {
    id: "PBPU1A1A!",
    imageSrc: pureProteinChewy,
    category: "Protein Bar",
    company: "Pure Protein",
    name: "Pure Protein Bars",
    flavor: "Chewy Chocolate Chip",
    description:
      "Pure Protein Bars are the perfect combination of high protein, low sugar, and great taste",
    weight: 2,
    price: 37.49,
  },
  {
    id: "SBPE1A1A!",
    imageSrc: blenderBottle,
    category: "Shaker Bottle",
    company: "Blender",
    name: "Blender Bottle",
    flavor: false,
    description: "Up to 20 fl. oz. perfect for small and large servings",
    weight: 1,
    price: 10.99,
  },
  {
    id: "AGAG1A1A!",
    imageSrc: athleticGreens,
    category: "Other",
    company: "Athletic Greens",
    name: "AG1",
    flavor: "healthy - bitter",
    description:
      "75 vitamins, minerals, and whole-food sourced nutrients in one convenient daily serving",
    weight: 2,
    price: 109.99,
  },
];

export default ProductsList;
