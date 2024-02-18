import ImageCard from "../atoms/ImageCard";

const HorizontalCard = () => {
  return (
    <div className="flex flex-col sm:flex-row align-middle justify-evenly mt-6">
      <ImageCard
        path="image-retro-pcs.jpg"
        headerCount={"01"}
        headerTitle={"Reviving Retro PCs"}
        headerDesc={"What happens when old PCs are given modern upgrades?"}
      />
      <ImageCard
        path="image-top-laptops.jpg"
        headerCount={"02"}
        headerTitle={"Top 10 Laptops of 2022"}
        headerDesc={"Our best picks for various needs and budgets."}
      />
      <ImageCard
        path="image-gaming-growth.jpg"
        headerCount={"03"}
        headerTitle={"The Growth of Gaming"}
        headerDesc={"How the pandemic has sparked fresh opportunities"}
      />
    </div>
  );
};

export default HorizontalCard;
