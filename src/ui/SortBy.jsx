import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParam, setSearchParams] = useSearchParams();
  const sortBy = searchParam.get("sortBy") || "";

  function handleChange(e) {
    searchParam.set("sortBy", e.target.value);
    setSearchParams(searchParam);
  }
  return (
    <Select
      options={options}
      value={sortBy}
      type="white"
      onChange={handleChange}
    />
  );
}

export default SortBy;
