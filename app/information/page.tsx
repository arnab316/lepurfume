import Hero from '@/components/sections/Hero'
import ScrollingCard from '@/components/sections/ScrollingCard'
import HowItWorks from '@/components/sections/HowItWorks'
import ChooseYourWorld from '@/components/sections/ChooseYourWorld'
import UniquelyBottled from '@/components/sections/UniquelyBottled'
import Testimonials from '@/components/sections/Testimonials'
import FAQs from '@/components/sections/FAQs'
import Footer from '@/components/sections/Footer'

export default function InformationPage() {
  return (
    <main>
      <Hero />
      <ScrollingCard />
      <HowItWorks />
      <ChooseYourWorld />
      <UniquelyBottled />
      <Testimonials />
      <FAQs />
      <Footer />
    </main>
  )
}
