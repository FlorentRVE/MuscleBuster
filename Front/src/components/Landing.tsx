
function Landing() {
  return (
    <div className="bg-[url('/images/Landing.png')] h-screen flex flex-col items-center justify-center gap-5">
      <div className="flex justify-center items-center gap-5">
        <div className="h-1 bg-white w-24 rounded-xl"></div>
        <p className="text-orange-400 text-[15vh] font-extrabold">
          MUSCLEBUSTER
        </p>
        <div className="h-1 bg-white w-24 rounded-xl"></div>
      </div>

      <a href="/catalogue">
        <div className="bg-[url('/images/Rectangle.png')] bg-cover px-12 py-2 text-white font-semibold hover:scale-125 hover:cursor-pointer">
          Découvrir le catalogue
        </div>
      </a>
    </div>
  );
}

export default Landing