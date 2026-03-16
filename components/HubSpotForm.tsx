"use client";

import React from "react";

interface HubSpotFormProps {
  formUrl?: string;
  className?: string;
  title?: string;
  minHeightClassName?: string;
  iframeHeight?: number;
  maxWidthClassName?: string;
}

const HubSpotForm: React.FC<HubSpotFormProps> = ({ 
  formUrl = "https://rbzud.share-na2.hsforms.com/2i06w15qxS_64Hr2GTq4Sig",
  className = "",
  title = "AIHP Sector 32 Lead Form",
  minHeightClassName = "min-h-[460px] sm:min-h-[500px]",
  iframeHeight = 500,
  maxWidthClassName = "max-w-[720px]",
}) => {
  return (
    <div className={`flex w-full ${maxWidthClassName} flex-col justify-center overflow-hidden rounded-[1.25rem] bg-white shadow-lg ${minHeightClassName} ${className}`.trim()}>
      <iframe
        src={formUrl}
        width="100%"
        height={`${iframeHeight}px`}
        className={`w-full border-0 ${minHeightClassName}`.trim()}
        title={title}
        style={{ minHeight: `${iframeHeight}px`, maxWidth: "100%", display: "block" }}
      />
    </div>
  );
};

export default HubSpotForm;
