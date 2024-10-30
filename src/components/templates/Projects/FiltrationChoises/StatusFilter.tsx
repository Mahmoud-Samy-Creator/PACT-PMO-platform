import { GlobalContext } from '../../../../context/GlobalContext';
import { useContext } from 'react';
import axios from 'axios';

const API_BASE_URL: string = "https://game.telast.tech/api";

// Status Filtering API call
const getProjectsOnStatus = async (value: string) => 
  (await axios.get(`${API_BASE_URL}/v1/worksites/worksite/?status=${value}`)).data;

function StatusFilter() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("GlobalContext must be used within a GlobalProvider");
  }
  const { setAllProjects } = context;

  const radioOptions = [
    { label: "Pending", value: "pending", handler: pendingFilter },
    { label: "In Progress", value: "in_progress", handler: progressFilter },
    { label: "Todo", value: "todo", handler: todoFilter },
    { label: "Done", value: "done", handler: doneFilter },
  ];

  async function pendingFilter(value: string) {
    console.log("Filtering pending");
    const { results: projectsOnStatus } = await getProjectsOnStatus(value);
    setAllProjects(projectsOnStatus);
  }

  async function progressFilter(value: string) {
    console.log("Filtering in progress");
    const { results: projectsOnStatus } = await getProjectsOnStatus(value);
    setAllProjects(projectsOnStatus);
  }

  async function todoFilter(value: string) {
    console.log("Filtering todo");
    const { results: projectsOnStatus } = await getProjectsOnStatus(value);
    setAllProjects(projectsOnStatus);
  }

  async function doneFilter(value: string) {
    console.log("Filtering done");
    const { results: projectsOnStatus } = await getProjectsOnStatus(value);
    setAllProjects(projectsOnStatus);
  }

  return (
    <form>
      <span className="pl-[13px] text-[15px] text-[#444]">filter by:</span>
      {radioOptions.map((option, index) => (
        <div key={index} className="transition transition-[0.2s] hover:bg-[#f6f6f6]">
          <label className="block py-[5px] w-[85%] mx-auto flex justify-between cursor-pointer">
            <span className="inline-block">{option.label}</span>
            <input
              type="radio"
              name="projectFilter"
              value={option.value}
              className="w-[17px]"
              style={{ accentColor: 'black' }}
              onChange={() => option.handler(option.value)}
            />
          </label>
        </div>
      ))}
    </form>
  );
}

export default StatusFilter;
