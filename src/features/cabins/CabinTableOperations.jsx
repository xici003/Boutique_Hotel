import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price in increase" },
          { value: "regularPrice-desc", label: "Sort by price in decrease" },
          {
            value: "maxCapacity-asc",
            label: "Sort by maxCapacity in increase",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort by maxCapacity in decrease",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
