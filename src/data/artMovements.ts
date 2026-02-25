export interface ArtMovementDetails {
  definition: string;
  fondateurs?: string;
  artistes: string[];
  caracteristiques: string[];
  informations: string[];
}

export const artMovementsData: Record<string, ArtMovementDetails> = {
  Rococo: {
    definition:
      "Le Rococo est un mouvement artistique né en France au début du XVIIIe siècle, après le style Baroque. Il se développe sous le règne de Louis XV. Ce style se caractérise par une esthétique élégante, légère, décorative et raffinée. Il privilégie le plaisir, l'intimité, la sensualité et la fantaisie, en opposition à la grandeur dramatique du Baroque.",
    fondateurs:
      "Le Rococo n'a pas un fondateur unique, mais il s'est développé grâce aux décorateurs et architectes français de la Régence, notamment : Pierre Lepautre, Juste-Aurèle Meissonnier, Nicolas Pineau.",
    artistes: [
      "Antoine Watteau – scènes galantes et poétiques",
      "François Boucher – mythologie, sensualité",
      "Jean-Honoré Fragonard – amour, légèreté",
      "Giambattista Tiepolo – fresques lumineuses",
      "Élisabeth Vigée Le Brun – portraits aristocratiques",
    ],
    caracteristiques: [
      "Couleurs pastel (rose, bleu clair, vert tendre)",
      "Formes courbes, asymétriques",
      "Décorations abondantes (coquillages, fleurs, dorures)",
      "Thèmes amoureux et mythologiques",
      "Ambiance intime et raffinée",
      "Mouvement, légèreté et élégance",
    ],
    informations: [
      "Né en France vers 1720",
      "Très présent dans la décoration intérieure des salons aristocratiques",
      "Reflète le mode de vie luxueux et insouciant de la noblesse",
      "Disparaît vers 1760 avec l'arrivée du Néoclassicisme, plus sobre et inspiré de l'Antiquité",
    ],
  },

  Cubism: {
    definition:
      "Le Cubisme est un mouvement artistique d'avant-garde né au début du XXe siècle en France. Il révolutionne la représentation en fragmentant les formes et en montrant plusieurs points de vue simultanément. Au lieu d'imiter la réalité, le Cubisme analyse les objets et les reconstruit en formes géométriques. Il apparaît vers 1907, notamment avec l'œuvre Les Demoiselles d'Avignon de Pablo Picasso.",
    fondateurs:
      "Pablo Picasso et Georges Braque. Ils développent ensemble les bases du mouvement entre 1907 et 1914.",
    artistes: [
      "Juan Gris",
      "Fernand Léger",
      "Robert Delaunay",
      "Albert Gleizes",
      "Jean Metzinger",
    ],
    caracteristiques: [
      "Décomposition des formes en figures géométriques (cubes, cylindres, plans)",
      "Multiplication des points de vue",
      "Perspective abandonnée",
      "Couleurs souvent sobres (brun, gris, ocre) dans la phase analytique",
      "Introduction du collage (papier journal, lettres, textures) dans la phase synthétique",
    ],
    informations: [
      "Né à Paris vers 1907",
      "Se développe principalement entre 1907 et 1914",
      "Influencé par les recherches de Paul Cézanne",
      "Considéré comme l'un des mouvements les plus révolutionnaires de l'art moderne",
      "Deux phases principales : Cubisme analytique (formes fragmentées, couleurs limitées) et Cubisme synthétique (collages, couleurs plus vives)",
    ],
  },

  "Pop Art": {
    definition:
      "Le Pop Art est un mouvement artistique apparu dans les années 1950 au Royaume-Uni, puis développé fortement aux États-Unis dans les années 1960. Il s'inspire de la culture populaire : publicité, bandes dessinées, cinéma, musique, objets de consommation et célébrités. Le Pop Art brouille la frontière entre l'art \"noble\" et la culture de masse en transformant des images ordinaires en œuvres artistiques.",
    fondateurs:
      "Richard Hamilton – considéré comme l'un des premiers artistes Pop. Andy Warhol – figure centrale du mouvement. Roy Lichtenstein – inspiré des comics.",
    artistes: [
      "Claes Oldenburg – sculptures d'objets géants",
      "James Rosenquist – influence publicitaire",
      "Tom Wesselmann – scènes domestiques stylisées",
      "David Hockney – couleurs vives et modernité",
    ],
    caracteristiques: [
      "Couleurs vives et contrastées",
      "Inspiration de la publicité et des médias",
      "Répétition d'images (sérigraphie)",
      "Utilisation de techniques industrielles",
      "Thèmes liés à la consommation, aux célébrités et aux produits du quotidien",
      "Style simple, direct, parfois ironique",
    ],
    informations: [
      "Né dans les années 1950 (Royaume-Uni), popularisé dans les années 1960 (États-Unis)",
      "Reflète la société de consommation et les médias de masse",
      "Œuvres célèbres : portraits de Marilyn Monroe par Andy Warhol, images de bandes dessinées par Roy Lichtenstein",
      "Mouvement souvent critique ou ironique face au capitalisme et à la culture populaire",
    ],
  },

  Impressionism: {
    definition:
      "L'Impressionnisme est un mouvement artistique né en France dans les années 1860-1870. Il cherche à capturer l'instant, la lumière et les impressions visuelles plutôt que les détails précis. Le nom du mouvement vient du tableau Impression, soleil levant de Claude Monet, présenté en 1874.",
    fondateurs:
      "Claude Monet, Pierre-Auguste Renoir, Edgar Degas, Camille Pissarro, Alfred Sisley.",
    artistes: [
      "Berthe Morisot",
      "Mary Cassatt",
      "Gustave Caillebotte",
    ],
    caracteristiques: [
      "Peinture en plein air (extérieur)",
      "Coups de pinceau rapides et visibles",
      "Importance de la lumière et des couleurs naturelles",
      "Absence de contours précis",
      "Scènes de la vie quotidienne (paysages, loisirs, villes)",
      "Utilisation de couleurs claires et vibrantes",
    ],
    informations: [
      "Né à Paris",
      "Première exposition impressionniste en 1874",
      "Rejeté au début par les critiques officiels",
      "A profondément influencé l'art moderne",
      "A mené à d'autres mouvements comme le Post-Impressionnisme",
    ],
  },

  Baroque: {
    definition:
      "Le Baroque est un mouvement artistique apparu à la fin du XVIe siècle en Italie, puis diffusé en Europe au XVIIe siècle. Il se caractérise par le mouvement, le drame, l'expressivité et une forte intensité émotionnelle. Le Baroque naît dans le contexte de la Contre-Réforme catholique.",
    fondateurs:
      "Le style se développe d'abord à Rome, sous l'influence de l'Église catholique et des papes de l'époque.",
    artistes: [
      "Caravaggio – maître du clair-obscur et du réalisme dramatique",
      "Gian Lorenzo Bernini – sculpture et architecture théâtrales",
      "Artemisia Gentileschi – scènes bibliques puissantes",
      "Diego Velázquez – portraits royaux",
      "Georges de La Tour – scènes éclairées à la bougie",
      "Rembrandt – profondeur psychologique",
    ],
    caracteristiques: [
      "Fort contraste lumière/ombre (clair-obscur)",
      "Mouvement et dynamisme",
      "Dramatisation des scènes",
      "Expressions intenses et émotionnelles",
      "Richesse décorative",
      "Thèmes religieux, mythologiques et royaux",
    ],
    informations: [
      "Né en Italie vers 1600",
      "Étroitement lié à la religion catholique",
      "Présent en peinture, sculpture, architecture et musique",
      "Reflète aussi le pouvoir des monarchies européennes",
      "Précède le Rococo, plus léger et décoratif",
    ],
  },

  Renaissance: {
    definition:
      "La Renaissance est un grand mouvement artistique et culturel né en Italie au XVe siècle, puis diffusé en Europe. Son nom signifie \"renaissance\" car il marque un retour aux valeurs et aux modèles de l'Antiquité grecque et romaine. Ce mouvement place l'être humain au centre de la réflexion (humanisme).",
    fondateurs:
      "La Renaissance débute à Florence, grâce au mécénat de la famille Médicis. Parmi les premières figures majeures : Filippo Brunelleschi, Donatello, Masaccio.",
    artistes: [
      "Leonardo da Vinci – peinture, science, inventions",
      "Michelangelo – sculpture et fresques monumentales",
      "Raphael – harmonie et équilibre",
      "Albrecht Dürer – gravure et peinture",
      "Jan van Eyck – précision et huile sur bois",
    ],
    caracteristiques: [
      "Maîtrise de la perspective",
      "Étude scientifique de l'anatomie",
      "Recherche du réalisme",
      "Inspiration de l'Antiquité",
      "Harmonie, équilibre et proportions",
      "Importance de l'humanisme",
    ],
    informations: [
      "Débute en Italie vers 1400",
      "Liée aux progrès scientifiques et à l'imprimerie",
      "Soutenue par des mécènes (familles riches, papes, rois)",
      "Se diffuse en France, Allemagne, Espagne et Pays-Bas",
      "Précède le Baroque",
    ],
  },

  Surrealism: {
    definition:
      "Le Surréalisme est un mouvement artistique et littéraire né dans les années 1920 à Paris. Il cherche à libérer l'imagination en explorant le rêve, l'inconscient et l'irrationnel. Le mouvement est officiellement lancé en 1924 avec le Manifeste du surréalisme écrit par André Breton.",
    fondateurs: "André Breton – chef de file et théoricien du mouvement.",
    artistes: [
      "Salvador Dalí – images oniriques et symboliques",
      "René Magritte – jeux visuels et paradoxes",
      "Max Ernst – techniques expérimentales",
      "Joan Miró – formes abstraites et poétiques",
      "Man Ray – photographie expérimentale",
    ],
    caracteristiques: [
      "Inspiration des rêves et du subconscient",
      "Association d'images inattendues",
      "Atmosphère étrange ou mystérieuse",
      "Symbolisme fort",
      "Techniques automatiques (écriture automatique, dessin spontané)",
      "Mélange du réel et de l'imaginaire",
    ],
    informations: [
      "Né à Paris en 1924",
      "Influencé par la psychanalyse",
      "D'abord mouvement littéraire avant de devenir artistique",
      "Se diffuse en Europe et aux États-Unis",
      "Souvent lié à la liberté, la révolte et la critique sociale",
    ],
  },

  Abstract: {
    definition:
      "L'Art Abstrait est un mouvement artistique apparu au début du XXe siècle. Il ne cherche pas à représenter la réalité visible (personnes, paysages, objets), mais à exprimer des émotions, des idées ou des sensations à travers les formes, les couleurs et les lignes. L'abstraction rompt totalement avec la représentation traditionnelle.",
    fondateurs:
      "Wassily Kandinsky – considéré comme l'un des pionniers de l'abstraction. Kazimir Malevich – fondateur du Suprématisme. Piet Mondrian – abstraction géométrique.",
    artistes: [
      "Paul Klee",
      "Jackson Pollock",
      "Mark Rothko",
    ],
    caracteristiques: [
      "Absence de représentation réaliste",
      "Utilisation libre des formes et des couleurs",
      "Importance de l'émotion et de la spiritualité",
      "Composition basée sur les lignes, surfaces et rythmes",
      "Deux grandes tendances : Abstraction géométrique (formes précises) et Abstraction lyrique (gestuelle et expressive)",
    ],
    informations: [
      "Né vers 1910 en Europe",
      "Influence des théories spirituelles et philosophiques",
      "Ouvre la voie à l'expressionnisme abstrait",
      "Considéré comme une révolution majeure dans l'art moderne",
    ],
  },
};
