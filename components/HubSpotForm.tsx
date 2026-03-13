"use client";

import React from "react";

interface HubSpotFormProps {
  formUrl?: string;
}

const HubSpotForm: React.FC<HubSpotFormProps> = ({ 
  formUrl = "https://rbzud.share-na2.hsforms.com/2i06w15qxS_64Hr2GTq4Sig"
}) => {
  return (
    <div className="flex w-full max-w-[820px] flex-col justify-center overflow-hidden rounded-[1.25rem] bg-white shadow-lg min-h-[500px] sm:min-h-[540px]">
      <iframe
        src={formUrl}
        width="100%"
        height="540px"
        className="min-h-[500px] w-full border-0 sm:min-h-[540px]"
        title="AIHP Sector 32 Lead Form"
        style={{ minHeight: "500px", maxWidth: "820px", display: "block" }}
      />
    </div>
  );
};

export default HubSpotForm;
