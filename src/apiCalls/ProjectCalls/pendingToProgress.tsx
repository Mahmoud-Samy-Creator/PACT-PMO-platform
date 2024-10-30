import axios from 'axios';

const API_BASE_URL: string = "https://game.telast.tech/api/v1";

const pendingToProgress = async (projectId: string) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/worksites/worksite/${projectId}/inprogress/`);
        return response.data;
    } catch (error) {
        console.error("Error while making project in progress", error);
    }
}

export default pendingToProgress;