export interface Project {
  id: string;
  name: string;
  thumbnail: string;
  category: string;
  duration: string;
  description: string;
  detailDescription: string;
  images: string[];
}

const projectData: Project[] = [
  {
    id: "mindly",
    name: "Mindly",
    thumbnail: "/images/projects/mindly/thumbnail.png",
    category: "Product Design",
    duration: "2022.10 - 2023.02",
    description:
      "is an emotion-responsive meditation metaverse product powered by a computer vision AI model.",
    detailDescription: `Mindly is an emotional-responsive meditation metaverse powered by a computer vision AI model. Guided by two professors, our team of six explored how we could create an accessible online mental care platform tailored to the needs of people in their 20s and 30s struggling with anxiety disorders.

We began with user research—developing target personas and journey maps to uncover users’ pain points and needs. In parallel, we conducted technical research on emotion recognition models, focusing on how facial expressions could be analyzed through computer vision AI and evaluating the efficiency of related models and datasets. For the media experience, we referenced Plutchik’s Wheel of Emotions to explore how changes in color, shape, motion, and sound could reflect different emotional states in a spatial environment.

Using Blender and Unity, we built immersive spaces that visually and audibly represented various emotions through light, water, walls, and ambient sound. We also designed an intuitive GUI that naturally guided users through the meditation experience. For the brand identity, we drew inspiration from the shape of a musical rest note—symbolizing pause and calm—and incorporated a soothing blue tone across the visual system. We also created guide banners and brochures to help users better understand the service.

After development, we conducted user testing to observe how people experienced the meditation spaces and interface. 66% of participants reported feeling a positive meditative effect during their time in the metaverse. However, the tests also revealed the need to improve the visibility of certain buttons in the GUI.

The project was presented at the 2023 HCI Conference, where we were honored with the Grand Prize in the SK Creative Challenge. Our research was later published in the Journal of the HCI Society of Korea (Sep 30, 2024) under the title “Development of Emotional-Responsive Meditation Virtual Space Using Computer Vision AI Model.”`,
    images: [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
      "9.png",
      "10.png",
      "11.png",
      "12.png",
      "13.png",
    ],
  },
  {
    id: "banjiha",
    name: "Banjiha Map",
    category: "Website",
    duration: "2023.04 - 2023.06",
    thumbnail: "/images/projects/banjiha/thumbnail.png",
    description:
      "is a data-visualization project that highlights the flood risks faced by semi-basement homes in Seoul.",
    detailDescription: `Our team, D-Viz, began this project after recognizing a growing concern: although severe flooding and heavy rainfall have increased in Seoul over the past few years, there was a lack of proper research and preparedness regarding vulnerable housing conditions. To address this, we created an interactive map that visualizes flood-prone banjihas—semi-basement homes—in Seoul.

During the initial data collection phase, we discovered a critical issue: there was no official dataset specifically identifying banjiha residences. To overcome this, we used public data such as the Building Register and Integrated Building Information and processed it using R to extract reliable information on banjihas located in four districts of Seoul—Gwanak, Dongjak, Yeongdeungpo, and Seocho.

We then developed a flood vulnerability assessment framework that considered several factors: the Inundation Trace Map, the Flood Prediction Map, and each building's level of deterioration. Using QGIS and Mapbox, we visualized three levels of flood vulnerability on a web-based map using clear, distinguishable colors. To further emphasize the seriousness of the issue, we implemented interactive 3D visuals—rain falls, water pools on the ground, and buildings fill with water to varying heights depending on their vulnerability level.

This project gained public recognition for its relevance and impact, and was featured on page 9 of the Seoul Shinmun newspaper on June 29, 2023. It also successfully served its purpose: informing actual Seoul residents of flood risks in their neighborhoods. As the project moved toward publication, we made adjustments to the map—such as removing place names—to account for potential real estate sensitivity, and through this process, we experienced firsthand the influence and responsibility of working with public media.`,
    images: [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
    ],
  },
  {
    id: "snucse",
    name: "SNU CSE Website",
    category: "Website",
    duration: "2023.07 - ",
    thumbnail: "/images/projects/snucse/thumbnail.png",
    description:
      "is a renewed official website for Seoul National University’s Department of Computer Science and Engineering. ",
    detailDescription: `This project was a complete renewal of the official website for the Department of Computer Science and Engineering at Seoul National University.
Our team, CSEREAL, consisted of six developers and two designers. As one of the designers, I worked closely with the development team to plan, design, and implement a fully functional website with over 120 pages. This project provided valuable experience collaborating across disciplines and contributing to a large-scale, real-world service.

Before development began, we realized the importance of reorganizing the existing website’s overwhelming information and fragmented structure. We redefined the information architecture and refactored both data and layout systems to ensure long-term stability and ease of maintenance.

The design process presented challenges, especially when balancing client requests with user-centered design. Initially, we followed the department head and faculty’s preferences, incorporating bold and experimental elements such as flip-card animations, tangled circuit-like graphics, and a dark theme with orange accents.

Although these explorations were visually compelling, we questioned their usability. To validate our concerns, we launched an open beta in September 2023 and gathered feedback from actual users. Based on those insights, we refined the design by prioritizing readability and usability while preserving a distinctive tone. We adopted a dual-tone layout using both black and white on the same page, and replaced overly decorative visuals with simpler, geometric lines that reflected CSE’s core identity of “connection.”

After several iterations, the renewed website was officially released in April 2024. We are currently continuing to improve the design system and user interface. As the site serves a wide audience across all age groups, we placed strong emphasis on clarity, accessibility, and user-friendly interaction.`,
    images: [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
      "9.png",
      "10.png",
      "11.png",
      "12.png",
    ],
  },
];

export default projectData;
