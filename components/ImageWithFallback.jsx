"use client";
import React, { useState } from "react";
import Image from "next/image";
function ImageWithFallback(props) {
    const { src, fallback, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);
    console.log(imgSrc);
    console.log(fallback);
    return (
        <Image
            alt={""}
            {...rest}
            src={imgSrc}
            onError={() => setImgSrc(fallback)}
            className=" bg-contain bg-no-repeat bg-center w-auto "
        />
    );
}

export default ImageWithFallback;
