import React from "react";

const healthBlogs = [
  {
    title: "Shin Splints: Causes, Symptoms, and Treatment",
    image:
      "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/BigBead/shin_splints_bigbead/1800x1200_shin_splint_pain_bigbead.jpg?resize=780px:*&output-quality=75",
    description:
      "Shin splints are when you have pain anywhere along your shin bone or tibia. Your tibia is the big bone that starts under your knee and runs down the front of your lower leg. The pain happens where your muscles attach to your shins. Shin splints are a common problem when you exercise a lot in ways that put stress on your lower legs.",
    url: "https://www.webmd.com/pain-management/cm/shin-splints-overview",
  },
  {
    title: "How Much Do You Know About Your Feet Arches?",
    image:
      "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/other/brooks-sneakers-content-collection-renewal-SF430130-2-other/understanding-foot-arches-asset-1.jpg?resize=780px:*&output-quality=75",
    description:
      "Your foot's arch type is more than what your feet look like. An unsupported arch can lead to foot pain that makes it difficult to walk. In worst cases, an unsupported foot arch can cause long-term damage.",
    url: "https://www.webmd.com/pain-management/features/cm/learn-about-feet-arches",
  },
  {
    title: "Depression and Sadness: When to See the Doctor",
    image:
      "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/hpt_toc_redesign/depression_hpt_toc_redesign/1500x1500_depression_guide_chapter_1.jpg?resize=540px:*&output-quality=75",
    description:
      "Is your sadness just a low mood that will pass in time, or is it depression? Some symptoms can help you know when it’s time to talk to your doctor.",
    url: "https://www.webmd.com/depression/depression-sadness",
  },
];

const HealthBlogList = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[20%] sm:mt-[5%] lg:mt-[8%] md:mt-[10%] xl:mt-[4%] 2xl:mt-[4%]">
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
