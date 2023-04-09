import "./Cart.css"

const CategoryCard = ({ category }) => {
  const { title, job, img } = category;
  console.log(title)
  return (
    <div>
      <div className="card w-80 category-bg">
        <div className="card-body">
        <img className="cart-img" src={img} alt="" />
          <h2 className="card-title">{title}</h2>
          <p className=" text-slate-500">{job}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
