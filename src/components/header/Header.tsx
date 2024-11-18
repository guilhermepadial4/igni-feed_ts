import "./header.scss";

import igniteLogo from "../../assets/igni-simbol.svg";

export function Header() {
  return (
    <>
      <div className="container__header">
        <img src={igniteLogo} alt="Logotipo do Igni" />
        <p>Igini Feed</p>
      </div>
    </>
  );
}
