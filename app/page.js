import Hero from "@/components/Hero";
import Frame1 from "@/components/Frame1";
import Frame2 from "@/components/Frame2";
import Frame3 from "@/components/Frame3";
import Frame4 from "@/components/Frame4"; 
import Frame5 from '../components/Frame5';

export default function Home() {
  try {
    return (
      <>
       
        <Hero />
        <Frame1 />
        <Frame2 />
        <Frame3 />
        <Frame4 /> 
        <Frame5 />

      </>
    );
  } catch (error) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }
}