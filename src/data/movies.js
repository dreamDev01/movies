import { Gender } from "./genders";

/*Data : List of movies*/
export const movies = [
  {
    id: "m1",
    title: "La ligne verte",
    gender: Gender.Fantastic.name,
    date: new Date(2000, 2, 1),
    price: 4.99,
    imageUrl:
      "https://fr.web.img4.acsta.net/medias/nmedia/18/66/15/78/19254683.jpg",
    synopsis:
      "Paul Edgecomb, pensionnaire centenaire d'une maison de retraite, est hanté par ses souvenirs. Gardien-chef du pénitencier de Cold Mountain en 1935, il était chargé de veiller au bon déroulement des exécutions capitales en s’efforçant d'adoucir les derniers moments des condamnés. Parmi eux se trouvait un colosse du nom de John Coffey, accusé du viol et du meurtre de deux fillettes. Intrigué par cet homme candide et timide aux dons magiques, Edgecomb va tisser avec lui des liens très forts.",
    actors: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    by: ["Frank Darabont", "Stephen King"],
    duration: "3 h 09 min",
    limit: "Interdit aux moins de 12 ans",
    publicNote: 4.6,
  },
  {
    id: "m2",
    title: "Blues brothers",
    gender: Gender.Comedy.name,
    date: new Date(1980, 10, 7),
    price: 2.99,
    imageUrl: "https://m.media-amazon.com/images/I/51Q4C8SPV6L._AC_SY445_.jpg",
    synopsis:
      "Dès sa sortie de prison, Jake Blues est emmené par son frère Elwood chez Soeur Mary Stigmata, qui dirige l'orphelinat dans lequel ils ont été élevés. Ils doivent réunir 5 000 dollars pour sauver l'établissement, sinon c'est l'expulsion.",
    actors: ["John Belushi", "Dan Aykroyd", "James Brown"],
    by: ["Dan Aykroyd", "John Landis"],
    duration: "2 h 29 min",
    limit: "",
    publicNote: 4.2,
  },
  {
    id: "m3",
    title: "Une nuit en enfer",
    gender: Gender.Horror.name,
    date: new Date(1996, 5, 26),
    price: 6.99,
    imageUrl:
      "https://fr.web.img2.acsta.net/medias/nmedia/18/62/83/60/19076744.jpg",
    synopsis:
      "Deux criminels prennent une famille en otage près de la frontière mexicaine, après une cavale particulièrement sanglante durant laquelle ils ont tué un policier et kidnappé l'employée d'un magasin. Ils se rendent tous ensemble dans un bar pour routier au-delà de la frontière mexicaine, appelé le Titty Twister, établissement qui leur réserve pas mal de surprises une fois la nuit tombée...",
    actors: ["George Clooney", "Quentin Tarantino", "Harvey Keitel"],
    by: ["Robert Kurtzman", "Quentin Tarantino"],
    duration: "1 h 47 min",
    limit: "Interdit aux moins de 16 ans",
    publicNote: 3.8,
  },
  {
    id: "m4",
    title: "Mad Max 2: Le défi",
    gender: Gender.Action.name,
    date: new Date(1982, 7, 11),
    price: 4.99,
    imageUrl: "https://m.media-amazon.com/images/I/91qplWiUsQL._AC_SL1500_.jpg",
    synopsis:
      "Dans un futur non défini, les réserves de pétrole sont épuisées et la violence règne sur le monde. Max, un ancien de la sécurité routière, se porte aux secours d'une communauté de fuyards aux prises avec des pirates de la route. La bataille se concentre autour d'une citerne de raffinerie.",
    actors: ["Mel Gibson", "Bruce Spence", "Vernon Wells"],
    by: ["Terry Hayes", "George Miller"],
    duration: "1 h 37 min",
    limit: "",
    publicNote: 4,
  },
  {
    id: "m5",
    title: "Bohemian Rhapsody",
    gender: Gender.Drama.name,
    date: new Date(2018, 9, 24),
    price: 6.99,
    imageUrl:
      "https://fr.web.img6.acsta.net/pictures/18/05/15/16/26/2028013.jpg",
    synopsis:
      "Bohemian Rhapsody retrace le destin extraordinaire du groupe Queen et de leur chanteur emblématique Freddie Mercury, qui a défié les stéréotypes, brisé les conventions et révolutionné la musique. Du succès fulgurant de Freddie Mercury à ses excès, risquant la quasi-implosion du groupe, jusqu’à son retour triomphal sur scène lors du concert Live Aid, alors qu’il était frappé par la maladie, découvrez la vie exceptionnelle d’un homme qui continue d’inspirer les outsiders, les rêveurs et tous ceux qui aiment la musique.",
    actors: ["Rami Malek", "Gwilym Lee", "Lucy Boynton"],
    by: ["Anthony McCarten", "Anthony McCarten"],
    duration: "2 h 15 min",
    limit: "",
    publicNote: 4.4,
  },
  {
    id: "m6",
    title: "Scarface",
    gender: Gender.Action.name,
    date: new Date(1984, 2, 7),
    price: 4.99,
    imageUrl:
      "https://static.fnac-static.com/multimedia/Images/FR/NR/35/34/15/1389621/1507-1/tsp20180524173037/Scarface.jpg",
    synopsis:
      "En 1980, Tony 'Scarface' Montana bénéficie d'une amnistie du gouvernement cubain pour retourner en Floride. Ambitieux et sans scrupules, il élabore un plan pour éliminer un caïd de la pègre et prendre la place qu'il occupait sur le marché de la drogue.",
    actors: ["Al Pacino", "Michelle Pfeiffer", "Steven Bauer"],
    by: ["Oliver Stone", "Ben Hecht"],
    duration: "2 h 45 min",
    limit: "Interdit aux moins de 12 ans",
    publicNote: 4.3,
  },
  {
    id: "m7",
    title: "Doom",
    gender: Gender.Horror.name,
    date: new Date(1993, 11, 10),
    price: 2.99,
    imageUrl:
      "https://fr.web.img3.acsta.net/medias/nmedia/18/35/93/09/18456395.jpg",
    synopsis:
      "Une chose terrible est arrivée à la station de recherche scientifique Olduvai, basée sur la planète Mars. Toutes les expériences se sont arrêtées, la communication ne passe plus. Les derniers messages reçus sont pour le moins angoissants. Le niveau 5 de quarantaine est déclaré et les seules personnes auxquelles l'accès est autorisé sont les membres du commando des Rapid Response Tactical Squad (RRTS). Mais sont-ils face à n'importe quel ennemi ? Les scientifiques de cette station de la planète rouge ont malencontreusement ouvert une porte dans laquelle se sont engouffrées toutes les créatures de l'enfer. Une armée de créatures de cauchemars d'origine inconnue est tapie derrière chaque recoin des innombrables pièces et couloirs de la base, tuant les quelques rares humains encore présents...",
    actors: ["Karl Urban", "Dwayne Johnson", "Rosamund Pike"],
    by: ["Dave Callaham", "Wesley Strick"],
    duration: "1 h 44 min",
    limit: "Interdit aux moins de 12 ans",
    publicNote: 1.6,
  },
  {
    id: "m8",
    title: "Pirates des caraibes: La malédiction du Black Pearl",
    gender: Gender.Action.name,
    date: new Date(2003, 7, 13),
    price: 5.99,
    imageUrl:
      "https://fr.web.img4.acsta.net/medias/nmedia/18/35/07/46/affiche2.jpg",
    synopsis:
      "Dans la mer des Caraïbes, au XVIIe siècle, Jack Sparrow, flibustier gentleman, voit sa vie idyllique basculer le jour où son ennemi, le perfide capitaine Barbossa, lui vole son bateau, le Black Pearl, puis attaque la ville de Port Royal, enlevant au passage la très belle fille du gouverneur, Elizabeth Swann. L'ami d'enfance de celle-ci, Will Turner, se joint à Jack pour se lancer aux trousses du capitaine. Mais Will ignore qu'une malédiction frappe Barbossa et ses pirates. Lorsque la lune brille, ils se transforment en morts-vivants. Leur terrible sort ne prendra fin que le jour où le fabuleux trésor qu'ils ont amassé sera restitué...",
    actors: ["Johnny Depp", "Geoffrey Rush", "Keira Knightley"],
    by: ["Jay Wolpert", "Stuart Beattie"],
    duration: "2 h 23 min",
    limit: "",
    publicNote: 4.2,
  },
];
