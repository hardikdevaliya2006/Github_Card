import gitIco from "../../public/svg/github-mark.svg";
const Title = () => {
  return (
    <div className="flex items-center justify-start h-fit mt-3 w-full gap-2">
      <div className="logo">
        <img src={gitIco} alt="github" className="h-12 w-12" />
      </div>
      <div className="textWrap flex flex-col items-start justify-center">
        <h1 className="text-black text-3xl font-semibold">Github Cards</h1>
        <h2 className="text-black/50">Make shareable github cards</h2>
      </div>
    </div>
  );
};

export default Title;
