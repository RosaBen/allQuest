# multiple actions

## useEffect, Loader, Filtre

### loader

request.js

```js
import axios from "axios";

export default function getHouses() {
  return axios
    .get("http://localhost:8000/houses")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
}
```

main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import getHouses from "./services/request.js";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Houses from "./pages/Houses.jsx";

import "./styles/app.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/houses",
        element: <Houses />,
        loader: getHouses,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
```

page.jsx
ajout du props dans le parent

```jsx
import { useLoaderData } from "react-router-dom";
import HouseCard from "../components/HouseCard";

export default function Houses() {
  const houses = useLoaderData();
  return (
    <>
      <section>
        <HouseCard houses={houses} />
      </section>
    </>
  );
}
```

composants.jsx
recupère props dans paramètres

```jsx
import PropTypes from "prop-types";
export default function HouseCard({ houses }) {
  return (
    <article>
      {houses.map((house) => (
        <div key={house.id}>
          <h2>{house.name}</h2>
          <h3>Type: {house.type}</h3>
          <h3>Description</h3>
          <p>{house.desc}</p>
          <img src={house.img} alt={house.name} />
        </div>
      ))}
    </article>
  );
}

HouseCard.propTypes = {
  houses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ),
};
```

### useEffect

permet d'executer qqchose au moment où le composant est monté, on desire afficher le composant

#### exempleUE1

syntaxe useEffect(() => {}, []);
useEffect a 2 paramètres: une fonction et ensuite un tableau de dépendance
on utilise le useeffect à la place du loader

page ou composant
ajouter usestate
ajouter useeffect
ajoute requete GET

```jsx
import axios from "axios";
import { useEffect, useState } from "react";
import HouseCard from "../components/HouseCard";

export default function HouseUseEffect() {
  const [houses, setHouses] = useState([]);

  const getTheHouses = () => {
    return axios
      .get("http://localhost:8000/houses")
      .then((response) => setHouses(response.data))
      .catch((error) => console.error(error));
  };
  console.info("sethouses", setHouses);
  console.info(houses);
  useEffect(() => {
    getTheHouses();
  }, []);

  return (
    <>
      <section>
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </section>
    </>
  );
}
```

#### exempleUE2

page Area.jsx avec useeffect

```jsx
// exemple1
import { useEffect, useState } from "react";

export default function Area() {
  const [search, setSearch] = useState("");
  const [test, setTest] = useState(true);

  const handleChangeForm = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    setTest(!test);
  };

  useEffect(() => {
    console.log("useEffect");
  }, [test]);

  console.info(search);
  console.info(test);
  return (
    <section>
      <h1>Choose a location</h1>
      <input type="text" onChange={handleChangeForm} />
      <button type="button" onClick={handleClick}>
        click
      </button>
    </section>
  );
}
```

AreaWithUseEffect.jsx

```jsx
// exemple2
// Utilisation du useEffect pour fetcher de la data
import { useEffect, useState } from "react";
import axios from "axios";
export default function AreaWithUseEffect() {
  const [areas, setAreas] = useState([]);
  const getAreas = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((response) => setAreas(response.data.meals))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getAreas();
  }, []);
  console.info(areas);
  return (
    <section>
      <h1>Choose a location</h1>
      {areas.map((area) => (
        <p key={area.strArea}>{area.strArea}</p>
      ))}
    </section>
  );
}
```

main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Category from "./pages/Category";
import About from "./pages/About";
import Area from "./pages/Area";
import { getAreas, getCategories } from "./services/request";

import "./styles/app.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/home.css";
import "./styles/recipeCard.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/recipes/:id",
        element: <RecipeDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/category",
        element: <Category />,
        loader: getCategories,
      },
      {
        path: "/area",
        element: <Area />,
        loader: getAreas,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
```

App.jsx

```jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
```

request.js

```js
import axios from "axios";
export function getAreas() {
  return axios
    .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    .then((response) => response.data.meals)
    .catch((error) => console.error(error));
}
export function getCategories() {
  return axios
    .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then((response) => response.data)
    .catch((error) => console.error(error));
}
```

Category.jsx

```jsx
import { useLoaderData } from "react-router-dom";
export default function Category() {
  console.info(useLoaderData());
  return (
    <section>
      <h1>Nos catégories</h1>
    </section>
  );
}
```

Navbar.jsx

```jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <h2>Ratatouille</h2>
        <h3>tout le monde peut cuisiner</h3>
      </div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/recipes">Nos recettes</Link>
        <Link to="/area">Cuisine du Monde</Link>
        <Link to="/category">Nos catégories</Link>
        <Link to="/about">À propos de nous</Link>
      </nav>
    </header>
  );
}
```

page Area.jsx avec loader

```jsx
import { useLoaderData } from "react-router-dom";
export default function Area() {
  const meals = useLoaderData();
  return (
    <section>
      <h1>Choose a location</h1>
      {meals.map((meal) => (
        <p key={meal.strArea}>{meal.strArea}</p>
      ))}
    </section>
  );
}
```

### Filtre

#### exempleF1

```jsx
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import HouseCard from "../components/HouseCard";

export default function Houses() {
  const houses = useLoaderData();
  const [currentFilter, setCurrentFilter] = useState("");

  const types = [
    {
      id: 1,
      name: "Maison",
    },
    {
      id: 2,
      name: "Appartement",
    },
    {
      id: 3,
      name: "Château",
    },
  ];

  // e.target.value is the value of the selected option
  const getfilter = (e) => {
    setCurrentFilter(e.target.value);
  };

  return (
    <>
      <section>
        <select onChange={getfilter}>
          <option value="">Tous les types</option>
          {types.map((type) => (
            <option key={type.id} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </section>
      <section>
        {houses
          .filter((house) => house.type === currentFilter)
          .map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
      </section>
    </>
  );
}
```

#### exempleF2

```jsx
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Basket from "./components/Basket";

function App() {
  const productList = [
    {
      id: 1,
      model: "Fender Jaguar : Kurt Cobain Edition",
      description:
        "Guitare officielle de Kurt Cobain, leader emblématique de Nirvana",
      price: 1450,
      picture:
        "data:image/jpeg;base64,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",
      available: true,
      category: "electric",
    },
    {
      id: 2,
      picture:
        "data:image/jpeg;base64,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",
      available: false,
      category: "electric",
    },
    {
      id: 3,
      picture:
        "data:image/jpeg;base64,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",
      available: true,
      category: "electric",
    },
    {
      id: 4,
      model: "Epiphone Hummingbird",
      description:
        "Keith Richards, Jimmy Page, Marc Bolan de T. Rex, John McLaughlin, Sheryl Crow et une myriade d'autres guitaristes ont joués sur cette guitare",
      price: 1240,
      picture:
        "data:image/jpeg;base64,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",
      available: true,
      category: "folk",
    },
    {
      id: 5,
      model: "Yamaha CGS103A",
      description: "Une super guitare classique pour les débutants",
      price: 1240,
      picture:
        "data:image/jpeg;base64,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",
      available: false,
      category: "acoustic",
    },
  ];

  const [basket, setBasket] = useState([]);
  const [selection, setSelection] = useState("");
  const handleChangeSelection = (event) => {
    setSelection(event.target.value);
  };
  // OPTION 1 FILTRE
  // const filteredProductList = productList.filter((product) =>
  //   selection === "" ? product : product.category === selection
  // );
  // OPTION 2 FILTRE
  const filteredProductList = productList.filter(
    (product) => product.category === selection || selection === "",
  );

  return (
    <>
      <Navbar />
      <main>
        <h1>Ma boutique en ligne</h1>
        <label>
          Filtrer les guitares par catégories :
          <select onChange={handleChangeSelection}>
            <option value="">Toutes les guitares</option>
            <option value="electric">Electric</option>
            <option value="folk">Folk</option>
            <option value="acoustic">Acoustic</option>
          </select>
        </label>
        <section>
          {filteredProductList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              tools={{ basket, setBasket }}
            />
          ))}
        </section>
        <Basket basket={basket} />
      </main>
      <Footer />
    </>
  );
}

export default App;
```

### Search bar avec api

```jsx
import axios from "axios";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handleChangeSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const searchData = () => {
    // www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
    // Nous devons utiliser cette route API en modifiant Arrabiata

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => setData(response.data.meals))
      .catch((error) => console.error(error));
  };

  console.log(data);

  return (
    <>
      <h1>Fetch</h1>

      <input
        onChange={handleChangeSearchInput}
        type="text"
        name=""
        id=""
        placeholder="Cherche une recette"
      />
      <button onClick={searchData}>RECHERCHER</button>
      <ul>
        {data === null
          ? "Aucun résultat"
          : data.map((plat) => <li key={plat.idMeal}>{plat.strMeal}</li>)}
      </ul>
    </>
  );
}

export default App;
```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```

```jsx

```
