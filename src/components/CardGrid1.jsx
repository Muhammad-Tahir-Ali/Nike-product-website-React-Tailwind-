import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from './Card';
import img1Card1 from '../assets/shoe7.jpeg';
import img1Card2 from '../assets/shoe8.jpeg';
import img1Card3 from '../assets/shoe9.jpeg';
import img1Card4 from '../assets/shoe10.jpg';
import img1Card5 from '../assets/shoe11.jpeg';
import img1Card6 from '../assets/shoe12.jpeg';

const CardGrid = (props) => {
  const cards = [
    {
      id: '7',
      title: 'AirFlex Runners',
      description: 'Engineered for maximum comfort and performance, these shoes feature advanced cushioning and flexibility, making them ideal for long-distance runs or casual strolls alike.',
      image: img1Card1,
    },
    {
      id: '8',
      title: 'SwiftGrip Trailblazers',
      description: 'Designed for the rugged outdoors, these shoes provide exceptional traction on any terrain, ensuring stability and confidence during your adventures off the beaten path.',
      image: img1Card2,
    },
    {
      id: '9',
      title: 'UrbanStride Street Sneakers',
      description: 'Engineered for maximum comfort and performance, these shoes feature advanced cushioning and flexibility, making them ideal for long-distance runs or casual strolls alike.',
      image: img1Card3,
    },
    {
      id: '10',
      title: 'PowerPace Gym Trainers',
      description: 'Built for high-intensity workouts, these trainers provide excellent support and durability, helping you power through your training sessions with maximum efficiency and comfort.',
      image: img1Card4,
    },
    {
      id: '11',
      title: 'TrekTech Hiking Boots',
      description: 'Engineered for exploration, these boots offer superior ankle support and waterproofing, allowing you to conquer any trail with confidence while staying dry and comfortable.',
      image: img1Card5,
    },
    {
      id: '12',
      title: 'CasualEase Loafers',
      description: 'Effortlessly blending style and comfort, these loafers are perfect for everyday wear, whether you\'re running errands or meeting friends for coffee, ensuring you step out in both fashion and comfort.',
      image: img1Card6,
    },
  ];

  return (
    <>
      <motion.h2
        className="text-3xl font-bold flex items-center justify-center mt-8 mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {props.title}
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex justify-center"
          >
            <Link to={`/product/${card.id}`}>
              <Card
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default CardGrid;
