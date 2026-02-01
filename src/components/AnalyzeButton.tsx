import { Loader2, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnalyzeButtonProps {
  onClick: () => void;
  isLoading: boolean;
  disabled: boolean;
}

const AnalyzeButton = ({ onClick, isLoading, disabled }: AnalyzeButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled || isLoading}
      size="lg"
      className="px-8 py-6 text-lg font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 spinner" />
          Analyse en cours...
        </>
      ) : (
        <>
          <Wand2 className="w-5 h-5 mr-2" />
          Analyser l'œuvre
        </>
      )}
    </Button>
  );
};

export default AnalyzeButton;
