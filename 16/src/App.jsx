
import Product from './components/Product';
import './App.css';

function App() {
  return (
    <div>

      <h1>Online Product Catalogue</h1>

      <div className="products">

        <Product
          name="Laptop"
          image="https://placehold.co/200x130?text=Laptop"
          price="50000"
          description="Powerful laptop for work and study."
        />

        <Product
          name="Smartphone"
          image="https://placehold.co/200x130?text=Phone"
          price="20000"
          description="Latest smartphone with good camera."
        />

        <Product
          name="Headphones"
          image="https://placehold.co/200x130?text=Headphones"
          price="2000"
          description="Wireless headphones with clear sound."
        />

        <Product
          name="Smart Watch"
          image="https://placehold.co/200x130?text=Watch"
          price="3000"
          description="Smart watch with fitness tracking."
        />

      </div>

    </div>
  );
}

export default App;
