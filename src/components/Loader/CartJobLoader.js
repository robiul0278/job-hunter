import { getShoppingCart } from "../utilities/fakedb";

const cartJobLoader = async () => {
    const loaderJobs = await fetch(`/featured.json`);
    const jobs = await loaderJobs.json();

    const storedCart = getShoppingCart();

    const savedCart = [];
    // console.log(savedCart);

    for(const id in storedCart){
        const addedJob = jobs.find(db => db.id == id);
        if(addedJob){
            // const quantity = storedCart[id];
            // addedJob.quantity = quantity;
            savedCart.push(addedJob);
        }
    }
    // console.log(storedCart);
    return savedCart;
}

export default cartJobLoader;