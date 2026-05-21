import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Method } from "@/components/method";
import { Commitments } from "@/components/commitments";
import { Work } from "@/components/work";
import { Team } from "@/components/team";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Services />
        <Method />
        <Commitments />
        <Work />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
