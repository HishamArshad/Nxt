import Banner from "@/components/Banner";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar"; 
import Vidtabs from "@/components/Vidtab"; 
import Tiltsection from "@/components/Tiltsection"
import Footer from "@/components/Footer";
export default function Home() {
  return (
  <>
 
 <Navbar />
  
   <header >

    <Hero />
    
    </header>
    <main>
    <Vidtabs />
    <Grid />
    <Banner />
    <Tiltsection />
    </main>
      <Footer />
    
  </>
  );
}
