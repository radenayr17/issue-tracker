import prisma from "@/prisma/client";
import { Issue } from "@prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import DeleteIssueButton from "./components/DeleteIssueButton";
import EditIssueButton from "./components/EditIssueButton";
import IssueDetails from "./components/IssueDetails";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
  const issue: Issue | null = await prisma.issue.findUnique({ where: { id } });

  if (!issue) {
    notFound();
  }

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <Flex direction="column" gap="4">
          <EditIssueButton id={id} />
          <DeleteIssueButton id={id} />
        </Flex>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
