import { IssueStatusBadge } from "@/app/components";
import prisma from "@/prisma/client";
import { Issue } from "@prisma/client";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
  const issue: Issue | null = await prisma.issue.findUnique({ where: { id } });

  if (!issue) {
    notFound();
  }

  return (
    <Box className="max-w-3xl">
      <Heading>{issue.title}</Heading>
      <Flex gap="3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card mt="4">{issue.description}</Card>
    </Box>
  );
};

export default IssueDetailPage;