import { FaDesktop, FaHeadphonesSimple } from 'react-icons/fa6';
import { MdOutlineLaptopChromebook, MdStorefront } from 'react-icons/md';
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { CiSpeaker } from "react-icons/ci";
import { GiWatch } from "react-icons/gi";
import { PiComputerTower } from "react-icons/pi";
import { GrMonitor } from 'react-icons/gr';
import { CgScreenWide } from "react-icons/cg";
import { BsFillMouse3Fill } from 'react-icons/bs';

export const categories = [
    {
        label: 'All',
        icon: MdStorefront,
    },
    {
        label: 'Phones',
        icon: HiMiniDevicePhoneMobile,
    },
    {
        label: 'Headphones',
        icon: FaHeadphonesSimple,
    },
    {
        label: 'LCDs & TVs',
        icon: CgScreenWide,
    },
    {
        label: 'Speakers',
        icon: CiSpeaker,
    },
    {
        label: 'PCs & Desktops',
        icon: GrMonitor,
    },
    {
        label: 'Laptops',
        icon: MdOutlineLaptopChromebook,
    },
    {
        label: 'Mouses',
        icon: BsFillMouse3Fill,
    },
    {
        label: 'Watches',
        icon: GiWatch,
    },
    {
        label: 'Accessories',
        icon: PiComputerTower,
    },
];
