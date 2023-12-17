import { GamingLibraryCard, SectionHeader, SectionWrapper } from "../../components/index";
import { GamingLibraryData } from "../../Data/GamingLibraryData";
import './GamingLibrary.css'



const GamingLibrary = () => {

  const cards = GamingLibraryData.map(card => {
    return <GamingLibraryCard key={card.id} img={card.img} category={card.category} title={card.title} date_added={card.date_added} hours_played={card.hours_played} downloaded={card.downloaded} />
  })

  return (
    <>
      <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className="gaming-library-cards">
          {cards}
        </div>
      </SectionWrapper>
    </>
  )
}

export default GamingLibrary