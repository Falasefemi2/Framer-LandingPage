import {motion} from 'framer-motion'
import { leaf, leafWrapper } from '../varaints'

type LeafType = {
  className: string,
  imageUrl: string,
  animationSpeed: number
}

const Leaf = ({ className, imageUrl, animationSpeed }: LeafType) => {
  return (
    <motion.div 
    variants={leafWrapper}
    className={className}>
      <motion.img 
      custom={animationSpeed}
      variants={leaf}
      src={imageUrl} className="leaf" />
    </motion.div>
  )
}

export default Leaf