import Leaf from "./Leaf"
import Leaf1 from '../assets/images/leaf01.png'
import Leaf2 from '../assets/images/leaf02.png'
import Leaf3 from '../assets/images/leaf03.png'
import Leaf4 from '../assets/images/leaf04.png'
import Leaf5 from '../assets/images/leaf05.png'
import { motion } from 'framer-motion'
import { leavesContainer } from "../varaints"


const LeafContainer = () => {
  return (
    <motion.div
      variants={leavesContainer}
      initial="initial"
      animate="animate"
    >
      <Leaf animationSpeed={1.8} className="leafWrapper-1" imageUrl={Leaf1} />
      <Leaf animationSpeed={1.6} className="leafWrapper-2" imageUrl={Leaf2} />
      <Leaf animationSpeed={1.5} className="leafWrapper-3" imageUrl={Leaf3} />
      <Leaf animationSpeed={1.7} className="leafWrapper-4" imageUrl={Leaf4} />
      <Leaf animationSpeed={1.9} className="leafWrapper-5" imageUrl={Leaf5} />
    </motion.div>
  )
}

export default LeafContainer