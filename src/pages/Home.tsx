import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";

export default function Home() {
  return (
    <>
      <LargeCard/>
      <section className="flex gap-6 flex-wrap">
        <MediumCard gameName="Hogwarts Legacy" gamePrice={49.99} gameImage="Hogwarts-Legacy.jpg"/>
        <MediumCard gameName="Spiderman Remastered" gamePrice={49.99} gameImage="Spiderman-Remastered.webp"/>
      </section>
    </>
  )
}
