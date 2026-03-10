import useIsMobile from "../common/useIsMobile";
import InfiniteZoneScrollMobile_IV_sprat from "./InfiniteZoneScrollMobile_IV_sprat";
import InfiniteZoneScrollDesktop_IV_sprat from "./InfiniteZoneScrollDesktop_IV_sprat";
import { zones } from "./zonesData_IV_sprat";
import { zoneImages } from "./zonesImages_IV_sprat";
import InfiniteZoneScrollMobile_IV_Sprat_mini from "./InfiniteZoneScrollMobile_IV_sprat_mini";

export default function InfiniteZoneScrollWrapper_IV_sprat() {
  const isMobile = useIsMobile();

  const mergedZones = zones.map((zone, i) => ({
    ...zone,
    images: zoneImages[i] || [],
  }));

  const WrapperComponent = isMobile
    ? InfiniteZoneScrollMobile_IV_Sprat_mini
    : InfiniteZoneScrollDesktop_IV_sprat;

  return (
    <WrapperComponent
      key={isMobile ? "mobile" : "desktop"}
      zones={mergedZones}
    />
  );
}
