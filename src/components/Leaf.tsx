type LeafType = {
  className: string,
  imageUrl: string
}

const Leaf = ({ className, imageUrl }: LeafType) => {
  return (
    <div className={className}>
      <img src={imageUrl} className="leaf" />
    </div>
  )
}

export default Leaf