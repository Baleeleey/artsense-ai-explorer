import { Trophy, TrendingUp, Brain } from "lucide-react";

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
  const Icon = modelIcons[modelType];

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
    </div>
  );
};

export default ResultCard;
