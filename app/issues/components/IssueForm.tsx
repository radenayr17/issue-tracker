"use client";
import { FieldErrorMessage } from "@/app/components";
import { useSubmit } from "@/app/issues/hooks/submit";
import { Issue } from "@prisma/client";
import { Box, Button, Callout, TextArea, TextField } from "@radix-ui/themes";

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const { onSubmit, error, loading, errors, register } = useSubmit(issue);

  return (
    <Box className="max-w-3xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3" onSubmit={onSubmit}>
        <TextField.Root>
          <TextField.Input defaultValue={issue?.title} placeholder="Title" {...register("title")} />
        </TextField.Root>
        <FieldErrorMessage>{errors.title?.message}</FieldErrorMessage>
        <TextArea defaultValue={issue?.description} placeholder="Description" {...register("description")} />
        <FieldErrorMessage>{errors.description?.message}</FieldErrorMessage>
        <Button type="submit" disabled={loading}>
          {issue ? "Update Issue" : "Submit New Issue"}
        </Button>
      </form>
    </Box>
  );
};

export default IssueForm;
