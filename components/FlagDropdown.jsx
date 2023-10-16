import { useState, useEffect, useRef } from "react";

import { useFlagStore } from "@/stores/flagStore";
import styled from "@emotion/styled";
import Flag from "react-flagkit";

const CustomDropdown = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 25%;
  }
`;
const FlagList = styled.ul`
  overflow-y: scroll;
  max-height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #efefef;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  width: 15rem;
  z-index: 3;

  li:first-of-type {
    border-top-right-radius: 0.5rem;
  }

  li:last-of-type {
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
`;

const FlagListItem = styled.li`
  transition: all 0.2s;
  &:hover {
    background-color: #cfcfcf;
    cursor: pointer;
  }
`;

export default function FlagDropdown({ countries, color = "foreground" }) {
  const flag = useFlagStore((state) => state);
  const setFlag = useFlagStore((state) => state.setFlag);
  const [selectedFlag, setSelectedFlag] = useState(countries[0]);
  const [showFlagList, setShowFlagList] = useState(false);
  const dropdownRef = useRef(null);

  const toggleFlagList = () => {
    setShowFlagList(!showFlagList);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFlagList(false);
      }
    };

    // Add event listener to detect clicks outside the component
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <CustomDropdown
      ref={dropdownRef}
      onClick={toggleFlagList}
      className="  cursor-pointer pl-2 pr-2"
    >
      <Flag country={flag.key} className="mr-1" />
      <p className={`text-${color}`}>{flag.code}</p>
      {showFlagList && (
        <FlagList>
          {countries.map((country) => (
            <FlagListItem
              key={country.key}
              className="py-2 flex flex-row items-center  w-full pl-2 "
              onClick={() => {
                setFlag({ ...country });
                console.log({ segunda: flag });
                toggleFlagList();
              }}
            >
              <Flag className="mr-2" key={country.key} country={country.key} />
              <p className="mr-1 text-black">{country.label}</p>
              <p className=" text-secondary font-bold">{country.code}</p>
            </FlagListItem>
          ))}
        </FlagList>
      )}
    </CustomDropdown>
  );
}
