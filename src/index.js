import React from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function Header() {
    return <h1>Fast React Pizza Co.</h1>;
    //return React.createElement('h1', null, 'Fast React Pizza Co.');
}

function Pizza() {
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="spinaci" />
            <h3>Pizza Spinaci</h3>
            <p>Tomato</p>
        </div>
    );
}

function Menu() {
    return (
        <div>
            <h2>Menu</h2>
            <Pizza />
        </div>
    );
}

function Footer() {
    return (
        <footer>
            {new Date().toLocaleTimeString()}. We're currently open!
        </footer>
    );
    /* return React.createElement(
        "footer",
        null,
        `${new Date().toLocaleTimeString()}. We're currently open!`
    ); */
}

function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
