import HuTao from '../img/HuTao.jpg';
import { motion } from "framer-motion"

const Gradient = () => {
    return (
        <>
            <motion.img whileHover={{ x: -200 }} className='absolute md:right-0 top-0 w-96 h-128 mt-96 md:mt-16 rounded-md' src={HuTao} />
        </>
    );
}

export default Gradient;
