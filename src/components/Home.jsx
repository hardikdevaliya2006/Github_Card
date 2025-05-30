import MainContainer from "./MainContainer";
import Title from "./Title";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <main className="centerContainer md:max-w-[45vw] max-w-[95vw] m-auto h-screen flex flex-col items-center justify-center bg-main gap-4">
        <Title></Title>
        <div className="MainContant flex flex-col items-start justify-center bg-secondary w-full border-2 rounded-xl border-main-border p-3">
          <MainContainer></MainContainer>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Home;
