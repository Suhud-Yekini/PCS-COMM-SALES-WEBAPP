import principleCleanLogo from "../assets/principleCleanLogo.png";

const PrincipleLogo = ({principleLogoStyling}) => {
  return (
    <img src={principleCleanLogo}
        alt="Principle Clean Logo"
        className={principleLogoStyling}
    />
  )
}

export default PrincipleLogo
