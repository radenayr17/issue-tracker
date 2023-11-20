import { Box } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const IssueNewLoadingPage = () => {
  return (
    <Box className="max-w-3xl">
      <Skeleton />
      <Skeleton />
    </Box>
  );
};

export default IssueNewLoadingPage;
