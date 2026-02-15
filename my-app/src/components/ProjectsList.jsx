import React from "react";

const ProjectList = ({ projects }) => 
{
    return (
        <div className="project-list">
            {projects.map((project, index) => {
                return (
                   <div key={index} className="project-card">
                    
                 <img src={project.img} alt={`project-${index}`}></img>       
                </div> 
                )
            })}
        </div>
    )
}

export default ProjectList;