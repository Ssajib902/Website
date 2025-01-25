import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

  return (
    <>
        <section className='mb-12 sm:p-5'>
            <SectionTitle
            heading={"Popular Items"}
            subHeading={"From our Menu"}>
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    </>
  )
}

export default PopularMenu