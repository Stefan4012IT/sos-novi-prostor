import useIsMobile from "../common/useIsMobile";
import InfiniteZoneScrollMobile_II_sprat from "./InfiniteZoneScrollMobile_II_sprat";
import InfiniteZoneScrollDesktop_II_sprat from "./InfiniteZoneScrollDesktop_II_sprat";
import { zones } from "./zonesData_II_sprat";
import { zoneImages } from "./zonesImages_II_sprat";
import InfiniteZoneScrollMobile_II_Sprat_mini from "./InfiniteZoneScrollMobile_II_sprat_mini";

export default function InfiniteZoneScrollWrapper_II_sprat() {
  const isMobile = useIsMobile();

  const mergedZones = zones.map((zone, i) => ({
    ...zone,
    images: zoneImages[i] || [],
  }));

  const WrapperComponent = isMobile
    ? InfiniteZoneScrollMobile_II_Sprat_mini
    : InfiniteZoneScrollDesktop_II_sprat;

  return (
    <WrapperComponent
      key={isMobile ? "mobile" : "desktop"}
      zones={mergedZones}
    />
  );
}
