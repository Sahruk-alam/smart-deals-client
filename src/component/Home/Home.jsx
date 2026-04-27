import MyProducts from "../pages/MyProducts";
import Recent from "./Recent";
const recentProducts = fetch(
  "https://smart-deals-api-server-sandy-rho.vercel.app/recent-products",
).then((res) => res.json());
const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#FFE6FD] to-[#E0F8F5] py-15">
        <h2 className="text-4xl font-bold text-center ">
          Deal your <span className="text-primary">Products</span> in a Smart
          way !
        </h2>
        <p className="text-center mt-4">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>
        <div className="text-center px-20 mt-4">
          <input
            className="rounded-full  border py-1.5"
            type="search"
            name="search"
            id=""
            placeholder="Search products..."
          />
        </div>
        <div className="justify-center mt-4 gap-4 flex">
          <button className="btn btn-primary">Watch All Products</button>
          <button className="btn btn-primary">Post an Product</button>
        </div>
      </div>
      <div>
        <Recent recentProducts={recentProducts}></Recent>
      </div>
    </div>
  );
};

export default Home;
