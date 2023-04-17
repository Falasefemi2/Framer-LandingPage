import { motion } from 'framer-motion'
import bottlePic from '../assets/images/juice.png'
import { bottle, bottleWrapper } from '../varaints'

const BottleContainer = () => {
  return (
    <motion.div
      variants={bottleWrapper}
      initial="initial"
      animate="animate"
      className="bottleWrapper">
      <motion.img
        variants={bottle}
        src={bottlePic} className="bottle" />
    </motion.div>
  )
}

export default BottleContainer