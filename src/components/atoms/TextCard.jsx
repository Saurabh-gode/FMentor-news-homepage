const TextCard = ({ headerTitle, headerDesc, border = false }) => {
  return (
    <div
      className={`flex flex-col text-left justify-evenly min-h-32 max-w-sm m-4 py-3 px-1 font-inter ${
        border && "border-b-[1px] border-dark-grayish-blue"
      }`}
    >
      <h1 className="font-bold text-off-white text-2xl hover:text-soft-orange my-1">
        {headerTitle}
      </h1>
      <p className="text-[15px] text-grayish-blue font-light">{headerDesc}</p>
    </div>
  );
};

export default TextCard;
