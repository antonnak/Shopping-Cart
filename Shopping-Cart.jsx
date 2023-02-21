function NavBar({ stockitems }) {
  const [cart, setCart] = React.useState([]);
  const [stock, setStock] = React.useState(stockitems);
  const { Button } = ReactBootstrap;
  const moveToCart = e => {
    let [name, num] = e.target.innerHTML.split(":"); 
    let newStock = stock.map((item, index) => {
      if (item.name == name && item.instock>0) {
        item.instock--;
        setCart([...cart,item]);
      };
      return item;
    });
    setStock(newStock);
  };
  const updatedList = stock.map((item, index) => {
    return (
      <Button onClick={moveToCart} key={index}>
        {item.name}:{item.instock}
      </Button>
    );
  });
  const updatedCart = cart.map((item, index) => {
    return (
      <Button key={index}>
        {item.name}
      </Button>
    );
  });

  return (
    <>
      <ul style={{ listStyleType: "none" }}>{updatedList}</ul>
      <h1>Shopping Cart</h1>
      <ul style={{ listStyleType: "none" }}>{updatedCart}</ul>
    </>
  );
}
const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 }
];
ReactDOM.render(
  <NavBar stockitems={menuItems} />,
  document.getElementById("root")
);
