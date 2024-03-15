import Image from "next/image";

interface AvatarProps {
  url: string;
  size?: "s" | "m" | "l" | "xl";
  className?: string;
  priority?: boolean;
}

export default function Avatar(props: AvatarProps) {
  const size = {
    s: { width: 24, height: 24 },
    m: { width: 48, height: 48 },
    l: { width: 96, height: 96 },
    xl: { width: 192, height: 192 },
  }[props.size || "m"];
  return (
    <Image
      src={props.url}
      width={size.width}
      height={size.height}
      alt="Avatar"
      className={props.className}
      priority={props.priority}
    />
  );
}
