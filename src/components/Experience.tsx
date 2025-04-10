"use client";
import { useSectionInView } from "@/lib/hooks";
import React, { useContext } from "react";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const { theme } = useTheme();
  return (
    <section
      ref={ref}
      id="experience"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor={theme == "light" ? "#e5e7eb" : "#2f2f2f"}>
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            visible={true}
            key={index}
            contentStyle={{
              background:
                theme == "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.3)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              textAlign: "left",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid  #9ca3af",
              borderBottom: "0.4rem solid  #9ca3af",
            }}
            date={experience.date}
            icon={experience.icon}
            iconStyle={{
              background: theme == "light" ? "#e3e7e8" : "#2f2f2f",
            }}
          >
            <h3>{experience.title}</h3>
            <p className="!mx-2">{experience.location}</p>
            <p className=" !font-light">{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
