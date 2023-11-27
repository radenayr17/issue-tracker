import prisma from "@/prisma/client";
import { Issue } from "@prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
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
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditIssueButton id={id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
