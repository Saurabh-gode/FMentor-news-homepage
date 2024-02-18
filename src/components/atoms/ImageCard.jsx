const ImageCard = ({ path, headerCount, headerTitle, headerDesc }) => {
  return (
    <div className="flex align-middle justify-evenly flex-grow max-w-md max-h-lg font-inter m-4">
      <div className="basis-1/3">
        <img src={`images/${path}`} alt={path} className="w-full h-full" />
      </div>
      <div className="flex flex-col text-left justify-evenly font-inter pl-6 py-0 basis-2/3">
        <h1 className="text-grayish-blue uppercase text-4xl font-bold">{headerCount}</h1>
        <h2 className="text-xl font-bold text-very-dark-blue hover:text-soft-red capitalize">
          {headerTitle}
        </h2>
        <p className="text-[15px] text-dark-grayish-blue">{headerDesc}</p>
      </div>
    </div>
  );
};

export default ImageCard;
