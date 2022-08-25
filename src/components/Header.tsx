const Header = ({ stateKey }: { stateKey: string }) => (
  <div className="header-image">
    <img src={`/images/headers/${stateKey.toLowerCase()}.png`} alt="banner" />
  </div>
);

export default Header;
