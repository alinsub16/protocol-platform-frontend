import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-100 transition-colors"
    >
      <ArrowLeft size={18} />
      <span className="text-sm">Back to Home</span>
    </button>
  );
};

export default BackButton;