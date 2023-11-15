import { Text } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const FieldErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;

  return (
    <Text color="red" as="p" size="1">
      {children}
    </Text>
  );
};

export default FieldErrorMessage;
