import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="text-center py-12 px-6">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Sparkles className="w-8 h-8 text-cnn" />
        <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-foreground">
          ArtSense AI
        </h1>
      </div>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Découvrez le style artistique de vos œuvres grâce à l'intelligence artificielle. 
        Téléchargez une image et laissez nos modèles l'analyser.
      </p>
    </header>
  );
};

export default Header;
