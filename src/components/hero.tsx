
export default function Hero() {

  const styles = {
    backgroundImage: `url('./assets/game-bg.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="h-[calc(100vh-96px)] relative w-full overflow-hidden flex flex-col items-center justify-center text-white" style={styles}>
      <div className="text-center space-y-6">
        <h1 className="uppercase text-5xl font-extrabold">Explore a wolrd of mythical creatures</h1>
        <p>Embark on a Legendary Journey Among Fantastical Beings</p>
        <button className="bg-primary rounded-lg py-3 px-4">Get Early Access</button>
      </div>
    </div>
  );
}
