import React from "react";

const healthBlogs = [
  {
    title: "Swimming Lessons Save Lives: What Parents Should Know",
    image:
      "https://www.health.harvard.edu/media/content/images/2024/06/swimming-lessons.jpg",
    description:
      "Over 4,500 people die from drowning in the U.S. each year. This blog explains how swimming lessons can significantly reduce that risk, especially for children. It also offers guidance on choosing the right program and encouraging kids to develop water safety skills.",
    url: "https://www.health.harvard.edu/blog/swimming-lessons-save-lives-what-parents-should-know",
  },
  {
    title: "How to Cope When Wildfire Smoke Affects Air Quality",
    image:
      "https://www.health.harvard.edu/media/content/images/2025/06/wildfire-smoke.jpg",
    description:
      "Wildfire smoke is becoming a major health concern due to climate change. This article outlines practical steps to protect yourself, such as using air purifiers, staying indoors, and wearing masks. It also discusses the long-term health effects of poor air quality.",
    url: "https://www.health.harvard.edu/blog/wildfires-how-to-cope-when-smoke-affects-air-quality-and-health",
  },
  {
    title: "What Can Magnesium Do for You?",
    image:
      "https://www.health.harvard.edu/media/content/images/2025/06/magnesium-benefits.jpg",
    description:
      "Magnesium supports heart, muscle, and bone health. While most people get enough from food, some may benefit from supplements. This blog explores how magnesium works in the body, signs of deficiency, and when to consider adding it to your routine.",
    url: "https://www.health.harvard.edu/blog/what-can-magnesium-do-for-you-and-how-much-do-you-need",
  },
];

const HealthBlogList = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[5%]">
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {healthBlogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-700 text-sm mb-4">{blog.description}</p>
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                Read Full Article →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthBlogList;
