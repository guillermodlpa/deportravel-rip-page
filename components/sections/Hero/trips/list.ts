import runningDesertImage from "./62822ba60171aef418c1e96f_mela_home_page.png";
import vietnamBiciImage from "./62b0991d5e8512787c2b8561_Vietnam_bici.jpeg";
import tailandiaMotoImage from "./62b09738603339dad026c9a1_Tailandia_moto.jpeg";
import yogaImage from "./628b3f7a4b5c7138822c6fbd_Yoga.jpeg";
import { TFunction } from "next-i18next";

export default function getTrips(t: TFunction) {
  const trips = [
    {
      title: t("runningDunesJordania.title"),
      sport: t("runningDunesJordania.sport"),
      location: t("runningDunesJordania.location"),
      dates: t("runningDunesJordania.dates"),
      price: t("runningDunesJordania.price"),
      image: runningDesertImage,
      imageAlt: t("runningDunesJordania.imageAlt"),
    },
    {
      title: t("vietnamVtt2022.title"),
      sport: t("vietnamVtt2022.sport"),
      location: t("vietnamVtt2022.location"),
      dates: t("vietnamVtt2022.dates"),
      price: t("vietnamVtt2022.price"),
      image: vietnamBiciImage,
      imageAlt: t("vietnamVtt2022.imageAlt"),
    },
    {
      title: t("trianguloDeOroNanMoto.title"),
      sport: t("trianguloDeOroNanMoto.sport"),
      location: t("trianguloDeOroNanMoto.location"),
      dates: t("trianguloDeOroNanMoto.dates"),
      price: t("trianguloDeOroNanMoto.price"),
      image: tailandiaMotoImage,
      imageAlt: t("trianguloDeOroNanMoto.imageAlt"),
    },
    {
      title: t("yogaMeditacionAgonda.title"),
      sport: t("yogaMeditacionAgonda.sport"),
      location: t("yogaMeditacionAgonda.location"),
      dates: t("yogaMeditacionAgonda.dates"),
      price: t("yogaMeditacionAgonda.price"),
      image: yogaImage,
      imageAlt: t("yogaMeditacionAgonda.imageAlt"),
    },
  ];
  return trips;
}
