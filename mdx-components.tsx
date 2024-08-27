import Image, { ImageProps } from 'next/image';

interface MyMDXComponents {
  // Other custom components...
  Image: (props: ImageProps) => JSX.Element;
}

const MyMDXComponents: MyMDXComponents = {
  Image: ({ alt, ...props }) => <Image {...props} alt={alt || "Image description"} />,
};

export default MyMDXComponents;
