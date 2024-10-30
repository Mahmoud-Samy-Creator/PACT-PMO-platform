import { GlobalContext } from '../../../../context/GlobalContext';
import { useContext } from 'react';
import axios from 'axios';

const API_BASE_URL: string = "https://game.telast.tech/api";

// Status Filtering API call
const getProjectsOnprosecution = async (value: string) => 
  (await axios.get(`${API_BASE_URL}/v1/worksites/worksite/?prosecution=${value}`)).data;

function ProsecutionFilter() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("GlobalContext must be used within a GlobalProvider");
  }
  const { setAllProjects } = context;

  async function prosecutionFilter(value: string) {
    const { results: projectsOnprosecution } = await getProjectsOnprosecution(value);
    setAllProjects(projectsOnprosecution);
  }
  const radioOptions = [
    { label: "CTO", value: "cto", handler: prosecutionFilter },
    { label: "VP Regional Affairs", value: "vp_regional_affair", handler:  prosecutionFilter},
  ];


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

export default ProsecutionFilter;
