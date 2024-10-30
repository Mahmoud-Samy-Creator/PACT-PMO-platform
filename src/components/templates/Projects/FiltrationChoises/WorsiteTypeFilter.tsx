import { GlobalContext } from '../../../../context/GlobalContext';
import { useContext, useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const API_BASE_URL: string = "https://game.telast.tech/api";

// Status Filtering API call
const getProjectsOnWorksiteType = async (id: number) => 
  (await axios.get(`${API_BASE_URL}/v1/worksites/worksite/?worksite_type=${id}`)).data;

function WorkSiteTypes() {
  const [search, setSearch] = useState("");
  const [worksite, setWorksite] = useState<JSX.Element[]>([]);
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("GlobalContext must be used within a GlobalProvider");
  }

  const { setAllProjects, worksitesTypes } = context;

  // Function to filter projects based on district
  const filterOnWorkSite = async (id: number) => {
    console.log(`Filtering using district: ${id}`);
    const { results: projectsOnDistrict } = await getProjectsOnWorksiteType(id);
    setAllProjects(projectsOnDistrict);
  };

  // Memoized calculation of filtered districts
  const filteredWorsiteType = useMemo(() => {
    return worksitesTypes
      .filter(type => type.name.toLowerCase().includes(search.toLowerCase()))
      .map((type, index) => (
        <div key={index} className="transition transition-[0.2s] hover:bg-[#f6f6f6]">
          <label className="block py-[5px] w-[85%] mx-auto flex justify-between cursor-pointer">
            <span className="inline-block" onClick={() => filterOnWorkSite(type.id)}>
              {type.name}
            </span>
          </label>
        </div>
      ));
  }, [search]);

  // Update districts state when filtered districts change
  useEffect(() => {
    setWorksite(filteredWorsiteType);
  }, [filteredWorsiteType]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <span className="pl-[13px] text-[15px] text-[#444]">filter by:</span>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search by worksiteType"
        className="w-[90%] mx-auto block py-[5px] border-[1px] border-[#e0e0e0] rounded-[2px] mt-[12px] mb-[12px] outline-none pl-[5px]"
      />
      <div className="worksite-selections">
        {worksite}
      </div>
    </form>
  );
}

export default WorkSiteTypes;
