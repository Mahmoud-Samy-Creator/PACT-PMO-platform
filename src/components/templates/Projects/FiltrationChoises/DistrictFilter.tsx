import { GlobalContext } from '../../../../context/GlobalContext';
import { useContext, useState, useEffect, useMemo } from 'react';
import { locations } from '../../../../utlities/data';
import axios from 'axios';

const API_BASE_URL: string = "https://game.telast.tech/api";

// Status Filtering API call
const getProjectsOnDistrict = async (value: string) => 
  (await axios.get(`${API_BASE_URL}/v1/worksites/worksite/?district=${value}`)).data;

function DistrictFilter() {
  const [search, setSearch] = useState("");
  const [districts, setDistricts] = useState<JSX.Element[]>([]);
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("GlobalContext must be used within a GlobalProvider");
  }

  const { setAllProjects } = context;

  // Function to filter projects based on district
  const filterOnDistrict = async (value: string) => {
    console.log(`Filtering using district: ${value}`);
    const { results: projectsOnDistrict } = await getProjectsOnDistrict(value);
    setAllProjects(projectsOnDistrict);
  };

  // Memoized calculation of filtered districts
  const filteredDistricts = useMemo(() => {
    return locations
      .filter(location => location.value.toLowerCase().includes(search.toLowerCase()))
      .map((location, index) => (
        <div key={index} className="transition transition-[0.2s] hover:bg-[#f6f6f6]">
          <label className="block py-[5px] w-[85%] mx-auto flex justify-between cursor-pointer">
            <span className="inline-block" onClick={() => filterOnDistrict(location.value)}>
              {location.value}
            </span>
          </label>
        </div>
      ));
  }, [search]);

  // Update districts state when filtered districts change
  useEffect(() => {
    setDistricts(filteredDistricts);
  }, [filteredDistricts]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <span className="pl-[13px] text-[15px] text-[#444]">filter by:</span>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search by district"
        className="w-[90%] mx-auto block py-[5px] border-[1px] border-[#e0e0e0] rounded-[2px] mt-[12px] mb-[12px] outline-none pl-[5px]"
      />
      <div className="district-selections">
        {districts}
      </div>
    </form>
  );
}

export default DistrictFilter;
