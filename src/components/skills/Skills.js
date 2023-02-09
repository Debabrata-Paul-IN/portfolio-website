import React from "react";
import SkillChild from "./SkillChild";
import "./skills.css";
import items from "../../SkillIcons";

export default function Skills() {
  return (
    <section id="skills">
    
    <h5>My</h5>
    <h2>Skills</h2>
    <div className="container">
    {items.map((item) => {
      return (
        <SkillChild
          key={item.id}
          icon={item.icon}
          skill={item.skill}
          percentage={item.percentage}
        />
      );
    })}
    </div>
    </section>
  );
}
