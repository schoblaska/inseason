const Footer = () => (
  <div className="footer-container">
    <div className="footer">
      <div id="headshot"></div>
      <p>
        This app was written by me, Joey Schoblaska. You can check out some of
        the other things I'm working on by visiting my{" "}
        <a href="http://schoblaska.org">website</a> or my{" "}
        <a href="http://github.com/joeyschoblaska">github profile</a>. You can
        also follow me on twitter at{" "}
        <a href="http://twitter.com/joeyschoblaska">@joeyschoblaska</a>.
      </p>
      <p>
        Thanks to{" "}
        <a href="http://localfoods.about.com/od/searchbystate/State_Seasonal_Produce_Guides.htm">
          about.com
        </a>{" "}
        for the original dataset.
      </p>
      <p className="clear"></p>
    </div>
  </div>
);

export default Footer;
