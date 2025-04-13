import useIsMobile from "../common/useIsMobile";
import InfiniteZoneScrollMobile_III_sprat from "./InfiniteZoneScrollMobile_III_sprat";
import InfiniteZoneScrollDesktop_III_sprat from "./InfiniteZoneScrollDesktop_III_sprat";
import { zones } from "./zonesData_III_sprat";
import { zoneImages } from "./zonesImages_III_sprat";
import InfiniteZoneScrollMobile_III_Sprat_mini from "./InfiniteZoneScrollWrapper_III_sprat_mini";

export default function InfiniteZoneScrollWrapper_III_sprat() {
  const isMobile = useIsMobile();

  const mergedZones = zones.map((zone, i) => ({
    ...zone,
    images: zoneImages[i] || [],
  }));

  const WrapperComponent = isMobile
    ? InfiniteZoneScrollMobile_III_Sprat_mini
    : InfiniteZoneScrollDesktop_III_sprat;

  return (
    <WrapperComponent
      key={isMobile ? "mobile" : "desktop"}
      zones={mergedZones}
    />
  );
}
