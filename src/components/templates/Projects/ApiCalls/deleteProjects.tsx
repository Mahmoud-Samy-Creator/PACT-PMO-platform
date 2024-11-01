import axios from 'axios';
import { Project_TP, ProjectDelete_TP } from '../../../../Types';

function deleteProjectOrder({ id, handleCloseModal, allProjects, setAllProjects }: ProjectDelete_TP) {
    axios.delete(`https://game.telast.tech/api/v1/worksites/worksite/${id}/`)
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
