import styled from "styled-components";
import { useRecentBooking } from "./useRecentBooking";
import { useRecentStays } from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";

import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import { getToday } from "../../utils/helpers";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecentBooking();
  const { isLoading: isLoading2, confirmedStay, numDays } = useRecentStays();

  const { isLoading: isLoading3, cabins } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <div>
      <StyledDashboardLayout>
        <Stats
          bookings={bookings}
          confirmedStay={confirmedStay}
          numDays={numDays}
          cabinCount={cabins.length}
        />

        <TodayActivity />

        <DurationChart confirmedStay={confirmedStay} />
        <SalesChart bookings={bookings} numDays={numDays} />
      </StyledDashboardLayout>
    </div>
  );
}

export default DashboardLayout;
