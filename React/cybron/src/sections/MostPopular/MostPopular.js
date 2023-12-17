import './MostPopular.css'
import { MostPopularData } from '../../Data/MostPopularData';
import { Card, SectionHeader, SectionWrapper } from "../../components/index";






const MostPopular = () => {
  const cards = MostPopularData.map(card => {
    return <Card key={card.id} img={card.img} category={card.category} title={card.title} rate={card.rate} download={card.download} />
  })
  return (
    <>
      <SectionWrapper>
        <SectionHeader>Most Popular</SectionHeader>
        <div className="most-popular-items">
          {cards}
        </div>
      </SectionWrapper>
    </>
  )
}

export default MostPopular