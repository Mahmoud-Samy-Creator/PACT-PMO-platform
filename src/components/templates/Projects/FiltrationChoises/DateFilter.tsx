import { GlobalContext } from '../../../../context/GlobalContext';
import { useContext } from 'react';
import axios from 'axios';

const API_BASE_URL: string = "https://game.telast.tech/api";

// Status Filtering API call

function DateFilter({ date } : {date: string}) {
  const getProjectsOnActualStartData = async (value: string) => 
    (await axios.get(`${API_BASE_URL}/v1/worksites/worksite/?ordering=${value}${date}`)).data;

  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("GlobalContext must be used within a GlobalProvider");
  }
  const { setAllProjects } = context;

  async function actualStartDataFilter(value: string) {
    const { results: projectsOnprosecution } = await getProjectsOnActualStartData(value);
    setAllProjects(projectsOnprosecution);
  }
  const radioOptions = [
    { label: "Ascending", value: "", handler: actualStartDataFilter },
    { label: "Descending", value: "-", handler:  actualStartDataFilter},
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

export default DateFilter;
