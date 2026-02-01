const artStyles = [
  "Rococo",
  "Cubism",
  "Pop Art",
  "Impressionism",
  "Baroque",
  "Renaissance",
  "Surrealism",
  "Abstract",
];

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
          Styles artistiques supportés
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {artStyles.map((style) => (
            <span key={style} className="style-badge">
              {style}
            </span>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          © 2024 ArtSense AI — Analyse d'œuvres d'art par intelligence artificielle
        </p>
      </div>
    </footer>
  );
};

export default Footer;
