import axios from 'axios';
import { Project_TP } from '../../../../Types';
const API_BASE_URL: string = "https://game.telast.tech/api";

function deleteProjectOrder(id: number, handleCloseModal: () => void, allProjects: Project_TP[], setAllProjects:  React.Dispatch<React.SetStateAction<Project_TP[]>>) {
    axios.delete(`${API_BASE_URL}/v1/worksites/worksite/${id}/`)
    .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(`Project ${id} deleted`);
        const newProjects = allProjects.filter((project: Project_TP) => project.id !== id);
        setAllProjects(newProjects);
        handleCloseModal();
    })
    .catch(err => console.log(err));
}

export default deleteProjectOrder;