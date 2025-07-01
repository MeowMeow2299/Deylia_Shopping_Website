import React, { useState } from "react";
import hcmcData from "../api/hcmcData";

const HCMAddressSelector = ({ onChange }) => {
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setDistrict(selectedDistrict);
    setWard("");
    onChange({ district: selectedDistrict, ward: "" });
  };

  const handleWardChange = (e) => {
    const selectedWard = e.target.value;
    setWard(selectedWard);
    onChange({ district, ward: selectedWard });
  };

  return (
    <div className="hcm-address-selector">
      {/* Quận/Huyện */}
      <select value={district} onChange={handleDistrictChange}>
        <option value="">-- Chọn quận/huyện --</option>
        {Object.keys(hcmcData).map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      {/* Phường/Xã */}
      {district && (
        <select value={ward} onChange={handleWardChange}>
          <option value="">-- Chọn phường/xã --</option>
          {hcmcData[district].map((w) => (
            <option key={w} value={w}>
              {w}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default HCMAddressSelector;
