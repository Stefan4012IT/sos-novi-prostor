import useIsMobile from "../common/useIsMobile";
import InfiniteZoneScrollMobilePrizemlje from "./InfiniteZoneScrollMobilePrizemlje";
import InfiniteZoneScrollDesktopPrizemlje from "./InfiniteZoneScrollDesktopPrizemlje";
import { zones } from "./zonesDataPrizemlje";
import { zoneImages } from "./zonesImagesPrizemlje";
import InfiniteZoneScrollMobilePrizemljeMini from "./InfiniteZoneScrollMobilePrizemljeMini";

export default function InfiniteZoneScrollWrapperPrizemlje() {
  const isMobile = useIsMobile();

  const mergedZones = zones.map((zone, i) => ({
    ...zone,
    images: zoneImages[i] || [],
  }));

  const WrapperComponent = isMobile
    ? InfiniteZoneScrollMobilePrizemljeMini
    : InfiniteZoneScrollDesktopPrizemlje;

  return (
    <WrapperComponent
      key={isMobile ? "mobile" : "desktop"}
      zones={mergedZones}
    />
  );
}