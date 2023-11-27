import { Box } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const IssueFormLoading = () => {
  return (
    <Box className="max-w-3xl">
      <Skeleton />
      <Skeleton />
    </Box>
  );
};

export default IssueFormLoading;
