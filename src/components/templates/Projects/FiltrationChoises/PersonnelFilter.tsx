import { GlobalContext } from '../../../../context/GlobalContext';
import { useContext, useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const API_BASE_URL: string = "https://game.telast.tech/api";

// Status Filtering API call
const getProjectsOnPersonnel = async (role: string, id: number) => 
  (await axios.get(`${API_BASE_URL}/v1/worksites/worksite/?${role}=${id}`)).data;

interface Personnel {
  id: number;
  first_name: string;
}

function PersonnelFilter({personnel, role}: {personnel: Personnel[], role: string}) {
  const [search, setSearch] = useState("");
  const [worksite, setWorksite] = useState<JSX.Element[]>([]);
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("GlobalContext must be used within a GlobalProvider");
  }

  const { setAllProjects } = context;

  // Function to filter projects based on district
  const filterOnPersonnel = async (id: number) => {
    const { results: projectsOnDistrict } = await getProjectsOnPersonnel(role, id);
    setAllProjects(projectsOnDistrict);
  };

  const filteredPersonnel = useMemo(() => {
    return personnel
      .filter(person => person.first_name.toLowerCase().includes(search.toLowerCase()))
      .map((person, index) => (
        <div key={index} className="transition transition-[0.2s] hover:bg-[#f6f6f6]">
          <label className="block py-[5px] w-[85%] mx-auto flex justify-between cursor-pointer">
            <span className="inline-block" onClick={() => filterOnPersonnel(person.id)}>
              {person.first_name}
            </span>
          </label>
        </div>
      ));
  }, [search]);

  // Update districts state when filtered districts change
  useEffect(() => {
    setWorksite(filteredPersonnel);
  }, [filteredPersonnel]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <span className="pl-[13px] text-[15px] text-[#444]">filter by:</span>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search by personnel"
        className="w-[90%] mx-auto block py-[5px] border-[1px] border-[#e0e0e0] rounded-[2px] mt-[12px] mb-[12px] outline-none pl-[5px]"
      />
      <div className="worksite-selections">
        {worksite}
      </div>
    </form>
  );
}

export default PersonnelFilter;
