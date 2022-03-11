import React, { FC, useState } from "react";
import Image from "next/image";
import {
  StyledContainer,
  Menu,
  Logo,
  Tool,
  LanDiv,
  LanText,
  DownIcon,
  LanSelect,
  LanOptionDiv,
  LanOption,
  SearchImag,

  //  Menu
  MenuContainer,
} from "./styled";

import menu from "@assets/icons/menu.png";
import logo from "@assets/icons/logo.png";
import search from "@assets/icons/search.png";
import down from "@assets/icons/down.png";

interface HeaderProps {
  handleClick: Function;
}

const Header: FC<HeaderProps> = ({ handleClick }) => {
  const [showOption, setShowOption] = useState<boolean>(false);
  const [optionList, setOptionList] = useState<Array<string>>([
    "ENG",
    "FRA",
    "DEU",
    "UKR",
  ]);
  const [selectOption, setSelectOption] = useState<string>("ENG");

  return (
    <StyledContainer>
      <Menu
        onClick={() => {
          handleClick(true);
        }}
      >
        <Image src={menu} width={39.75} height={14} />
      </Menu>
      <Logo>
        <Image src={logo} width={134.17} height={30.59} />
      </Logo>
      <Tool>
        <LanDiv>
          <LanSelect onClick={() => setShowOption(!showOption)}>
            <LanText>{selectOption}</LanText>
            <DownIcon>
              <Image src={down} />
            </DownIcon>
          </LanSelect>
          <LanOptionDiv show={showOption}>
            {optionList.map((item, index) => {
              if (item != selectOption) {
                return (
                  <LanOption
                    onClick={() => {
                      setSelectOption(item);
                      setShowOption(!showOption);
                    }}
                    key={index}
                  >
                    {item}
                  </LanOption>
                );
              }
            })}
          </LanOptionDiv>
        </LanDiv>
      </Tool>
    </StyledContainer>
  );
};

export default Header;
