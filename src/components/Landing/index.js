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
      <h2>Paint it, black.</h2>
      <p>Designed and build by Tom Duchambon ©</p>
    </div>
    </>
  )
}

export default Landing
