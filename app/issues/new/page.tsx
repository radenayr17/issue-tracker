"use client";
import { Button, Callout, TextArea, TextField, Box } from "@radix-ui/themes";

import { FieldErrorMessage } from "@/app/components";

import { useSubmit } from "./hooks";

const NewIssuePage = () => {
  const { onSubmit, error, loading, errors, register } = useSubmit();

  return (
    <Box className="max-w-3xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3" onSubmit={onSubmit}>
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <FieldErrorMessage>{errors.title?.message}</FieldErrorMessage>
        <TextArea placeholder="Description" {...register("description")} />
        <FieldErrorMessage>{errors.description?.message}</FieldErrorMessage>
        <Button type="submit" disabled={loading}>
          Submit New Issue
        </Button>
      </form>
    </Box>
  );
};

export default NewIssuePage;
