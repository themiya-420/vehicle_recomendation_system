import React from "react";

const RecommendationList = ({ recommendations }) => {
  return (
    <div className="max-w-3xl mt-10 mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="h-96 overflow-y-auto space-y-4">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-xl object-cover mr-4"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
            <div className="text-lg font-bold text-blue-500">
              රු. {item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationList;
