import Leaf from "./Leaf"
import Leaf1 from '../assets/images/leaf01.png'
import Leaf2 from '../assets/images/leaf02.png'
import Leaf3 from '../assets/images/leaf03.png'
import Leaf4 from '../assets/images/leaf04.png'
import Leaf5 from '../assets/images/leaf05.png'


const LeafContainer = () => {
  return (
    <div>
        <Leaf className="leafWrapper-1" imageUrl={Leaf1} />
        <Leaf className="leafWrapper-2" imageUrl={Leaf2} />
        <Leaf className="leafWrapper-3" imageUrl={Leaf3} />
        <Leaf className="leafWrapper-4" imageUrl={Leaf4} />
        <Leaf className="leafWrapper-5" imageUrl={Leaf5} />
    </div>
  )
}

export default LeafContainer