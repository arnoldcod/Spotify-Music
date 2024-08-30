import { useDisclosure } from '@mantine/hooks';
import { Drawer,  Burger } from '@mantine/core';
import { navLinks } from './Header';


const SideBar=()=> {
  const [opened, { toggle }] = useDisclosure(false);


  return (
    <>
   

      <Drawer.Root className='md:hidden !-z-10' position='right' opened={opened} onClose={toggle}    size="50vw"  >
        <Drawer.Overlay className='!-z-0' style={{backgroundOpacity:0.5, blur:4}} />
        <Drawer.Content className='!-z-0' bg='#0a192f' >
          <Drawer.Body className='mt-20 flex flex-col' bg='#0a192f'>
             {navLinks(true)}
            </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      
      <Burger className='md:!hidden !z-10' size='lg'  color='#64ffda'   opened={opened} onClick={toggle}  />;

    </>
  );
}
export default SideBar;