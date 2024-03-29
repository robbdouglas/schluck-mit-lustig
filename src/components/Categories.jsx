// Categories.jsx

import "../styles/Categories.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./AppContext";

function Categories() {
  const navigate = useNavigate();

  const { randomPlayer, categories, setCategory } = useAppContext(); // Nutze den Kontext

  const handleBackToHomeButtonClick = () => {
    navigate("/");
  };

  const handleCategoryButtonClick = (category) => {
    setCategory(category);
    navigate("/task");
  };

  return (
    <div>
      <h3>Du bist dran</h3>
      {randomPlayer && <h1>{randomPlayer}</h1>}
      <section>
        {categories &&
          categories.map((category) => (
            <button
              key={category}
              className="category-button"
              onClick={() => handleCategoryButtonClick(category)}
            >
              {category}
            </button>
          ))}
        <button className="settings-btn">Menü</button>
        <button className="back-to-home" onClick={handleBackToHomeButtonClick}>
          Spiel beenden
        </button>
      </section>
    </div>
  );
}

export default Categories;
