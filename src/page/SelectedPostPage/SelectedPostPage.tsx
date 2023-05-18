import { FC } from "react";
import { Typogrphy } from "../../components/Typogrphy/Typogrphy";
import { IconButton } from "../../components/IconButton/IconButton";
import { NavBtn } from "./NavBtn/NavBtn";
import { Bookmark, Down, Up } from "../../assets";
import { BreadCrumbs } from "./BreadCrumbs/BreadCrumbs";
import "./SelectedPostPage.scss";

export const SelectedPostPage: FC = () => {
  const posts: string[] = [
    `Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets
    and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his
    341st day in orbit, a U.S. record for a single spaceflight.`,
    `During the final days of Alice Neel’s blockbuster solo show at the Metropolitan Museum of Art this summer, the line into the exhibition
    spanned the length of the museum’s European paintings corridor, and the wait was over half an hour. Titled “People Come First,” the show
    featured more than 100 gritty cityscapes, domestic interiors, and stripped-down portraits of Neel’s neighbors, friends, and fellow artists
    in the largest-ever showing of her work in her hometown of New York City.`,
    `The stories tracked Hambling’s trailblazing career while focusing on her current and upcoming projects. The artist’s installation Relic
    (2021), produced alongside sound recordist Chris Watson, was recently on view at Snape Maltings in London. Meanwhile, this October,
    portraits by Hambling will be presented at the Italian gallery Thomas Brambilla. The artist’s “Wave Series” is also currently being
    exhibited in the group show “Summer Exhibition” at Marlborough London, which runs through September 10th.`,
    `The excitement surrounding this exhibition delighted longtime fans of the expressive painter while inspiring a legion of new devotees—a
    trend matched by Neel’s strengthening position in the art market, especially in the past year. In May, Neel’s 1966 canvas Dr. Finger’s
    Waiting Room roused a flurry of bids from the United States, Asia, and Europe at Christie’s New York, where it ultimately sold for just over
    $3 million, breaking both its high estimate and the artist’s auction record. Just hours earlier at Sotheby’s New York, Neel’s double
    portrait Henry and Sally Hope (1977), depicting an art historian and his wife, sold for just under $1.6 million, notching her third-highest
    auction result.`,
    `The demand for Maggi Hambling’s evocative portraits and exuberant depictions of seascapes and landscapes surged this past week, when the
    number of collectors inquiring on her work increased more than tenfold from the week before. The British artist, esteemed for her whirling,
    gestural paintings and bold public sculptures, has seen a consistent wave of interest in her work that has accelerated in the past few
    years. This recent uptick in interest is consistent with Hambling’s career trajectory, which has been punctuated by a flurry of public
    commissions, institutional recognition, and secondary-market demand.`,
  ];
  const imgSrc: string = "https://airandspace.si.edu/webimages/highres/S115-E-05753h.jpg";
  const funcHolder = () => {
    console.log("butoon pressed");
  };

  return (
    <div className="selected-post">
      <BreadCrumbs />
      <Typogrphy content="Astronauts prep for new solar arrays on nearly seven-hour spacewalk" type="H1" />
      <div className="selected-post__img-wrapper">
        <img className="selected-post__img" src={imgSrc} alt="" />
      </div>
      <section className="selected-post__texts">
        {posts.map((post) => (
          <Typogrphy content={post} type="primary" />
        ))}
      </section>
      <section className="selected-post__btns">
        <div className="selected-post__scores">
          <IconButton onClick={funcHolder}>
            <div className="selected-post__up-btn">
              <Up />
            </div>
          </IconButton>
          <IconButton onClick={funcHolder}>
            <div className="selected-post__down-btn">
              <Down />
            </div>
          </IconButton>
        </div>
        <div className="selected-post__favorite">
          <IconButton onClick={funcHolder}>
            <div className="selected-post__favorite-btn">
              <Bookmark />
              <span>Add to favorites</span>
            </div>
          </IconButton>
        </div>
      </section>
      <section className="selected-post__change-page">
        <NavBtn type="Prev" title="10 Things to Know About Salvador Dalí" />
        <NavBtn type="Next" title="8 Beautiful Villas Belonging to Artists You Need to See" />
      </section>
    </div>
  );
};
