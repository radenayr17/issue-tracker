"use client";
import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm<IssueForm>();
  const [error, setError] = useState<string>("");

  const OnSubmit = async (data: IssueForm) => {
    setError("");

    try {
      await axios.post("/api/issues", data);

      push("/issues");
    } catch (err: any) {
      const error: Error = err as Error;

      setError(error.message);
    }
  };

  return (
    <div className="max-w-lg">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3" onSubmit={handleSubmit(OnSubmit)}>
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <TextArea placeholder="Description" {...register("description")} />
        <Button type="submit">Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
