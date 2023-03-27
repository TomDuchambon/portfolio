import './index.scss'
import LogoName from '../../assets/images/logo-td.png'
import Squares from './Squares'

const Landing = () => {
  return (
    <>
    <div className="container landing-page">
        <img src={LogoName} alt="logo" />
        <Squares />
        <>
        <div className="line bottom-left" />
        <div className="line bottom-right" />
        <div className="line top-left" />
        <div className="line top-right" />
        </>
      <h2>Turn all the squares black</h2>
    </div>
    </>
  )
}

export default Landing
