import React from "react";

type Props = {
  activeTab: "newest" | "favorite";
  setActiveTab: (tab: "newest" | "favorite") => void;
};

const ReviewTabs: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b mb-4">
      <button
        className={`px-4 py-2 font-medium ${
          activeTab === "newest"
            ? "text-red-600 border-b-2 border-red-600"
            : "text-gray-600"
        }`}
        onClick={() => setActiveTab("newest")}
      >
        Mới nhất
      </button>
      <button
        className={`px-4 py-2 font-medium ${
          activeTab === "favorite"
            ? "text-red-600 border-b-2 border-red-600"
            : "text-gray-600"
        }`}
        onClick={() => setActiveTab("favorite")}
      >
        Yêu thích nhất
      </button>
    </div>
  );
};

export default ReviewTabs;