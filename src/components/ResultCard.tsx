import { useState } from "react";
import { Trophy, TrendingUp, Brain, ChevronDown, BookOpen, Palette, Users, Info } from "lucide-react";
import { artMovementsData, type ArtMovementDetails } from "@/data/artMovements";

interface ResultCardProps {
  modelName: string;
  modelType: "logistic" | "xgboost" | "cnn";
  predictedStyle: string;
  confidence: number;
  isExpert?: boolean;
}

const modelIcons = {
  logistic: TrendingUp,
  xgboost: Brain,
  cnn: Trophy,
};

const modelLabels = {
  logistic: "Logistic Regression",
  xgboost: "XGBoost",
  cnn: "CNN - Expert",
};

const ResultCard = ({ modelType, predictedStyle, confidence, isExpert }: ResultCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = modelIcons[modelType];

  const movementDetails: ArtMovementDetails | undefined = artMovementsData[predictedStyle];

  return (
    <div className={`model-card model-card-${modelType} ${isExpert ? "animate-pulse-glow" : ""}`}>
      {isExpert && (
        <div className="flex justify-end mb-2">
          <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-cnn-light text-cnn">
            <Trophy className="w-3 h-3" />
            Plus Précis
          </span>
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2.5 rounded-xl ${modelType === "logistic" ? "bg-logistic-light" : modelType === "xgboost" ? "bg-xgboost-light" : "bg-cnn-light"}`}>
          <Icon className={`w-5 h-5 model-accent`} />
        </div>
        <h3 className="font-serif text-lg font-semibold text-foreground">
          {modelLabels[modelType]}
        </h3>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Style prédit</p>
          <p className={`text-xl font-serif font-semibold model-accent`}>
            {predictedStyle}
          </p>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-muted-foreground">Confiance</p>
            <p className={`text-sm font-semibold model-accent`}>
              {confidence}%
            </p>
          </div>
          <div className="progress-bar">
            <div
              className={`progress-bar-fill progress-${modelType}`}
              style={{ width: `${confidence}%` }}
            />
          </div>
        </div>
      </div>

      {/* Voir plus de détails button */}
      {movementDetails && (
        <div className="mt-5">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium 
              bg-secondary text-secondary-foreground hover:bg-accent transition-all duration-200"
          >
            Voir plus de détails
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${
              isExpanded ? "max-h-[2000px] opacity-100 mt-5" : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <div className="space-y-5 border-t border-border pt-5">
              {/* Définition */}
              <DetailSection
                icon={<BookOpen className="w-4 h-4 model-accent" />}
                title="Définition"
              >
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {movementDetails.definition}
                </p>
                {movementDetails.fondateurs && (
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    <span className="font-medium text-foreground">Fondateurs :</span>{" "}
                    {movementDetails.fondateurs}
                  </p>
                )}
              </DetailSection>

              {/* Artistes principaux */}
              <DetailSection
                icon={<Users className="w-4 h-4 model-accent" />}
                title="Artistes principaux"
              >
                <ul className="space-y-1.5">
                  {movementDetails.artistes.map((artist, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="model-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                      {artist}
                    </li>
                  ))}
                </ul>
              </DetailSection>

              {/* Caractéristiques */}
              <DetailSection
                icon={<Palette className="w-4 h-4 model-accent" />}
                title="Caractéristiques"
              >
                <ul className="space-y-1.5">
                  {movementDetails.caracteristiques.map((c, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="model-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </DetailSection>

              {/* Informations importantes */}
              <DetailSection
                icon={<Info className="w-4 h-4 model-accent" />}
                title="Informations importantes"
              >
                <ul className="space-y-1.5">
                  {movementDetails.informations.map((info, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="model-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                      {info}
                    </li>
                  ))}
                </ul>
              </DetailSection>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DetailSection = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      {icon}
      <h4 className="font-serif text-sm font-semibold text-foreground">{title}</h4>
    </div>
    {children}
  </div>
);

export default ResultCard;
