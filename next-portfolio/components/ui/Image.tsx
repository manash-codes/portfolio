import Image, { ImageProps } from "next/image";
import { CSSProperties, ReactNode } from "react";

interface CustomImageProps extends Omit<ImageProps, "className"> {
    className?: string;
    containerClassName?: string;
    fallback?: ReactNode;
    containerStyle?: CSSProperties;
}

const CustomImage = ({
    className = "",
    containerClassName = "",
    fallback,
    containerStyle,
    alt,
    ...props
}: CustomImageProps) => {
    return (
        <div className={containerClassName} style={containerStyle}>
            <Image
                alt={alt}
                className={className}
                {...props}
            />
            {fallback && <div className="hidden">{fallback}</div>}
        </div>
    );
};

export default CustomImage;
