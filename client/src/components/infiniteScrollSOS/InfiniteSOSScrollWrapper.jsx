import useIsMobile from "../../components/common/useIsMobile";
import InfiniteSOSScroll from "./InfiniteSOSScroll";
import InfiniteSOSScrollMobile from "./InfiniteSOSScrollMobile";
import { sosScrollItems } from "./infiniteData_SOS_Scroll";

export default function InfiniteSOSScrollWrapper() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <InfiniteSOSScrollMobile items={sosScrollItems} />;
  }

  return <InfiniteSOSScroll items={sosScrollItems} />;
}