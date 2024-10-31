import { Project_TP } from '../../Types';

function filterProjects (allProjects: Project_TP[], id: string) {
  const filtered = allProjects.filter((project: Project_TP) => project.id === Number(id));

  return filtered[0];
}

export default filterProjects;