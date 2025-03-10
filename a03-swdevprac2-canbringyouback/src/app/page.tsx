import Image from "next/image";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Banner/ >
      <div style={{margin:"20px",display:"flex",flexDirection:"row",alignContent:"space-around",
        justifyContent:"space-around",flexWrap:"wrap"}}>
        <Card />
      </div>
    </main>
  );
}
