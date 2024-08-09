import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../CartContext"; 
import img1Card1 from "../assets/shoe1.jpg";
import img1Card2 from "../assets/shoe2.jpg";
import img1Card3 from "../assets/shoe3.jpg";
import img1Card4 from "../assets/shoe4.jpg";
import img1Card5 from "../assets/shoe5.jpg";
import img1Card6 from "../assets/shoe6.jpg";
import img1Card7 from "../assets/shoe7.jpeg";
import img1Card8 from "../assets/shoe8.jpeg";
import img1Card9 from "../assets/shoe9.jpeg";
import img1Card10 from "../assets/shoe10.jpg";
import img1Card11 from "../assets/shoe11.jpeg";
import img1Card12 from "../assets/shoe12.jpeg";

const products = [
  {
    id: "1",
    title: "AirFlex Runners",
    description:
      "Engineered for maximum comfort and performance, these shoes feature advanced cushioning and flexibility, making them ideal for long-distance runs or casual strolls alike.",
    image: img1Card1,
    price: "$120",
    features: ["Breathable fabric", "Lightweight", "Flexible sole"],
  },
  {
    id: "2",
    title: "SwiftGrip Trailblazers",
    description:
      "Designed for the rugged outdoors, these shoes provide exceptional traction on any terrain, ensuring stability and confidence during your adventures off the beaten path.",
    image: img1Card2,
    price: "$140",
    features: ["Waterproof", "Enhanced grip", "Durable material"],
  },
  {
    id: "3",
    title: "UrbanStride Street Sneakers",
    description:
      "Engineered for maximum comfort and performance, these shoes feature advanced cushioning and flexibility, making them ideal for long-distance runs or casual strolls alike.",
    image: img1Card3,
    price: "$110",
    features: ["Stylish design", "Comfortable", "Versatile"],
  },
  {
    id: "4",
    title: "PowerPace Gym Trainers",
    description:
      "Built for high-intensity workouts, these trainers provide excellent support and durability, helping you power through your training sessions with maximum efficiency and comfort.",
    image: img1Card4,
    price: "$130",
    features: ["High support", "Durable", "Breathable mesh"],
  },
  {
    id: "5",
    title: "TrekTech Hiking Boots",
    description:
      "Engineered for exploration, these boots offer superior ankle support and waterproofing, allowing you to conquer any trail with confidence while staying dry and comfortable.",
    image: img1Card5,
    price: "$150",
    features: ["Waterproof", "Ankle support", "Traction grip"],
  },
  {
    id: "6",
    title: "CasualEase Loafers",
    description:
      "Effortlessly blending style and comfort, these loafers are perfect for everyday wear, whether you're running errands or meeting friends for coffee, ensuring you step out in both fashion and comfort.",
    image: img1Card6,
    price: "$90",
    features: ["Stylish", "Comfortable", "Easy to wear"],
  },
  {
    id: "7",
    title: "AirFlex Runners",
    description:
      "Engineered for maximum comfort and performance, these shoes feature advanced cushioning and flexibility, making them ideal for long-distance runs or casual strolls alike.",
    image: img1Card7,
    price: "$120",
    features: ["Breathable fabric", "Lightweight", "Flexible sole"],
  },
  {
    id: "8",
    title: "SwiftGrip Trailblazers",
    description:
      "Designed for the rugged outdoors, these shoes provide exceptional traction on any terrain, ensuring stability and confidence during your adventures off the beaten path.",
    image: img1Card8,
    price: "$140",
    features: ["Waterproof", "Enhanced grip", "Durable material"],
  },
  {
    id: "9",
    title: "UrbanStride Street Sneakers",
    description:
      "Engineered for maximum comfort and performance, these shoes feature advanced cushioning and flexibility, making them ideal for long-distance runs or casual strolls alike.",
    image: img1Card9,
    price: "$110",
    features: ["Stylish design", "Comfortable", "Versatile"],
  },
  {
    id: "10",
    title: "PowerPace Gym Trainers",
    description:
      "Built for high-intensity workouts, these trainers provide excellent support and durability, helping you power through your training sessions with maximum efficiency and comfort.",
    image: img1Card10,
    price: "$130",
    features: ["High support", "Durable", "Breathable mesh"],
  },
  {
    id: "11",
    title: "TrekTech Hiking Boots",
    description:
      "Engineered for exploration, these boots offer superior ankle support and waterproofing, allowing you to conquer any trail with confidence while staying dry and comfortable.",
    image: img1Card11,
    price: "$150",
    features: ["Waterproof", "Ankle support", "Traction grip"],
  },
  {
    id: "12",
    title: "CasualEase Loafers",
    description:
      "Effortlessly blending style and comfort, these loafers are perfect for everyday wear, whether you're running errands or meeting friends for coffee, ensuring you step out in both fashion and comfort.",
    image: img1Card12,
    price: "$90",
    features: ["Stylish", "Comfortable", "Easy to wear"],
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((product) => product.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div className="text-center mt-10 text-xl">Product not found</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-xl mt-10">
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-lg w-full h-auto"
        />
      </div>
      <div className="lg:w-1/2 p-4">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-gray-900 mb-4">
          {product.price}
        </p>
        <ul className="mb-4">
          {product.features.map((feature, index) => (
            <li key={index} className="text-gray-600 mb-2">
              <span className="mr-2">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <button
            onClick={() => {
              addToCart(product); // Add product to cart
              alert('Product successfully added to cart');
            }}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              addToCart(product); // Add product to cart
              alert('Product successfully added to cart');
            }}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  </div>
);
};

export default ProductDetails;
