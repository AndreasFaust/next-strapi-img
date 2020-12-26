export type ObjectFit =
  | "fill"
  | "cover"
  | "inherit"
  | "none"
  | "-moz-initial"
  | "initial"
  | "revert"
  | "unset"
  | "contain"
  | "scale-down"
  | undefined;

export interface Format {
  url: string;
  name?: string;
  hash?: string;
  width?: number;
  height?: number;
  size?: number;
  path?: null;
  mime?: "image/jpg" | "image/png" | "image/webp";
  ext?: ".jpg" | ".png" | ".webp";
}

export type Formats = {
  ["base64"]?: Format;
  [breakpoint: number]: Format | Format[];
};

export interface ImageProps {
  url: string;
  formats?: Formats;
  objectFit?: ObjectFit;
  objectPosition?: string;
  width?: number;
  height?: number;
  proportionalHeight?: number;
  alternativeText?: string;
  className?: string;
  style?: string;
  stylePlaceholder?: string;
  styleImg?: string;
  prefix?: string;
  rootMargin?: string;
  threshold?: number;
}
