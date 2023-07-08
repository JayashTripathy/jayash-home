import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";

const link = (id) => {
  return (
    <Link
      href={`#${id}`}
      className="absolute left-[-50px] hidden h-full  px-5 py-0 group-hover:visible group-hover:flex group-hover:shadow-none items-center"
    >
      <AiOutlineLink />
    </Link>
  );
};

const CustomHeading = ({ as: Element, id, ...rest }) => {
  if (id) {
    return (
      <Element
        id={id}
        className="group relative font-heading overflow-visible mt-12"
      >
        {link(id)}
        {...rest.children}
      </Element>
    );
  }
  return <Element {...rest} />;
};

const customAnchor = ({ ...rest }) => {
  return (
    <a
      className="no-underline cursor-pointer text-inherit shadow-[inset_0_-1px_0] shadow-highlighting transition-all duration-300 ease-in-out 
      hover:shadow-highlighting hover:shadow-[inset_0_-25px_0] hover:text-secondary dark:hover:text-secondary"
      {...rest}
    />
  );
};

const CustomH1 = (props) => <CustomHeading as="h1" {...props} />;
const CustomH2 = (props) => <CustomHeading as="h2" {...props} />;

export const components = {
  h1: CustomH1,
  h2: CustomH2,
  a: customAnchor,
};
