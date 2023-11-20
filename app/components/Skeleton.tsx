import ReactSkeleton, { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Skeleton = (props: SkeletonProps) => {
  return <ReactSkeleton {...props} />;
};

export default Skeleton;
