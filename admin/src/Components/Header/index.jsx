import React, { useState } from "react";
import Button from "@mui/material/Button";
import { BiMenuAltLeft } from "react-icons/bi";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FaBell } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [anchorMyAcc, setAnchorMyAcc] = React.useState(null);
  const open = Boolean(anchorMyAcc);
  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  };
  return (
    <header className="w-full h-[auto] py-2 pl-68 pr-8 bg-amber-100 shadow-md flex items-center justify-between">
      <div className="part1">
        <Button className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rgba(0,0,0,0.8)]">
          <BiMenuAltLeft className="text-[20px] text-[rgba(0,0,0,0.8)]" />
        </Button>
      </div>

      <div className="part2 w-[40%] flex items-center justify-end gap-5 ">
        <IconButton aria-label="bell">
          <StyledBadge badgeContent={4} color="secondary">
            <FaBell />
          </StyledBadge>
        </IconButton>

        <div className="relative">
          <div
            className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer "
            onClick={handleClickMyAcc}
          >
            <img
              src="https://knowledge.hubspot.com/hs-fs/hubfs/darrielle.jpeg?width=48&height=48&name=darrielle.jpeg"
              className="w-full h-full object-cover"
            ></img>
          </div>
        </div>
        <Menu
          anchorEl={anchorMyAcc}
          id="account-menu"
          open={open}
          onClose={handleCloseMyAcc}
          onClick={handleCloseMyAcc}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleCloseMyAcc}>Profile</MenuItem>
          <Divider />
          <MenuItem onClick={handleCloseMyAcc}>Settings</MenuItem>
          <MenuItem onClick={handleCloseMyAcc}>Logout</MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
