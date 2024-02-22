import { Button as CButton } from "@chakra-ui/react";
export const Button = ({ clickFn, ...props }) => {
  return (
    <CButton
      variant={"flushed"}
      className="button"
      onClick={clickFn}
      {...props}
      colorScheme="teal"
    ></CButton>
  );
};
