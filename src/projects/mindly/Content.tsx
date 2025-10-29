"use client";
import React from "react";
import { Text } from "../../components/blocks/Text";
import { Picture } from "../../components/blocks/Picture";

export function Content() {
  return (
    <>
      <Picture
        alt="1"
        basePng="/images/projects/mindly/1.png"
        width={1600}
        height={900}
      />

      <Text title="Background">
        <p>
          We began with user research—developing target personas and journey
          maps to uncover users’ pain points and needs. In parallel, we
          conducted technical research on emotion recognition models, focusing
          on how facial expressions could be analyzed through computer vision AI
          and evaluating the efficiency of related models and datasets.
          <br />
          <br /> For the brand identity, we drew inspiration from the shape of a
          musical rest note, symbolizing pause and calm and incorporated a
          soothing blue tone across the visual system.
        </p>
      </Text>

      <Picture
        alt="7"
        basePng="/images/projects/mindly/7.png"
        width={1600}
        height={900}
      />
      <Picture
        alt="8"
        basePng="/images/projects/mindly/8.png"
        width={1600}
        height={900}
      />

      <Text title="Emotional-Responsive Design">
        <p>
          For the media experience, we referenced Plutchik’s Wheel of Emotions
          to explore how changes in color, shape, motion, and sound could
          reflect different emotional states in a spatial environment.
        </p>
      </Text>

      <Picture
        alt="5"
        basePng="/images/projects/mindly/5.png"
        width={1600}
        height={900}
      />
      <Picture
        alt="6"
        basePng="/images/projects/mindly/6.png"
        width={1600}
        height={900}
      />

      <Text>
        <p>
          Using Blender and Unity, we built immersive spaces that visually and
          audibly represented various emotions through light, water, walls, and
          ambient sound. We also designed an intuitive GUI that naturally guided
          users through the meditation experience.
        </p>
      </Text>

      <Picture
        alt="2"
        basePng="/images/projects/mindly/2.png"
        width={1600}
        height={900}
      />
      <Picture
        alt="3"
        basePng="/images/projects/mindly/3.png"
        width={1600}
        height={900}
      />
      <Picture
        alt="4"
        basePng="/images/projects/mindly/4.png"
        width={1600}
        height={900}
      />
      <Picture
        alt="9"
        basePng="/images/projects/mindly/9.png"
        width={1600}
        height={900}
      />
      <Picture
        alt="11"
        basePng="/images/projects/mindly/11.png"
        width={1600}
        height={900}
      />
      <Picture
        alt="10"
        basePng="/images/projects/mindly/10.png"
        width={1600}
        height={900}
      />

      <Text>
        <p>
          After development, we conducted user testing to observe how people
          experienced the meditation spaces and interface. 66% of participants
          reported feeling a positive meditative effect during their time in the
          metaverse. However, the tests also revealed the need to improve the
          visibility of certain buttons in the GUI.
        </p>
      </Text>

      <Picture
        alt="13"
        basePng="/images/projects/mindly/13.png"
        width={1600}
        height={900}
      />

      <Text title="SK Creative Challenge - Grand Prize">
        <p>
          The project was presented at the 2023 HCI Conference, where we were
          honored with the Grand Prize in the SK Creative Challenge. Our
          research was later published in the Journal of the HCI Society of
          Korea (Sep 30, 2024) under the title “Development of
          Emotional-Responsive Meditation Virtual Space Using Computer Vision AI
          Model.”
        </p>
      </Text>
    </>
  );
}
