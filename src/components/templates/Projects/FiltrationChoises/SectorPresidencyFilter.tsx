import { GlobalContext } from '../../../../context/GlobalContext';
import { useContext, useState, useEffect, useMemo } from 'react';
import { SectorPresidency } from '../../../../utlities/data';
import axios from 'axios';

const API_BASE_URL: string = "https://game.telast.tech/api";

// Status Filtering API call
const getProjectsOnSectorPresidency = async (value: string) => 
  (await axios.get(`${API_BASE_URL}/v1/worksites/worksite/?sector_presidency=${value}`)).data;

function SectorPresidencyFilter() {
  const [search, setSearch] = useState("");
  const [presidencies, setPresidencies] = useState<JSX.Element[]>([]);
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("GlobalContext must be used within a GlobalProvider");
  }

  const { setAllProjects } = context;

  // Function to filter projects based on district
  const filterOnSector = async (value: string) => {
    console.log(`Filtering using sectorPresidency: ${value}`);
    const { results: projectsOnPresidency } = await getProjectsOnSectorPresidency(value);
    setAllProjects(projectsOnPresidency);
  };

  // Memoized calculation of filtered districts
  const filteredPresidencies = useMemo(() => {
    return SectorPresidency
      .filter(sector => sector.name.toLowerCase().includes(search.toLowerCase()))
      .map((sector, index) => (
        <div key={index} className="transition transition-[0.2s] hover:bg-[#f6f6f6]">
          <label className="block py-[5px] w-[85%] mx-auto flex justify-between cursor-pointer">
            <span className="inline-block" onClick={() => filterOnSector(sector.name)}>
              {sector.name}
            </span>
          </label>
        </div>
      ));
  }, [search]);

  // Update districts state when filtered sectors presidencies change
  useEffect(() => {
    setPresidencies(filteredPresidencies);
  }, [filteredPresidencies]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <span className="pl-[13px] text-[15px] text-[#444]">filter by:</span>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search by sector presidency"
        className="w-[90%] mx-auto block py-[5px] border-[1px] border-[#e0e0e0] rounded-[2px] mt-[12px] mb-[12px] outline-none pl-[5px]"
      />
      <div className="district-selections">
        {presidencies}
      </div>
    </form>
  );
}

export default SectorPresidencyFilter;
