import '../App.css';
import { useState } from 'react';

function Header(props) {
  const [categories] = useState(['Zapatillas', 'Relojes', 'Notebook', 'Tecnología', 'Apple', 'Hogar']);

  const handleCategoryClick = (category) => {
    // Aquí puedes realizar acciones adicionales al hacer clic en una categoría
    console.log('Categoría seleccionada:', category);
  };

  return (
    <div className='flex shopping-card'>
      <div onClick={() => props.handleShow(false)}>DopeStyle</div>
      <div onClick={() => props.handleShow(true)}>
        Carro de compras <sup>{props.count}</sup>
      </div>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} onClick={() => handleCategoryClick(category)}>
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
