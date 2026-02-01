import { useState, useCallback } from "react";
import Header from "@/components/Header";
import UploadZone from "@/components/UploadZone";
import AnalyzeButton from "@/components/AnalyzeButton";
import ResultCard from "@/components/ResultCard";
import Footer from "@/components/Footer";

interface AnalysisResult {
  logistic: { style: string; confidence: number };
  xgboost: { style: string; confidence: number };
  cnn: { style: string; confidence: number };
}

const mockAnalysis = (): Promise<AnalysisResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const styles = ["Impressionism", "Cubism", "Pop Art", "Baroque", "Rococo", "Renaissance", "Surrealism", "Abstract"];
      const randomStyle = () => styles[Math.floor(Math.random() * styles.length)];
      
      resolve({
        logistic: { style: randomStyle(), confidence: Math.floor(Math.random() * 30) + 55 },
        xgboost: { style: randomStyle(), confidence: Math.floor(Math.random() * 25) + 65 },
        cnn: { style: randomStyle(), confidence: Math.floor(Math.random() * 15) + 82 },
      });
    }, 2500);
  });
};

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);

  const handleAnalyze = useCallback(async () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    setResults(null);
    
    try {
      const analysisResults = await mockAnalysis();
      setResults(analysisResults);
    } finally {
      setIsAnalyzing(false);
    }
  }, [selectedImage]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 container max-w-5xl mx-auto px-4 pb-12">
        <Header />
        
        <section className="mb-8">
          <UploadZone
            onImageSelect={setSelectedImage}
            selectedImage={selectedImage}
          />
        </section>

        <section className="flex justify-center mb-12">
          <AnalyzeButton
            onClick={handleAnalyze}
            isLoading={isAnalyzing}
            disabled={!selectedImage}
          />
        </section>

        {results && (
          <section className="slide-up">
            <h2 className="font-serif text-2xl font-semibold text-center text-foreground mb-8">
              Résultats de l'analyse
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ResultCard
                modelName="Logistic Regression"
                modelType="logistic"
                predictedStyle={results.logistic.style}
                confidence={results.logistic.confidence}
              />
              <ResultCard
                modelName="XGBoost"
                modelType="xgboost"
                predictedStyle={results.xgboost.style}
                confidence={results.xgboost.confidence}
              />
              <ResultCard
                modelName="CNN - Expert"
                modelType="cnn"
                predictedStyle={results.cnn.style}
                confidence={results.cnn.confidence}
                isExpert
              />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
