# video wildCode resume

## créer un panier

créer un composant Basket
ajouter Basket sur App.jsx

### Usestate

le panier est un tableau d'objet donc on va utiliser usestate

#### dans le App.jsx(ou la page.jsx) du produit, importer le usestate

créer une const [name, setName]= usestate()
créer une fonction pour ajouter produit au panier
ajouter la props dans le composant produit

```jsx
import { useState } from "react";
import productList from "./services/data";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Basket from "./components/Basket";

function App() {
  const [basket, setBasket] = useState([]);

  return (
    <>
      <Navbar />
      <main>
        <h1>Ma boutique en ligne</h1>
        <section>
          {productList.length > 0 ? (
            productList.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                tools={{ basket, setBasket }}
              />
            ))
          ) : (
            <p>{`Il n'y a pas de guitare disponible`}</p>
          )}
        </section>
        <Basket />
      </main>
      <Footer />
    </>
  );
}

export default App;
```

#### dans le composant ou page

ajouter la props en paramètre de la fonction
l'exemple ci-dessous récupère qu'un seul produit

```jsx
/* eslint-disable react/prop-types */

export default function ProductCard({ product, tools }) {
  // créer une fonction pour ajouter article au panier
  // le panier sera un tableau d'objets

  console.log("tools", tools.setBasket);
  console.log("tool,basket", tools.basket);
  const addArticle = () => {
    tools.setBasket([product]);
  };

  return (
    <article>
      <div className="left_side">
        <img src={product.picture} alt={`Image d'une ${product.model}`} />
        <div className="description">
          <h2>{product.model}</h2>
          <p>{product.description}</p>
          <button onClick={addArticle}>Ajouter l&apos;article</button>

          {product.available === true ? (
            <h4 className="available">Disponible</h4>
          ) : (
            <h4 className="not_available">Non disponible</h4>
          )}
        </div>
      </div>
      <div className="price">
        <h3>{product.price} €</h3>
      </div>
    </article>
  );
}
```

on veut récupérer tous les produits donc nous allons utiliser le spreadoperator

### SpreadOperator

```jsx
/* eslint-disable react/prop-types */

export default function ProductCard({ product, tools }) {
  // créer une fonction pour ajouter article au panier
  // le panier sera un tableau d'objets

  // console.log("tools", tools.setBasket);
  console.log("tool,basket", tools.basket);
  const addArticle = () => {
    // on ajoute valeur du state avec prevBasket => [on récupère valeur actuelle et on ajoute le produit]
    tools.setBasket((prevBasket) => [...prevBasket, product]);
  };

  return (
    <article>
      <div className="left_side">
        <img src={product.picture} alt={`Image d'une ${product.model}`} />
        <div className="description">
          <h2>{product.model}</h2>
          <p>{product.description}</p>
          <button onClick={addArticle}>Ajouter l&apos;article</button>

          {product.available === true ? (
            <h4 className="available">Disponible</h4>
          ) : (
            <h4 className="not_available">Non disponible</h4>
          )}
        </div>
      </div>
      <div className="price">
        <h3>{product.price} €</h3>
      </div>
    </article>
  );
}
```

### Afficher les produits dans le basket

ajouter la props basket dans le parent

```jsx
import { useState } from "react";
import productList from "./services/data";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Basket from "./components/Basket";

function App() {
  const [basket, setBasket] = useState([]);

  return (
    <>
      <Navbar />
      <main>
        <h1>Ma boutique en ligne</h1>
        <section>
          {productList.length > 0 ? (
            productList.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                tools={{ basket, setBasket }}
              />
            ))
          ) : (
            <p>{`Il n'y a pas de guitare disponible`}</p>
          )}
        </section>
        <Basket basket={basket} />
      </main>
      <Footer />
    </>
  );
}

export default App;
```

ajouter le props en paramètre dans le composant enfant

```jsx
export default function Basket({ basket }) {
  return (
    <>
      <h1>Panier - composant basket</h1>
      <ul>
        {basket.map((article) => (
          <li key={article.id}>
            {article.model} - {article.price}€
          </li>
        ))}
      </ul>
      <h2>
        Total : {basket.reduce((sum, product) => sum + product.price, 0)}€
      </h2>
    </>
  );
}
```
