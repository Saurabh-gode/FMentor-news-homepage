import TextCard from "../atoms/TextCard";

const DarkCard = () => {
  return (
    <div className="flex mt-16 sm:mt-0 flex-col p-2 max-w-sm bg-very-dark-blue basis-5/6">
      <h1 className="text-left text-soft-orange font-black capitalize text-4xl mx-4 mt-4">New</h1>
      <TextCard
        headerTitle={"Hydrogen VS Electric Cars"}
        headerDesc={"Will hydrogen-fueled cars ever catch up to EVs?"}
        border={true}
      />
      <TextCard
        headerTitle={"The Downsides of AI Artistry"}
        headerDesc={"What are the possible adverse effects of on-demand Ai image generation?"}
        border={true}
      />
      <TextCard
        headerTitle={"Is VC Funding Drying Up?"}
        headerDesc={
          "Private funding by VC firms is down 50% YOY. We take a look at what that means."
        }
      />
    </div>
  );
};

export default DarkCard;
