"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, Text, TextArea, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FieldErrorMessage from "@/app/components/FieldErrorMessage";
import { createIssueSchema } from "@/app/validations/issue";

import { useSubmit } from "./hooks";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const { onSubmit, error } = useSubmit();

  return (
    <div className="max-w-lg">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <FieldErrorMessage>{errors.title?.message}</FieldErrorMessage>
        <TextArea placeholder="Description" {...register("description")} />
        <FieldErrorMessage>{errors.description?.message}</FieldErrorMessage>
        <Button type="submit">Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
