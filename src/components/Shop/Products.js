import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const SUB_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Phone",
    description: "iPhone 13 Pro Max",
  },
  {
    id: "p2",
    price: 5,
    title: "Laptop",
    description: "Dell Latitude",
  },
  {
    id: "p3",
    price: 10,
    title: "MacBook",
    description: "2020",
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{SUB_PRODUCTS.map((product) => (
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
        
      </ul>
    </section>
  );
};

export default Products;
