import Image from "next/image";
import styles from "./page.module.css";
import jsonData from "./data.json";





export default function Home() {
  var indents = jsonData.cards.map(function (card, index) {
    var links = card.links.map(function (link, index) {
      return (
        <a  className="linkitem" key={index} href={link.href}>
          {link.text}</a>
      )
    });
    return (
      <div  className="catitem" key={index}>
        <img className="catimg"
          src={card.image}/>
        <h3 className="catitemtitle">{card.title}</h3>
        <p className="catitembody">{card.body}</p>
        <div className="catitemlinks">{links}</div>
      </div>
    );
  });

  return (
    //  <div>{JSON.stringify(jsonData, null, 2)}</div>
    <div className="maincontent">
      <h1>{jsonData.title}</h1>
      <div className="devnotes" dangerouslySetInnerHTML={{ __html: jsonData.body }} />
      <div className="deccontent"> 
        <h2>{jsonData.deck_heading}</h2>
      </div>
      <div className="cardcontent">{indents}</div>
    </div>
  );
}
