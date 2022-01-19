import React, { Component } from 'react';
import { AppColors } from '../assets/AppColors';
import MenuDots from '../assets/svg/Icons/MenuDots.svg';

import DoneFill from '../assets/svg/Icons/DoneIcon.svg';
import Done from '../assets/svg/Icons/DoneGrey.svg';
// HEART LOGOS
import HeartFill from '../assets/svg/Icons/Heart.svg';
import Heart from '../assets/svg/Icons/Reaction.svg';
// WISHLIST ICONS
import Wishlist from '../assets/svg/Icons/Wishlist.svg';
import WishlistFill from '../assets/svg/Icons/WishlistFill.svg';

import BirthDay from '../assets/svg/Icons/BirthDay.svg';
import Chat from '../assets/svg/Icons/ChatIcon.svg';
import ChatIconFilled from '../assets/svg/Icons/ChatIconFilled.svg';
import MemofacLogo from '../assets/svg/Icons/Memofac_logo.svg';

import SmileOutline from '../assets/svg/Icons/SmileOutline.svg';
import Add from '../assets/svg/Icons/Add.svg';
import Minus from '../assets/svg/Icons/Minus.svg';
import BioCircle from '../assets/svg/Icons/BioIcon.svg';

import Camera from '../assets/svg/Icons/Camera.svg';
import CameraWhite from '../assets/svg/Icons/CameraWhite.svg';
import DownArrow from '../assets/svg/Icons/DownArrow.svg';
import Gallery from '../assets/svg/Icons/Gallery.svg';
// OTHER ICOSN
import Cancel from '../assets/svg/Icons/Cancel.svg';
import Edit from '../assets/svg/Icons/Edit.svg';
import EditWhite from '../assets/svg/Icons/EDIT-white.svg';

import Gender from '../assets/svg/Icons/Gender.svg';
import Avatar from '../assets/svg/Icons/Avatar.svg';
import Calender from '../assets/svg/Icons/Calender.svg';
import Notes from '../assets/svg/Icons/Notes.svg';
import Share from '../assets/svg/Icons/Share.svg';

//NAVIGATION
import Menu from '../assets/svg/Icons/Menu.svg';
import Search from '../assets/svg/Icons/Search.svg';
import Home from '../assets/svg/Icons/Home.svg';
import MyProfile from '../assets/svg/Icons/MyProfile.svg';
import ArrowBack from '../assets/svg/Icons/ArrowBack.svg';
//NEW NAVS
import ListMemoNav from '../assets/svg/Icons/navs/ListMemo_Nav.svg';
import ProfileNavFill from '../assets/svg/Icons/navs/Profile_Nav_Fill.svg';
import ProfileNavLine from '../assets/svg/Icons/navs/Profile_Nav_line.svg';
import SearchNavLine from '../assets/svg/Icons/navs/Search_Nav_line.svg';
import TimelineNavFill from '../assets/svg/Icons/navs/Timeline_Nav_Filled.svg';
import TimelineNavLine from '../assets/svg/Icons/navs/Timeline_Nav_line.svg';

import Crop from '../assets/svg/Icons/CropIcon.svg';
import Settings from '../assets/svg/Icons/Settings.svg';
import Help from '../assets/svg/Icons/Help.svg';
import Logout from '../assets/svg/Icons/Logout.svg';
import Bio from '../assets/svg/Icons/Bio.svg';
import BioAv from '../assets/svg/Icons/BioIcon.svg';

// STARS
import Bronze from '../assets/svg/Icons/stars/Bronze.svg';
import Gold from '../assets/svg/Icons/stars/Gold.svg';
import Silver from '../assets/svg/Icons/stars/Silver.svg';
import StarUnFilled from '../assets/svg/Icons/stars/StarUnFilled.svg';

import Nointernet from '../assets/svg/Icons/NoInternet.svg';
import Nomemory from '../assets/svg/Icons/Nomemory.svg';

// MEMO TYPE
import Global from '../assets/svg/Icons/Global.svg';
import Closeones from '../assets/svg/Icons/Closeones.svg';
import Knownones from '../assets/svg/Icons/Knownones.svg';
import Profile from '../assets/svg/Icons/Profile.svg';

import Reactions from '../assets/svg/Icons/Reactions.svg';
import NoIdea from '../assets/svg/Icons/NoIdea.svg';
import CalenderView from '../assets/svg/Icons/CalenderView.svg';
import { GStyles } from './Global.styles';
import { View } from 'react-native';

// APP LOGO LOGO LOGO
export const MemofacIcon = ({ size = 30 }) => {
  return (
    <MemofacLogo
      height={size / 3}
      width={size}
      style={{ backgroundColor: AppColors.Transparent }}
    />
  );
};

// APP ICONS ICONS ICONS

export const MenuIcons = ({
  size = 30,
  style,
  color = AppColors.MediumGrey,
}) => {
  return (
    <MenuDots
      color={color}
      height={size}
      width={10}
      style={{ ...style, backgroundColor: AppColors.Transparent }}
    />
  );
};

export const GalleryIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <Gallery
    height={size}
    width={size}
    color={color}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);
export const MenuNavIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <Menu
    height={size}
    width={size}
    color={color}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

// NAV ICONS
export const ListMemoNavIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <ListMemoNav
    height={size}
    width={size}
    color={color}
    // style={{ backgroundColor: AppColors.Transparent }}
  />
);
// ArrowBack
// NAV ICONS
export const BackArrowIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <ArrowBack
    height={size}
    width={size}
    color={color}
    // style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const TimelineNavFillIcon = ({
  size = 30,
  color = AppColors.DarkGrey,
}) => (
  <TimelineNavFill
    height={size}
    width={size}
    color={color}
    // style={{ backgroundColor: AppColors.Transparent }}
  />
);
export const TimelineNavLineIcon = ({
  size = 30,
  color = AppColors.DarkGrey,
}) => (
  <TimelineNavLine
    height={size}
    width={size}
    color={color}
    // style={{ backgroundColor: AppColors.Transparent }}
  />
);
export const SearchNavLineIcon = ({
  size = 30,
  color = AppColors.DarkGrey,
}) => (
  <SearchNavLine
    height={size}
    width={size}
    color={color}
    // style={{ backgroundColor: AppColors.Transparent }}
  />
);
export const ProfileNavFillIcon = ({
  size = 30,
  color = AppColors.DarkGrey,
}) => (
  <ProfileNavFill
    height={size}
    width={size}
    color={color}
    // style={{ backgroundColor: AppColors.Transparent }}
  />
);
export const ProfileNavLineIcon = ({
  size = 30,
  color = AppColors.DarkGrey,
}) => (
  <ProfileNavLine
    height={size}
    width={size}
    color={color}
    // style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const CalenderViewIcon = ({ size = 30, color = AppColors.white }) => (
  <CalenderView
    height={size}
    width={size}
    color={color}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

// Nomemory.svg

export const RecentIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <Nomemory
    height={size}
    width={size}
    color={color}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);
export const SearchNavIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <Search
    height={size}
    width={size}
    color={color}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);
export const HomeNavIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <Home
    height={size}
    width={size}
    color={color}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const CancelIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <Cancel
    height={size}
    width={size}
    color={color}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const CropIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <Crop
    height={size}
    width={size}
    color={color}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const MyProfileIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <MyProfile
    height={size}
    width={size}
    color={color}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const SettingsIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <Settings
    height={size}
    width={size}
    color={color}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);
export const HelpIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <Help
    height={size}
    width={size}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);
export const LogoutIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <Logout
    height={size}
    width={size}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);
export const BioIconAvatar = ({ size = 30, color = AppColors.DarkGrey }) => (
  <BioAv
    height={size}
    width={size}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const BioIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <Bio
    height={size}
    width={size}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const GoldIcon = ({ size = 30 }) => (
  <Gold
    height={size}
    width={size}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);
export const SilverIcon = ({ size = 30 }) => (
  <Silver
    height={size}
    width={size}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);
export const BronzeIcon = ({ size = 30 }) => (
  <Bronze
    height={size}
    width={size}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);
export const StarUnFilledIcon = ({ size = 30 }) => (
  <StarUnFilled
    height={size}
    width={size}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const ReactionsIcon = ({ size = 30 }) => (
  <Reactions
    height={size}
    width={size}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const GlobalIcon = ({ size = 30 }) => (
  <Global
    height={size}
    width={size}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const CloseonesIcon = ({ size = 30 }) => (
  <Closeones
    height={size}
    width={size}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const KnownonesIcon = ({ size = 30 }) => (
  <Knownones
    height={size}
    width={size}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const ProfileIcon = ({ size = 30 }) => (
  <Profile
    height={size}
    width={size}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const NotesIcon = ({ size = 30 }) => (
  <Notes
    height={size}
    width={size}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);
export const ShareIcon = ({ size = 30 }) => (
  <Share
    height={size}
    width={size}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);
export const DownArrowIcon = ({ size = 30 }) => (
  <DownArrow
    height={size}
    width={size}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const BioCircleIcon = ({ size = 30 }) => {
  return (
    <BioCircle
      height={size}
      width={size}
      style={{ backgroundColor: AppColors.Transparent }}
    />
  );
};

export const AddCirecleIcon = ({ size = 30 }) => {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderColor: AppColors.DarkGrey,
          borderWidth: 2,
        },
        GStyles.containView,
      ]}
    >
      <AddIcon size={size * 0.5} color='white' />
    </View>
  );
};

export const MinusCircleIcon = ({ size = 30 }) => {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderColor: AppColors.DarkGrey,
          borderWidth: 1,
        },
        GStyles.containView,
      ]}
    >
      <Minus width={size * 0.5} height={size * 0.5} />
    </View>
  );
};

export const AddIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <Add
    height={size}
    width={size}
    color={color}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const NoideaIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <NoIdea
    height={size}
    width={size}
    color={color}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const AddDarkIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <View
    style={{
      backgroundColor: color,
      width: size,
      height: size,
      borderRadius: size,
      ...GStyles.containView,
    }}
  >
    <AddIcon size={size * 0.6} color={AppColors.white} />
  </View>
);

export const DoneCircleIcon = ({ size = 30, color = AppColors.green }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        borderRadius: size,
        ...GStyles.containView,
      }}
    >
      <DoneFill
        height={size * 0.4}
        width={size * 0.4}
        color={AppColors.white}
        style={{ backgroundColor: AppColors.Transparent }}
      />
    </View>
  );
};


export const ErrorCircleIcon = ({ size = 30, color = AppColors.Red }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        borderRadius: size,
        ...GStyles.containView,
      }}
    >
      <Cancel
        height={size * 0.4}
        width={size * 0.4}
        color={AppColors.white}
        style={{ backgroundColor: AppColors.Transparent }}
      />
      
    </View>
  );
};


//  CAMERA ICONS
export const CameraIcon = ({ size = 30 }) => {
  return (
    <Camera
      height={size}
      width={size}
      style={{ backgroundColor: AppColors.Transparent }}
    />
  );
};

export const CameraWhiteIcon = ({ size = 30 }) => {
  return (
    <CameraWhite
      height={size}
      width={size}
      style={{ backgroundColor: AppColors.Transparent }}
    />
  );
};

export const SmileOutlineIcon = ({ size = 30 }) => {
  return (
    <SmileOutline
      height={size}
      width={size}
      style={{ backgroundColor: AppColors.Transparent }}
    />
  );
};

export const WishlistFillIcon = ({ size = 30, color = '#3b4ded' }) => (
  <WishlistFill
    height={size}
    width={size}
    style={{ backgroundColor: AppColors.Transparent }}
    color={color}
  />
);

export const BirthDayIcon = ({ size = 30 }) => {
  return (
    <BirthDay
      height={size}
      width={size}
      style={{ backgroundColor: AppColors.Transparent }}
    />
  );
};

export const ChatIcon = ({ size = 30 }) => {
  return (
    <Chat
      height={size}
      width={size}
      style={{ backgroundColor: AppColors.Transparent }}
    />
  );
};
// 5c5c5c
export const ChatFilledIcon = ({ size = 30, color = AppColors.DarkGrey }) => (
  <ChatIconFilled
    height={size}
    width={size}
    color={color}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const WishlistIcon = ({ size = 30, color = AppColors.DarkGrey }) => {
  return (
    <Wishlist
      height={size}
      width={size}
      color={color}
      style={{ backgroundColor: AppColors.Transparent }}
    />
  );
};

export const HeartFillIcon = ({ size = 30, color = '#f0645a' }) => {
  return (
    <HeartFill
      height={size}
      width={size}
      color={color}
      style={{ backgroundColor: AppColors.Transparent }}
    />
  );
};

export const HeartIcon = ({ size = 30 }) => {
  return (
    <Heart
      height={size}
      width={size}
      style={{ backgroundColor: AppColors.Transparent }}
    />
  );
};

export const RadioButtonGreen = ({}) => {
  return (
    <View
      style={{
        ...GStyles.containView,
        backgroundColor: AppColors.green,
        width: 20,
        height: 20,
        borderRadius: 10,
      }}
    >
      <DoneFillIcon size={10} color={AppColors.white} />
    </View>
  );
};
export const RadioButtonOff = ({}) => {
  return (
    <View
      style={{
        ...GStyles.containView,
        borderColor: AppColors.LightGrey,
        borderWidth: 2,
        backgroundColor: AppColors.Transparent,
        width: 20,
        height: 20,
        borderRadius: 10,
      }}
    >
      {/* <DoneFillIcon size={10} color={AppColors.white} /> */}
    </View>
  );
};

export const DoneFillIcon = ({ size = 30, color = '#37b34a' }) => (
  <DoneFill
    height={size}
    width={size}
    color={color}
    style={{ backgroundColor: AppColors.Transparent }}
  />
);

export const DoneIcon = ({ size = 30 }) => {
  return (
    <Done
      height={size}
      width={size}
      color={AppColors.MediumGrey}
      style={{ backgroundColor: AppColors.Transparent }}
    />
  );
};

export const EditIcon = ({ size = 30 }) => {
  return (
    <Edit
      height={size}
      width={size}
      style={{ backgroundColor: AppColors.Transparent }}
    />
  );
};

export const EditWIcon = ({ size = 30 }) => {
  return (
    <EditWhite
      height={size}
      width={size}
      style={{ backgroundColor: AppColors.Transparent }}
    />
  );
};




export const AvatarIcon = ({ size = 30, color = AppColors.DarkGrey }) => {
  return (
    <Avatar
      height={size}
      width={size}
      color={color}
      style={{ backgroundColor: AppColors.Transparent }}
    />
  );
};

export const GenderIcon = ({ size = 30 }) => {
  return (
    <Gender
      height={size}
      width={size}
      style={{ backgroundColor: AppColors.Transparent }}
    />
  );
};

export const CalenderIcon = ({ size = 30 }) => {
  return (
    <Calender
      height={size}
      width={size}
      style={{ backgroundColor: AppColors.Transparent }}
    />
  );
};
export const NointernetIcon = ({ size = 30 }) => {
  return (
    <Nointernet
      height={size}
      width={size}
      style={{ backgroundColor: AppColors.Transparent }}
    />
  );
};
