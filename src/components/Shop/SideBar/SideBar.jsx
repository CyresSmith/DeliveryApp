import ShopItem from './ShopItem';
import { SideBarBox } from './SideBar.styled';

const shops = [
  { name: 'MacDac' },
  { name: 'KLC' },
  { name: 'SubHay' },
  { name: 'Shaverma' },
];

const SideBar = () => {
  return (
    <SideBarBox>
      {shops.map(({ name }) => (
        <ShopItem key={name} name={name} />
      ))}
    </SideBarBox>
  );
};

export default SideBar;
