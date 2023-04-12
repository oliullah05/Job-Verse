import { getJobsCart } from "../Utilities/fakeDb";


const cartJobsLoader = async () => {
  const featuredJobsData = await fetch("/Jobs.json");
  const featuredJobs = await featuredJobsData.json();

  const storedCart = getJobsCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedJobs = featuredJobs.find((job) => job.id.toString() === id);
      savedCart.push(addedJobs);
   
    }


  return { savedCart, featuredJobs };
};
export default cartJobsLoader;