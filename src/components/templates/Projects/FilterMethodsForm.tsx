function FilterMethodsForm(
  { setStatusFilterBobUp,
    setDistrictFilterBobUp,
    setWorkSiteFilterBobUp,
    setSectorFilterBobUp,
    setSectorPresidencyFilterBobUp,
    setProsecutionFilterBobUp,
    setActualStartDataPopUp,
    setActualEndDataPopUp,
    setInitiationStartDataPopUp,
    setInitiationEndDataPopUp,
    setPlanningManagersPopUp,
    setProjectManagersPopUp,
    setOperatingManagersPopUp,
    setInspectorsPopUp,
    setMmgPopUp,
  }:

  { setStatusFilterBobUp: React.Dispatch<React.SetStateAction<boolean>>,
    setDistrictFilterBobUp: React.Dispatch<React.SetStateAction<boolean>>,
    setWorkSiteFilterBobUp: React.Dispatch<React.SetStateAction<boolean>>,
    setSectorFilterBobUp: React.Dispatch<React.SetStateAction<boolean>>,
    setSectorPresidencyFilterBobUp: React.Dispatch<React.SetStateAction<boolean>>,
    setProsecutionFilterBobUp: React.Dispatch<React.SetStateAction<boolean>>,
    setActualStartDataPopUp: React.Dispatch<React.SetStateAction<boolean>>,
    setActualEndDataPopUp: React.Dispatch<React.SetStateAction<boolean>>,
    setInitiationStartDataPopUp: React.Dispatch<React.SetStateAction<boolean>>,
    setInitiationEndDataPopUp: React.Dispatch<React.SetStateAction<boolean>>,
    setPlanningManagersPopUp: React.Dispatch<React.SetStateAction<boolean>>,
    setProjectManagersPopUp: React.Dispatch<React.SetStateAction<boolean>>,
    setOperatingManagersPopUp: React.Dispatch<React.SetStateAction<boolean>>,
    setInspectorsPopUp: React.Dispatch<React.SetStateAction<boolean>>,
    setMmgPopUp: React.Dispatch<React.SetStateAction<boolean>>,
  }) {

  // Filteration methods
  function FilterByStatus() {
    setDistrictFilterBobUp(false);
    setWorkSiteFilterBobUp(false);
    setSectorFilterBobUp(false);
    setSectorPresidencyFilterBobUp(false);
    setProsecutionFilterBobUp(false);
    setActualStartDataPopUp(false);
    setActualEndDataPopUp(false);
    setInitiationStartDataPopUp(false);
    setInitiationEndDataPopUp(false);
    setPlanningManagersPopUp(false);
    setProjectManagersPopUp(false);
    setOperatingManagersPopUp(false);
    setInspectorsPopUp(false);
    setMmgPopUp(false);


    setStatusFilterBobUp((prev: boolean) => !prev);
  }
  function districtFilter() {
    setStatusFilterBobUp(false);
    setWorkSiteFilterBobUp(false);
    setProsecutionFilterBobUp(false);
    setSectorPresidencyFilterBobUp(false);
    setActualStartDataPopUp(false);
    setActualEndDataPopUp(false)
    setInitiationStartDataPopUp(false);
    setInitiationEndDataPopUp(false);
    setPlanningManagersPopUp(false);
    setProjectManagersPopUp(false);
    setOperatingManagersPopUp(false);
    setInspectorsPopUp(false);
    setMmgPopUp(false);


    setDistrictFilterBobUp((prev: boolean) => !prev);
  }
  function worksiteFilter() {
    setStatusFilterBobUp(false);
    setDistrictFilterBobUp(false);
    setSectorPresidencyFilterBobUp(false);
    setProsecutionFilterBobUp(false);
    setActualStartDataPopUp(false);
    setActualEndDataPopUp(false)
    setInitiationStartDataPopUp(false);
    setInitiationEndDataPopUp(false);
    setPlanningManagersPopUp(false);
    setProjectManagersPopUp(false);
    setOperatingManagersPopUp(false);
    setInspectorsPopUp(false);
    setMmgPopUp(false);

    setWorkSiteFilterBobUp((prev: boolean) => !prev);
  }
  function sectorFilter() {
    setStatusFilterBobUp(false);
    setDistrictFilterBobUp(false);
    setWorkSiteFilterBobUp(false);
    setProsecutionFilterBobUp(false);
    setSectorPresidencyFilterBobUp(false);
    setActualStartDataPopUp(false);
    setActualEndDataPopUp(false)
    setInitiationStartDataPopUp(false);
    setInitiationEndDataPopUp(false);
        setPlanningManagersPopUp(false);
    setProjectManagersPopUp(false);
    setOperatingManagersPopUp(false);
    setInspectorsPopUp(false);
    setMmgPopUp(false);

    setSectorFilterBobUp((prev: boolean) => !prev);
  }
  function sectorPresidncyFilter() {
    setStatusFilterBobUp(false);
    setDistrictFilterBobUp(false);
    setWorkSiteFilterBobUp(false);
    setSectorFilterBobUp(false);
    setProsecutionFilterBobUp(false);
    setActualStartDataPopUp(false);
    setActualEndDataPopUp(false)
    setInitiationStartDataPopUp(false);
    setInitiationEndDataPopUp(false);
    setPlanningManagersPopUp(false);
    setProjectManagersPopUp(false);
    setOperatingManagersPopUp(false);
    setInspectorsPopUp(false);
    setMmgPopUp(false);

    setSectorPresidencyFilterBobUp((prev: boolean) => !prev);
  }
  function prosecutionFilter() {
    setWorkSiteFilterBobUp(false);
    setStatusFilterBobUp(false);
    setDistrictFilterBobUp(false);
    setSectorPresidencyFilterBobUp(false);
    setActualStartDataPopUp(false);
    setActualEndDataPopUp(false)
    setInitiationStartDataPopUp(false);
    setInitiationEndDataPopUp(false);
    setPlanningManagersPopUp(false);
    setProjectManagersPopUp(false);
    setOperatingManagersPopUp(false);
    setInspectorsPopUp(false);
    setMmgPopUp(false);
    setProsecutionFilterBobUp((prev: boolean) => !prev)
  }
  
  // Filter Using personnel
  function planningManagerFilter() {
    setProjectManagersPopUp(false);
    setOperatingManagersPopUp(false);
    setInspectorsPopUp(false);
    setMmgPopUp(false);
    
    setPlanningManagersPopUp((prev: boolean) => !prev);
  }
  function projectManagerFilter() {
    setPlanningManagersPopUp(false);
    setOperatingManagersPopUp(false);
    setInspectorsPopUp(false);
    setMmgPopUp(false);
    
    setProjectManagersPopUp((prev: boolean) => !prev);
  }
  function operatingManagerFilter() {
    setPlanningManagersPopUp(false);
    setProjectManagersPopUp(false);
    setInspectorsPopUp(false);
    setMmgPopUp(false);
    
    setOperatingManagersPopUp((prev: boolean) => !prev);
  }
  function inspectorFilter() {
    setPlanningManagersPopUp(false);
    setProjectManagersPopUp(false);
    setOperatingManagersPopUp(false);
    setMmgPopUp(false);
    
    setInspectorsPopUp((prev: boolean) => !prev);
  }
  function mmgFilter() {
    setPlanningManagersPopUp(false);
    setProjectManagersPopUp(false);
    setOperatingManagersPopUp(false);
    setInspectorsPopUp(false);
    
    setMmgPopUp((prev: boolean) => !prev);
  }


  // Ordering methods
  function actualStartDateFilter() {
    setDistrictFilterBobUp(false);
    setWorkSiteFilterBobUp(false);
    setSectorFilterBobUp(false);
    setSectorPresidencyFilterBobUp(false);
    setProsecutionFilterBobUp(false);
    setActualEndDataPopUp(false);
    setInitiationStartDataPopUp(false);
    setInitiationEndDataPopUp(false);
        setPlanningManagersPopUp(false);
    setProjectManagersPopUp(false);
    setOperatingManagersPopUp(false);
    setInspectorsPopUp(false);
    setMmgPopUp(false);
    setActualStartDataPopUp((prev: boolean) => !prev)
  }
  function actualEndDateFilter() {
    setDistrictFilterBobUp(false);
    setWorkSiteFilterBobUp(false);
    setSectorFilterBobUp(false);
    setSectorPresidencyFilterBobUp(false);
    setProsecutionFilterBobUp(false);
    setActualStartDataPopUp(false);
    setInitiationStartDataPopUp(false);
    setInitiationEndDataPopUp(false);
    setPlanningManagersPopUp(false);
    setProjectManagersPopUp(false);
    setOperatingManagersPopUp(false);
    setInspectorsPopUp(false);
    setMmgPopUp(false);
    setActualEndDataPopUp((prev: boolean) => !prev)
  }
  function initiationStartDateFilter() {
    setDistrictFilterBobUp(false);
    setWorkSiteFilterBobUp(false);
    setSectorFilterBobUp(false);
    setSectorPresidencyFilterBobUp(false);
    setProsecutionFilterBobUp(false);
    setActualStartDataPopUp(false);
    setActualEndDataPopUp(false);
    setInitiationEndDataPopUp(false);
    setPlanningManagersPopUp(false);
    setProjectManagersPopUp(false);
    setOperatingManagersPopUp(false);
    setInspectorsPopUp(false);
    setMmgPopUp(false);

    setInitiationStartDataPopUp((prev: boolean) => !prev)
  }
  function initiationEndDateFilter() {
    setDistrictFilterBobUp(false);
    setWorkSiteFilterBobUp(false);
    setSectorFilterBobUp(false);
    setSectorPresidencyFilterBobUp(false);
    setProsecutionFilterBobUp(false);
    setActualStartDataPopUp(false);
    setActualEndDataPopUp(false);
    setInitiationStartDataPopUp(false);
    setPlanningManagersPopUp(false);
    setProjectManagersPopUp(false);
    setOperatingManagersPopUp(false);
    setInspectorsPopUp(false);
    setMmgPopUp(false);

    setInitiationEndDataPopUp((prev: boolean) => !prev)
  }
  function deadlineFilter() {
    setDistrictFilterBobUp(false);
    setWorkSiteFilterBobUp(false);
    setSectorFilterBobUp(false);
    setSectorPresidencyFilterBobUp(false);
    setProsecutionFilterBobUp(false);
    setActualStartDataPopUp(false);
    setActualEndDataPopUp(false);
    setInitiationStartDataPopUp(false);
    setInitiationEndDataPopUp(false);
    setPlanningManagersPopUp(false);
    setProjectManagersPopUp(false);
    setOperatingManagersPopUp(false);
    setInspectorsPopUp(false);
    setMmgPopUp(false);

  }

  const filteringOptions = [
    { label: "Status", value: "name", handler: FilterByStatus },
    { label: "District", value: "district", handler: districtFilter },
    { label: "worksite", value: "worksite", handler: worksiteFilter },
    { label: "sector", value: "sector", handler: sectorFilter },
    { label: "sector presidncy", value: "sector", handler: sectorPresidncyFilter },
    { label: "prosecution", value: "prosecution", handler: prosecutionFilter },
  ];
  const filterByPersonnelOptions = [
    { label: "planningManager", value: "planning manager", handler: planningManagerFilter },
    { label: "projectManager", value: "project manager", handler: projectManagerFilter },
    { label: "operating manager", value: "operating manager", handler: operatingManagerFilter },
    { label: "inspector", value: "inspector", handler: inspectorFilter },
    { label: "mmg", value: "mmg", handler: mmgFilter },
  ]
  const orderingOptions = [
    { label: "Actual Start", value: "startDate", handler: actualStartDateFilter },
    { label: "Actual End", value: "endDate", handler: actualEndDateFilter },
    { label: "initiation Start", value: "endDate", handler: initiationStartDateFilter },
    { label: "initiation end", value: "endDate", handler: initiationEndDateFilter },
    { label: "Deadline", value: "deadline", handler: deadlineFilter }
  ];

  return(
      <form>
        <span className="pl-[13px] text-[15px] text-[#444]">filter by:</span>
          {filteringOptions.map((option, index) => (
            <div
              key={index}
              className="transition transition-[0.2s] hover:bg-[#f6f6f6]"
            >
              <label className="block py-[5px] w-[85%] mx-auto flex justify-between cursor-pointer">
                <span className="inline-block">{option.label}</span>
                <input
                  type="radio"
                  name="projectFilter"
                  value={option.value}
                  className="w-[17px]"
                  style={{ accentColor: 'black' }}
                  onClick={option.handler}
                />
              </label>
            </div>
        ))}
        <span className="pl-[13px] text-[15px] text-[#444] block mt-[20px]">filter by personnel:</span>
        {filterByPersonnelOptions.map((option, index) => (
            <div
              key={index}
              className="transition transition-[0.2s] hover:bg-[#f6f6f6]"
            >
              <label className="block py-[5px] w-[85%] mx-auto flex justify-between cursor-pointer">
                <span className="inline-block">{option.value}</span>
                <input
                  type="radio"
                  name="projectFilter"
                  value={option.value}
                  className="w-[17px]"
                  style={{ accentColor: 'black' }}
                  onClick={option.handler}
                />
              </label>
            </div>
        ))}
        <span className="pl-[13px] text-[15px] text-[#444] mt-[12px] block">order by:</span>
        {orderingOptions.map((option, index) => (
            <div
              key={index}
              className="transition transition-[0.2s] hover:bg-[#f6f6f6]"
            >
              <label className="block py-[5px] w-[85%] mx-auto flex justify-between cursor-pointer">
                <span className="inline-block">{option.label}</span>
                <input
                  type="radio"
                  name="projectFilter"
                  value={option.value}
                  className="w-[17px]"
                  style={{ accentColor: 'black' }}
                  onClick={option.handler}
                />
              </label>
            </div>
        ))}
      </form>
  );
}

export default FilterMethodsForm;