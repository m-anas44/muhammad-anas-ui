import Content from '@/views/Content'
import Hero from '@/views/Hero'
import InputSection from '@/views/InputSection'
import ProductList from '@/views/ProductList'
import Promotions from '@/views/Promotions'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <Promotions />
      <ProductList />
      <Content />
      <InputSection />
    </div>
  )
}
