import hradUrl from './hrad.svg';

export const Uloha2 = () => {
  const handleMouseEnter = () => {
    return alert('„Na hradě je myš!“');
  };
  return <img onMouseEnter={handleMouseEnter} src={hradUrl} width={60} height={60} alt="hrad" />;
};
