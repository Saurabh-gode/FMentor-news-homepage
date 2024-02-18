import HeaderButton from "./atoms/HeaderButton";

const Header = () => {
  return (
    <div className="flex align-middle justify-between">
      <div className="">
        <img src="/images/logo.svg"></img>
      </div>
      <div className="flex ">
        <HeaderButton title={"home"} />
        <HeaderButton title={"new"} />
        <HeaderButton title={"popular"} />
        <HeaderButton title={"trending"} />
        <HeaderButton title={"categories"} />
      </div>
    </div>
  );
};

export default Header;
