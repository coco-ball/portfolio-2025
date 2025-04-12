import React from "react";
import ProjectPreview from "../components/ProjectPreview";

const projectData = [
  {
    name: "Project1",
    engDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mi dui, semper in orci sit amet, tincidunt pretium lacus. Mauris bibendum sem id dui pretium, sit amet gravida elit interdum. Integer id libero eget nisl molestie aliquet in porttitor libero.",
  },
  {
    name: "Project2",
    engDescription:
      "Maecenas vitae lacus consectetur, euismod tortor vitae, mattis ipsum. Ut mi ante, viverra in massa non, luctus suscipit ligula. Fusce a viverra quam, eget feugiat lorem. Donec convallis eros vel ex dignissim, a tincidunt orci dignissim.",
  },
  {
    name: "Project3",
    engDescription:
      "In a ante arcu. Donec consectetur sodales velit, ut suscipit risus ultricies ac. Nullam sapien mi, sodales eu viverra ac, accumsan at magna. Mauris accumsan ornare purus. Duis lorem neque, venenatis sed pulvinar non, tincidunt sed purus.",
  },
];

function CurrentWorks() {
  return (
    <div className="h-screen flex gap-20 items-center justify-center text-black">
      {projectData.map((project, index) => (
        <ProjectPreview
          key={index}
          name={project.name}
          engDescription={project.engDescription}
        />
      ))}
    </div>
  );
}

export default CurrentWorks;
