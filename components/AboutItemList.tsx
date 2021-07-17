

const links = ["first", "secondary"];

export const AboutItemList = () => {
  return (
    <div>
      {links.map((link, index) => {
        return <a key={index} href="#"></a>
      })}
    </div>
  )
}



