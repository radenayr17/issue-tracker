"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm<IssueForm>();

  const OnSubmit = async (data: IssueForm) => {
    await axios.post("/api/issues", data);

    push("/issues");
  };

  return (
    <form className="max-w-lg space-y-3" onSubmit={handleSubmit(OnSubmit)}>
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>
      <TextArea placeholder="Description" {...register("description")} />
      <Button type="submit">Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
