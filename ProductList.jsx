import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './App.css';

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        name: "Snake Plant",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/480px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg",
        description: "Produces oxygen at night, improving air quality.",
        cost: "$15",
      },
      {
        name: "Spider Plant",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chlorophytum_comosum_-_Spider_Plant.jpg/480px-Chlorophytum_comosum_-_Spider_Plant.jpg",
        description: "Filters formaldehyde and xylene from the air.",
        cost: "$12",
      },
      {
        name: "Peace Lily",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Peace_lily_%28Spathiphyllum_cochlearispathum%29.jpg/480px-Peace_lily_%28Spathiphyllum_cochlearispathum%29.jpg",
        description: "Removes mold spores and improves air quality.",
        cost: "$18",
      },
      {
        name: "Boston Fern",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Boston_fern_ne_wb.jpg/480px-Boston_fern_ne_wb.jpg",
        description: "Acts as a natural humidifier and air purifier.",
        cost: "$20",
      },
      {
        name: "Rubber Plant",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ficus_elastica_for_wikipedia.jpg/480px-Ficus_elastica_for_wikipedia.jpg",
        description: "Absorbs and breaks down harmful chemicals.",
        cost: "$17",
      },
      {
        name: "Aloe Vera",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/480px-Aloe_vera_flower_inset.png",
        description: "Filters benzene and formaldehyde from air.",
        cost: "$14",
      },
    ],
  },
  {
    category: "Aromatic Fragrant Plants",
    plants: [
      {
        name: "Lavender",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Richea_scoparia.jpg/480px-Richea_scoparia.jpg",
        description: "Calming scent known to reduce stress and anxiety.",
        cost: "$20",
      },
      {
        name: "Jasmine",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/White_Jasmine_Flowers.jpg/480px-White_Jasmine_Flowers.jpg",
        description: "Sweet fragrance that promotes relaxation.",
        cost: "$18",
      },
      {
        name: "Rosemary",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Rosemary_bush.jpg/480px-Rosemary_bush.jpg",
        description: "Invigorating scent that enhances memory and focus.",
        cost: "$15",
      },
      {
        name: "Mint",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mintd.jpg/480px-Mintd.jpg",
        description: "Refreshing aroma that can boost energy.",
        cost: "$12",
      },
      {
        name: "Lemon Balm",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Lemon_balm_in_flower.jpg/480px-Lemon_balm_in_flower.jpg",
        description: "Citrusy fragrance that reduces stress and uplifts mood.",
        cost: "$14",
      },
      {
        name: "Hyacinth",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Hyacinthus_orientalis_-_floriade_canberra.jpg/480px-Hyacinthus_orientalis_-_floriade_canberra.jpg",
        description: "Sweet and powerful fragrance brightens any room.",
        cost: "$22",
      },
    ],
  },
  {
    category: "Insect Repellent Plants",
    plants: [
      {
        name: "Oregano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Origanum_vulgare_-_harilik_pune.jpg/480px-Origanum_vulgare_-_harilik_pune.jpg",
        description: "Contains compounds that repel many insects.",
        cost: "$10",
      },
      {
        name: "Marigold",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Tagetes_erecta_single_flower.jpg/480px-Tagetes_erecta_single_flower.jpg",
        description: "Bright flowers deter aphids, mosquitoes, and whiteflies.",
        cost: "$8",
      },
      {
        name: "Geraniums",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Annual_Geranium_%28Pelargonium%29.jpg/480px-Annual_Geranium_%28Pelargonium%29.jpg",
        description: "Repels mosquitoes and other biting insects.",
        cost: "$13",
      },
      {
        name: "Basil",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Basil-Basilico-Ocimum_basilicum-albahaca.jpg/480px-Basil-Basilico-Ocimum_basilicum-albahaca.jpg",
        description: "Naturally repels flies and mosquitoes.",
        cost: "$9",
      },
      {
        name: "Lavender",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Richea_scoparia.jpg/480px-Richea_scoparia.jpg",
        description: "Repels moths, fleas, flies, and mosquitoes.",
        cost: "$16",
      },
      {
        name: "Catnip",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nepeta_cataria_-_Flickr_003.jpg/480px-Nepeta_cataria_-_Flickr_003.jpg",
        description: "More effective than DEET at repelling mosquitoes.",
        cost: "$13",
      },
    ],
  },
  {
    category: "Medicinal Plants",
    plants: [
      {
        name: "Aloe Vera",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/480px-Aloe_vera_flower_inset.png",
        description: "Soothes burns, moisturizes skin, aids digestion.",
        cost: "$14",
      },
      {
        name: "Echinacea",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Purple_Coneflower_%28Echinacea_purpurea%29%2C_Flickr.jpg/480px-Purple_Coneflower_%28Echinacea_purpurea%29%2C_Flickr.jpg",
        description: "Boosts immune system and reduces cold symptoms.",
        cost: "$16",
      },
      {
        name: "Peppermint",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mintd.jpg/480px-Mintd.jpg",
        description: "Relieves headaches and aids digestion.",
        cost: "$13",
      },
      {
        name: "Lemon Balm",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Lemon_balm_in_flower.jpg/480px-Lemon_balm_in_flower.jpg",
        description: "Reduces anxiety and aids sleep quality.",
        cost: "$14",
      },
      {
        name: "Chamomile",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Chamomile_%40_Norwood_Farm.jpg/480px-Chamomile_%40_Norwood_Farm.jpg",
        description: "Calms nerves and promotes sleep.",
        cost: "$15",
      },
      {
        name: "Calendula",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Calendula_closeup.jpg/480px-Calendula_closeup.jpg",
        description: "Heals wounds and soothes skin irritations.",
        cost: "$12",
      },
    ],
  },
  {
    category: "Low Maintenance Plants",
    plants: [
      {
        name: "ZZ Plant",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ZZ_Plant_%28Zamioculcas_zamiifolia%29.jpg/480px-ZZ_Plant_%28Zamioculcas_zamiifolia%29.jpg",
        description: "Thrives in low light with minimal watering.",
        cost: "$25",
      },
      {
        name: "Pothos",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Epipremnum_aureum_31082012.jpg/480px-Epipremnum_aureum_31082012.jpg",
        description: "Nearly indestructible trailing vine for beginners.",
        cost: "$10",
      },
      {
        name: "Snake Plant",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/480px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg",
        description: "Tolerates neglect, low light, and irregular watering.",
        cost: "$15",
      },
      {
        name: "Cast Iron Plant",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Aspidistra_elatior1.jpg/480px-Aspidistra_elatior1.jpg",
        description: "Extremely hardy and tolerant of poor conditions.",
        cost: "$20",
      },
      {
        name: "Succulents",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Succulent_plant_with_pink_flowers.jpg/480px-Succulent_plant_with_pink_flowers.jpg",
        description: "Store water in leaves, rarely need watering.",
        cost: "$9",
      },
      {
        name: "Aglaonema",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Aglaonema_Siam.jpg/480px-Aglaonema_Siam.jpg",
        description: "Colorful foliage that thrives in low light conditions.",
        cost: "$22",
      },
    ],
  },
];

function PlantCard({ plant, addedToCart, handleAddToCart }) {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-img" />
      <div className="plant-info">
        <div className="plant-name">{plant.name}</div>
        <div className="plant-description">{plant.description}</div>
        <div className="plant-price">{plant.cost}</div>
        <button
          className="add-to-cart-btn"
          onClick={() => handleAddToCart(plant)}
          disabled={addedToCart[plant.name]}
        >
          {addedToCart[plant.name] ? 'Added to Cart ✓' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

function ProductList({ setPage }) {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    const item = {
      id: plant.name,
      name: plant.name,
      image: plant.image,
      description: plant.description,
      price: parseFloat(plant.cost.replace('$', '')),
    };
    dispatch(addItem(item));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="product-list-page">
      <h1 className="page-title">Paradise Nursery 🌿</h1>
      <p className="page-subtitle">Find your perfect plant companion</p>

      {plantsArray.map((categoryObj) => (
        <div className="category-section" key={categoryObj.category}>
          <h2 className="category-title">{categoryObj.category}</h2>
          <div className="plants-grid">
            {categoryObj.plants.map((plant) => (
              <PlantCard
                key={plant.name + categoryObj.category}
                plant={plant}
                addedToCart={addedToCart}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
