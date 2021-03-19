import "../styles/componentStyles/Footer.css";



export default function Footer({dark}) {
  return (
    <footer className={dark ? "footerArea" : "darkFooterArea"}>
      <h2 className={dark ? "footerDetail" : "darkFooterDetail"}>© 2021</h2>
    </footer>
  );
}
