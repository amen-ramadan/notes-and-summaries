import './Buttons.css';


function PrimaryButton(props) {
  return (
    <div className='button primary-btn'>
      <a href='/#'>{props.children}</a>
    </div>
  )
}


function SecondaryButton(props) {
  return (
    <div className='button secondary-btn'>
      <a href='/#'>{props.children}</a>
    </div>
  )
}

export default PrimaryButton
export { SecondaryButton }