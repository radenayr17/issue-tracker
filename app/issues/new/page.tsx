"use client";
import { Button, Callout, Text, TextArea, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useSubmit } from "./hooks";
import { createIssueSchema } from "@/app/validations/issue";

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
        {errors.title && (
          <Text color="red" size="1" as="p">
            {errors.title.message}
          </Text>
        )}
        <TextArea placeholder="Description" {...register("description")} />
        {errors.description && (
          <Text color="red" size="1" as="p">
            {errors.description.message}
          </Text>
        )}
        <Button type="submit">Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
