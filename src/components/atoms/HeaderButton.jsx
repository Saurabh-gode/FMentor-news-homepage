const HeaderButton = ({ title }) => {
  return (
    <div className="p-2">
      <a
        className="font-inter no-underline text-dark-grayish-blue capitalize hover:text-soft-red"
        href="#"
      >
        {title}
      </a>
    </div>
  );
};

export default HeaderButton;
