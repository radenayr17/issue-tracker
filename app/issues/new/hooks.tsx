import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useSubmit = () => {
  const { push } = useRouter();
  const [error, setError] = useState<string>("");

  const onSubmit = async <T,>(data: T) => {
    try {
      await axios.post("/api/issues", data);

      push("/issues");
    } catch (err: any) {
      const error: Error = err as Error;

      setError(error.message);
    }
  };

  return { onSubmit, error };
};
