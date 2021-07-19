

export const AboutItemList = ({ links, children, sSize, mSize, lSize, xlSize, xxlSize }) => {
  return (
    <div className="about-item">
      <div className="about-item__title">Chart applied for:</div>
      <ul className="about-item__links">
        {links.map((link, index) => {
          return <li><a key={index} href="#">{link}</a></li>
        })}
      </ul>
      <div className="about-item__inner">
        {children}
        <table className="about-item__size">
          <tr className="about-table">
            <th></th>
            <th>W</th>
            <th>H</th>
          </tr>
          <tr className="about-table">
            <td className="about-table__title">S</td>
            {sSize.map((s, index) => {
              return <td className="about-table__size" key={index}>{s}</td>
            })}
          </tr>
          <tr className="about-table">
            <td className="about-table__title">M</td>
            {mSize.map((m, index) => {
              return <td className="about-table__size" key={index}>{m}</td>
            })}
          </tr>
          <tr className="about-table">
            <td className="about-table__title">L</td>
            {lSize.map((l, index) => {
              return <td className="about-table__size" key={index}>{l}</td>
            })}
          </tr>
          <tr className="about-table">
            <td className="about-table__title">XL</td>
            {xlSize.map((xl, index) => {
              return <td className="about-table__size" key={index}>{xl}</td>
            })}
          </tr>
          <tr className="about-table">
            <td className="about-table__title">2XL</td>
            {xxlSize.map((xxl, index) => {
              return <td className="about-table__size" key={index}>{xxl}</td>
            })}
          </tr>
        </table>
      </div>
    </div>
  )
}




