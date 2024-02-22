import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <>
      <Input variant="flushed" onChange={changeFn} {...props}></Input>
    </>
  );
};
