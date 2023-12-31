"use client"
import Logo from "./Logo";
import { XMarkIcon, Bars3BottomLeftIcon ,
   ArchiveBoxIcon, RectangleGroupIcon, RectangleStackIcon, GlobeAltIcon,SparklesIcon,CakeIcon,BookOpenIcon,  IdentificationIcon, ClockIcon } from "@heroicons/react/24/outline"
import { MenuItem, Sidebar, Menu } from "react-pro-sidebar";
import { useState } from "react";
import { Item } from "./Item";



export default function HeaderSidebar(){

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return(

        <Sidebar collapsed={isCollapsed}>
        <Menu  iconShape="square">
          {/* LOGO AND MENU ICON */}
             
          <MenuItem
            className=" text-gray-600"
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <p><Bars3BottomLeftIcon className="w-7 h-7"/></p> : ""}
           
          >  {!isCollapsed && (
              <div className="flex justify-between items-center ml-1" >
                <p className=" text-lg">
             <Logo/>
                </p>
                <button onClick={() => setIsCollapsed(!isCollapsed)}>
                  <XMarkIcon className="w-7 h-7 "/>
                </button>
              </div>
            )}
          </MenuItem>

          {!isCollapsed && (
            <div className="mb-6" >
              <div className="my-5 flex justify-center items-center">
              profile-user-pic
                {/* <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                /> */}
              </div>
              <div className="mt-4 flex flex-col items-center" >
                <h2 className=" text-2xl text-gray-800 font-bold m-2">
                  Eric STroh
                </h2>
                <p className="text-sm text-green-600">
                  VP Fancy Admin
                </p>
              </div>
            </div>
          )}

          <div className={isCollapsed ? "" : "pl-3" }>
          {/* {!isCollapsed && ( */}
            <>
              <Item
                
                title="Dashboard"
                to="/dashboard"
                icon={<RectangleGroupIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Daily Questions"
                to="/questions"
                icon={<SparklesIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <p className="text-base text-gray-600 m-3">Planning</p>
              <Item
                title="All Questions"
                to="/all"
                icon={<ArchiveBoxIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Focus Timer"
                to="/focus"
                icon={<ClockIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="The Book"
                to="/book"
                icon={<BookOpenIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </>
          {/* )} */}

          {isCollapsed ? (
            <p className="text-base text-gray-600 m-3">Info</p>
          ) : (
            <p className="text-base text-gray-600 m-3">Information</p>
          )}

          <Item
            title="Profile"
            to="/form"
            icon={<IdentificationIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Learn More"
            to="/learn"
            icon={<RectangleStackIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="About Us"
            to="/about"
            icon={<GlobeAltIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </div>

        </Menu>
      </Sidebar>
      )
}