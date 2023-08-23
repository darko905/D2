import React, { useEffect, useState } from "react";
import { getProjects } from "../../contentfull/contentfull";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		getProjects().then((res) => {
			setProjects(res);
		});
	}, []);

	return (
		<section className="section projects" id="projects">
			<h2 className="section__title">Naši Projekti</h2>

			<div className="projects__container container grid">
				<div className="projects__content">
					{projects.map((project, projectId) => (
						<div className="projects__content" key={projectId}>
							<div>
								<img
									src={project.projectImage.fields.file.url}
									alt="Projekat_1"
								/>
							</div>
							<h2 className="projects__title">{project.projectTItle}</h2>
							<h3 className="projects__subtitle">{project.projectTags}</h3>
							<p className="projects__descritpion">
								{project.projectDescription.content[0].content[0].value}
							</p>
							<a
								href={project.slug}
								target="_blank"
								className="button__read-more"
								rel="noreferrer"
							>
								{" "}
								Link Projekta <FiArrowUpRight />
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
