import Banner from "@/components/Banner";
import Card from "@/components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Banner/ >
      <div className="m-5 flex flex-row content-around,
        justify-around flex-wrap ">
        <Card hospitalName='Chulalongkorn Hospital' imgSrc="/image/chula.jpg"/>
        <Card hospitalName='Rajavithi Hospital' imgSrc="/image/rajavithi.jpg"/>
        <Card hospitalName='Thammasat University Hospital' imgSrc="/image/thammasat.jpg"/>
      </div>
    </main>
  );
}
